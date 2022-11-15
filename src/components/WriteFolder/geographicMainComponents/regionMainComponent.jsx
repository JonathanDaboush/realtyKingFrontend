import React, {Component,Fragment} from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import OutsideClickHandler from 'react-outside-click-handler';
import Autocomplete from '../../Util/autocomplete';
class Region extends Component {
   static propTypes = {
      suggestions: PropTypes.instanceOf(Array)
    };
  
    static defaultProps = {
      suggestions: []
    };
    emptyItem={
      value:"",country:""
    }
    //to load data upon generation.
   constructor(props){  
      super(props);  
      this.state = {  
         regionError: ''  ,list:[],
       region:this.emptyItem,regionNames:[""], list:[],
       action:"",
       filterList:[],
       currentValue:"",
       tags:"",
       isInvisible:true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filterList=this.filterList.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onClickAway = this.onClickAway.bind(this);
        this.onGenerate = this.onGenerate.bind(this);
        this.removeItem = this.removeItem.bind(this);
      } 
       //to filter list
       async filterList(){
  let newlist=[];
  this.state.list.map((e)=>{
    if(e.startsWith(this.state.currentValue)){
      newlist.concat(e);
    }
   
  }); this.setState({filterList:newlist});
}
//when a tag in a dropbox is clicked current value is the tags value
async onClick(id){
  let newValue=this.state.filterList[id];
  this.setState({currentValue:newValue});
  this.setState({isInvisible:true});
}
//to generate tags
async onGenerate(){
  let newTags="";
  this.state.list.map((e,index)=>{
    
    newTags+=
      '<button id='+index+'  onClick='+this.onClick(index)+'>'+e+'</button>';
  });
  this.setState({tags:newTags});
}
//upon input change.
async onChange(event){
 
  let currentValueIndex=-1;
  this.state.currentValue.map((e,index)=>{
    if(e===event.target.value){
      currentValueIndex=index;
    }
  });
  let list=this.state.list;
  this.setState({currentValue:list[currentValueIndex]}); 
  
  this.filterList();
  this.onGenerate();
  this.setState({isInvisible:false});
}
//if user clicks outside query box
async onClickAway(){
  this.setState({tags:""});
  this.setState({filterList:[]});
  this.setState({isInvisible:true});
}
         //to remove item upon request.
     async removeItem(){
      let path='/region';
      axios.delete(
        'http://localhost:8080'+path+"/"+this.props.id);
      window.location.reload(false);
     }
      
       async componentDidMount() {
        let path='/region';
        let ofObject
        if(this.props.id!==-1){
        await axios.get(
          'http://localhost:8080'+path+"/"+this.props.id)
             .then(res => { ofObject=res.data;
           }).catch(
           function (error) {
            console.log(error);
          });}
          else{
            let emptyItem={
              value:"",country:this.props.country
            }
            ofObject=emptyItem;
           
          } await this.setState({region:ofObject});
          console.log(this.state.region);
      } 
      //upon entering the input button edit or save will be completed.
       async handleSubmit(event) {
         event.preventDefault();
         let path='/region';
         let ofError="";
         axios.post(
          'http://localhost:8080'+path,this.state.region)
             .then(res => { ofError=res;
           }).catch(
           function (error) {
            let emptyItem="";
            window.location.reload(false);
             ofError=emptyItem;
          });this.setState({regionError:ofError});
     }
    render()
    {
   


           return( <div>

                                          <div> country: {this.state.region.country.name || ''}</div>
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