import React, {Component,Fragment} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import OutsideClickHandler from 'react-outside-click-handler';
import Autocomplete from '../../Util/autocomplete';
import JSOG from 'jsog';
import {parse, stringify} from 'flatted/esm';
class Neighborhood extends Component {
  
    
    //to load data upon generation.
   constructor(props){  
      super(props);  
      this.state = {  
         neighborhoodError: ''  ,cityList:[],cityFilterList:[],
       neighborhood:{value:"",city:""},neighborhoodNames:[""], list:[],
       action:"",
       filterList:[],
       currentValue:"",currentValuecity:"",
       tags:"",
       isInvisible:true,isLoading:false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filterList=this.filterList.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onClick = this.onClick.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.changeValue = this.changeValue.bind(this);}
        //to load data upon generation.
        changeValue=(target,value)=>{
          if(target==='list'){
            this.setState({list:value}, function () {
              console.log(this.state.list);
            });
          }
          else{
            this.setState({neighborhood:value}, function () {
              console.log(this.state.neighborhood);
            });
          }}
       //to filter list
      filterList(event,type){
        if(type==='city'){
          let newlist=[];
          this.state.cityList.map((e)=>{
            if(e.value.startsWith(event)){
               newlist.push(e.value+","+e.region.value+","+e.region.country.value);
            }
          
          }); 

         
         this.setState({ cityFilterList:newlist }, () => {
          console.log(this.state.cityFilterList);
         });
          this.setState({currentValuecity:event});



         
          
        }
        else{
          let newlist=[];
          this.state.list.map((e)=>{
            if(e.value.startsWith(this.state.currentValue)&&this.state.currentValue!==''){
              newlist.push(e.value+","+e.city.value+","+e.city.region.value+","+e.city.region.country.value);
            }
           
          }); 
          this.setState({filterList:newlist}); 
            this.setState({currentValue:event});
        }
  
}
//when a tag in a dropbox is clicked current value is the tags value
onClick(id){
  let newValue=this.state.filterList[id];
  this.setState({currentValue:newValue});
  this.setState({isInvisible:true});
}
//to generate tags

//upon input change.
onChange(event){
 

  this.filterList(event,'neighborhood');
}
onChangeCity(event){
 
  this.filterList(event,'city');
}

         //to remove item upon request.
     removeItem(){
      let path='/neighborhood';
      axios.delete(
        'http://localhost:8080/neighborhood/'+this.props.id);
      window.location.reload(false);
     }
      
      async  componentDidMount() {
        
        let ofList=[];
            await axios.get(
              'http://localhost:8080/neighborhood')
                 .then(res => {
                  let newList=res.data;
                  let newObject={};
                  let target="";
                 target = JSOG.stringify(res.data);
                  newObject= JSOG.parse(target);
                  newObject.map(
                    (e)=>{
                      ofList.push({id:e.id,value:e.value,city:e.city});
                    }
                   );
               }).then().catch(
               function (error) {
                console.log(error);
              });
              this.setState({list:ofList});
        

          let fromList=[];
         await axios.get(
            'http://localhost:8080/'+"city")
               .then(res => {
                 let newList=res.data;
                 let newObject={};
                 let target="";
                target = JSOG.stringify(res.data);
                 newObject= JSOG.parse(target);
                 newObject.map(
                  (e)=>{
                   
                      fromList.push({id:e.id,value:e.value,region:e.region});
                    
                    
                  }
                 );
             }).then().catch(
             function (error) {
              console.log(error);
            });
            this.setState({cityList:fromList});

        if(this.props.id!==-1){
        axios.get('http://localhost:8080/neighborhood'+"/getById/"+this.props.id)
             .then(res => {
                this.changeValue('neighborhood', res.data);
                
           }).catch(
           function (error) {
            console.log(error);
          });}
          else{

           
            let emptyItem={
              value:"",city:this.props.city
            }
            this.setState({neighborhood:emptyItem});
          }
          
      } 
      //upon entering the input button edit or save will be completed.
      async handleSubmit(event) {
         event.preventDefault();

         let supraList=this.state.cityList;
         let newNeighborhood=this.state.neighborhood;
         for(let i=0;i<supraList.length;i++){
          let values=this.state.currentValuecity.split(',');
          if(supraList[i].value===this.state.currentValuecity.split(',')[0]&&supraList[i].region.value===this.state.currentValuecity.split(',')[1]&&supraList[i].region.country.value===this.state.currentValuecity.split(',')[2]){
            newNeighborhood.city=supraList[i];
          }
         }
          newNeighborhood.value=this.state.currentValue; 
          this.setState({neighborhood:newNeighborhood});

         await axios.post(
          'http://localhost:8080/neighborhood', { id: newNeighborhood.city.id ,name:newNeighborhood.value})
             .then(res => {
                this.setState({neighborhoodError: res.data});this.setState({isLoading:true});
           }).catch(
           function (error) {
            console.log(error);
          });
          newNeighborhood.city=null;
         await this.setState({neighborhood:newNeighborhood});
     }
    render()
    {
   
if(this.state.neighborhood.city===null){
  return( <div>

    <div> city: <Autocomplete list={this.state.cityFilterList} onChangeValue={this.onChangeCity}/></div>
 <form  onSubmit={this.handleSubmit} >
 <div><b>previous value:{this.state.neighborhood.value || ''}</b></div>
    <label>neighborhood:</label>
    <Autocomplete list={this.state.filterList} onChangeValue={this.onChange}/>
    <div>{this.state.neighborhoodError}</div>
    <input type="submit" value="Submit"></input>
 </form>
 <button onClick={this.removeItem}>
    Delete
  </button>
</div>);
}

           return( <div>

                                          <div> city: {this.state.neighborhood.city.name || ''}</div>
                                       <form  onSubmit={this.handleSubmit} >
                                       <div><b>previous value:{this.state.neighborhood.value || ''}</b></div>
                                          <label>neighborhood:</label>
                                          <Autocomplete list={this.state.filterList} onChangeValue={this.onChange}/>
                                          <div>{this.state.neighborhoodError}</div>
                                          <input type="submit" value="Submit"></input>
                                       </form>
                                       <button onClick={this.removeItem}>
                                          Delete
                                        </button>
                                </div>);



  }
}

// Exporting the component
export default Neighborhood;