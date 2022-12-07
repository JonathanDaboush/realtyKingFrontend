import React, {Component,Fragment} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import OutsideClickHandler from 'react-outside-click-handler';
import Autocomplete from '../../Util/autocomplete';
import JSOG from 'jsog';
class Region extends Component {
  
    
    //to load data upon generation.
   constructor(props){  
      super(props);  
      this.state = {  
         regionError: ''  ,countryList:[],countryFilterList:[],
       region:{value:"",country:""},regionNames:[""], list:[],
       action:"",
       filterList:[],
       currentValue:"",currentValueCountry:"",
       tags:"",
       isInvisible:true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filterList=this.filterList.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
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
            this.setState({region:value}, function () {
              console.log(this.state.region);
            });
          }}
       //to filter list
      filterList(event,type){
        if(type==='country'){
          let newlist=[];
          this.state.countryList.map((e)=>{
            if(e.value.startsWith(event)){
               newlist.push(e.value);
            }
          
          }); 

         
         this.setState({ countryFilterList:newlist }, () => {
          console.log(this.state.countryFilterList);
         });
         console.log(this.state.countryFilterList);
         console.log(newlist);
          this.setState({currentValueCountry:event});



         
          
        }
        else{
          let newlist=[];
          this.state.list.map((e)=>{
            if(e.value.startsWith(this.state.currentValue)){
              newlist.push(e.value+","+e.country.value);
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
 

  this.filterList(event,'region');
}
onChangeCountry(event){
 
  this.filterList(event,'country');
}

         //to remove item upon request.
     removeItem(){
      let path='/region';
      axios.delete(
        'http://localhost:8080/'+path+"/"+this.props.id);
      window.location.reload(false);
     }
      
      async componentDidMount() {
        let path='/region';
        let ofList=[];
            await axios.get(
              'http://localhost:8080/region')
                 .then(res => {
                  let newList=res.data;
                  let newObject={};
                  let target="";
                 target = JSOG.stringify(res.data);
                  newObject= JSOG.parse(target);
                  console.log(newObject);
                  newObject.map(
                    (e)=>{
                      ofList.push({id:e.id,value:e.value,country:e.country});
                    }
                   );
               }).then().catch(
               function (error) {
                console.log(error);
              });
              this.setState({list:ofList});
        

          let fromList=[];
          await axios.get(
            'http://localhost:8080/'+"country")
               .then(res => {
                let newList=res.data;
                let newObject={};
                let target="";
               target = JSOG.stringify(res.data);
                newObject= JSOG.parse(target);
                console.log(newObject);
                newObject.map(
                  (e)=>{
                    fromList.push({id:e.id,value:e.value});
                  }
                 );
             }).then().catch(
             function (error) {
              console.log(error);
            });
            this.setState({countryList:fromList});

        if(this.props.id!==-1){
        await axios.get(
          'http://localhost:8080'+path+"/getById/"+this.props.id)
             .then(res => {
              this.changeValue('region', res.data);
           }).catch(
           function (error) {
            console.log(error);
          });}
          else{

           
            let emptyItem={
              value:"",country:this.props.country
            }
            this.setState({region:emptyItem});
          }
          console.log(this.state.region);
      } 
      //upon entering the input button edit or save will be completed.
      async handleSubmit(event) {
         event.preventDefault();

         let newRegion=this.state.region;
         await axios.get('http://localhost:8080/country/getByName/'+this.state.currentValueCountry).then(res=>{
           newRegion.country=res.data[0];}
         ).catch(
           function (error) {
            console.log(error);
          });
          newRegion.value=this.state.currentValue;
          this.setState({region:newRegion});

         let path='/region';
         await axios.post(
          'http://localhost:8080/region',this.state.region)
             .then(res => {
                this.setState({regionError: res.data});
           }).catch(
           function (error) {
            console.log(error);
          });
     }
    render()
    {
   
if(this.state.region.country===null){
  return( <div>

    <div> country: <Autocomplete list={this.state.countryFilterList} onChangeValue={this.onChangeCountry}/></div>
 <form  onSubmit={this.handleSubmit} >
 <div><b>previous value:{this.state.region.value || ''}</b></div>
    <label>region:</label>
    <Autocomplete list={this.state.filterList} onChangeValue={this.onChange}/>
    <div>{this.state.regionError}</div>
    <input type="submit" value="Submit"></input>
 </form>
 <button onClick={this.removeItem}>
    Delete
  </button>
</div>);
}

           return( <div>

                                          <div> country: {this.state.region.country.value || ''}</div>
                                       <form  onSubmit={this.handleSubmit} >
                                       <div><b>previous value:{this.state.region.value || ''}</b></div>
                                          <label>region:</label>
                                          <Autocomplete list={this.state.filterList} onChangeValue={this.onChange}/>
                                          <div>{this.state.regionError}</div>
                                          <input type="submit" value="Submit"></input>
                                       </form>
                                       <button onClick={this.removeItem}>
                                          Delete
                                        </button>
                                </div>);



  }
}

// Exporting the component
export default Region;