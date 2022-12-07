import React, {Component,Fragment} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import OutsideClickHandler from 'react-outside-click-handler';
import Autocomplete from '../../Util/autocomplete';
import JSOG from 'jsog';
class City extends Component {
  
    
    //to load data upon generation.
   constructor(props){  
      super(props);  
      this.state = {  
         cityError: ''  ,regionList:[],regionFilterList:[],
       city:{value:"",region:""},cityNames:[""], list:[],
       action:"",
       filterList:[],
       currentValue:"",currentValueregion:"",
       tags:"",
       isInvisible:true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filterList=this.filterList.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeRegion = this.onChangeRegion.bind(this);
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
            this.setState({city:value}, function () {
              console.log(this.state.city);
            });
          }}
       //to filter list
      filterList(event,type){
        if(type==='region'){
          let newlist=[];
          this.state.regionList.map((e)=>{
            if(e.value.startsWith(event)){
              newlist.push(e.value+","+e.country.value);
            }
          
          }); 

         
         this.setState({ regionFilterList:newlist }, () => {
          console.log(this.state.regionFilterList);
         });
         console.log(this.state.regionFilterList);
         console.log(newlist);
          this.setState({currentValueregion:event});



         
          
        }
        else{
          let newlist=[];
          this.state.list.map((e)=>{
            if(e.value.startsWith(this.state.currentValue)){
              newlist.push(e.value+","+e.region.value+","+e.region.country.value);
            }
           
          }); 
          this.setState({filterList:newlist}); 
          console.log(this.state.filterList);
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
 

  this.filterList(event,'city');
}
onChangeRegion(event){
 
  this.filterList(event,'region');
}

         //to remove item upon request.
     removeItem(){
      let path='/city';
      axios.delete(
        'http://localhost:8080/'+path+"/"+this.props.id);
      window.location.reload(false);
     }
      
       async componentDidMount() {
        let path='/city';
        let ofList=[];
            await axios.get(
              'http://localhost:8080/city')
                 .then(res => {
                  let newList=res.data;
                  let newObject={};
                  let target="";
                 target = JSOG.stringify(res.data);
                  newObject= JSOG.parse(target);
                  console.log(newObject);
                  newObject.map(
                    (e)=>{
                      ofList.push({id:e.id,value:e.value,region:e.region});
                    }
                   );
               }).then().catch(
               function (error) {
                console.log(error);
              });
              this.setState({list:ofList});
              
        

          let fromList=[];
          await axios.get(
            'http://localhost:8080/'+"region")
               .then(res => {
                let newList=res.data;
                let newObject={};
                let target="";
               target = JSOG.stringify(res.data);
                newObject= JSOG.parse(target);
                console.log(newObject);
                newObject.map(
                  (e)=>{
                    fromList.push({id:e.id,value:e.value,country:e.country});
                  }
                 );
             }).then().catch(
             function (error) {
              console.log(error);
            });
            this.setState({regionList:fromList});

        if(this.props.id!==-1){
        axios.get(
          'http://localhost:8080/city'+"/getById/"+this.props.id)
             .then(res => {
              this.changeValue('city', res.data);
           }).catch(
           function (error) {
            console.log(error);
          });}
          else{

           
            let emptyItem={
              value:"",region:this.props.region
            }
            this.setState({city:emptyItem});
          }
          console.log(this.state.city);
      } 
      //upon entering the input button edit or save will be completed.
      async handleSubmit(event) {
         event.preventDefault();

         let newcity=this.state.city;
         let supraList=this.state.regionList;
         
         for(let i=0;i<supraList.length;i++){
          if(supraList[i].value===this.state.currentValueregion.split(',')[0]){
            newcity.region=supraList[i];
          }
         }
          newcity.value=this.state.currentValue;
          this.setState({city:newcity});
         await axios.post(
          'http://localhost:8080/city',this.state.city)
             .then(res => {
                this.setState({cityError: res.data});
           }).catch(
           function (error) {
            console.log(error);
          });
     }
    render()
    {
   if(this.state.city.region===''){return(<div></div>)}
if(this.state.city.region===null){
  return( <div>

    <div> region: <Autocomplete list={this.state.regionFilterList} onChangeValue={this.onChangeRegion}/></div>
 <form  onSubmit={this.handleSubmit} >
 <div><b>previous value:{this.state.city.value || ''}</b></div>
    <label>city:</label>
    <Autocomplete list={this.state.filterList} onChangeValue={this.onChange}/>
    <div>{this.state.cityError}</div>
    <input type="submit" value="Submit"></input>
 </form>
 <button onClick={this.removeItem}>
    Delete
  </button>
</div>);
}

           return( <div>

                                          <div> region: {this.state.city.region.value || ''}</div>
                                       <form  onSubmit={this.handleSubmit} >
                                       <div><b>previous value:{this.state.city.value || ''}</b></div>
                                          <label>city:</label>
                                          <Autocomplete list={this.state.filterList} onChangeValue={this.onChange}/>
                                          <div>{this.state.cityError}</div>
                                          <input type="submit" value="Submit"></input>
                                       </form>
                                       <button onClick={this.removeItem}>
                                          Delete
                                        </button>
                                </div>);



  }
}

// Exporting the component
export default City;