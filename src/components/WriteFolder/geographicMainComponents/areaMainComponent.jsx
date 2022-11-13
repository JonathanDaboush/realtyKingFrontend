import React, {Component,Fragment} from 'react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import OutsideClickHandler from 'react-outside-click-handler';

class Area extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };
  emptyItem={
    value:"",country:""
  }
  constructor(props){  
    super(props);  
    this.state = {  
      areaError: '' ,list:[],
        area:this.emptyItem,
        areaNames:[""], list:[],
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
   
      
//to load data upon generation.
  async componentDidMount() {
    if(this.props.id){
      let newTags="";
    let path='/area';
          await axios.get(
            'http://localhost:8080'+path+"/"+this.props.id)
               .then(res => {
                  this.setState({area: res});
             }).catch(
             function (error) {
              let emptyItem={
                      value:"",country:this.props.country
                    }
              this.setState({area:emptyItem});
            });

      } 
  }
  //to remove item upon request.
  async removeItem(){
    let path='/area';
    axios.delete(
      'http://localhost:8080'+path+"/"+this.props.id);
    window.location.reload(false);
   }
   //upon entering the input button edit or save will be completed.
  async handleSubmit(event) {
    event.preventDefault();
    let path='/area';
    await axios.post(
      'http://localhost:8080'+path,this.state.area)
         .then(res => {
            this.setState({areaError: res});
       }).catch(
       function (error) {
        let emptyItem="";
        window.location.reload(false);
        this.setState({areaError:emptyItem});
      });
}
 //to filter list
 async filterList(){
  let newlist=[];
  this.state.list.map((e)=>{
    if(e.startsWith(this.state.currentValue)){
      newlist.concat(e);
    }
   
  }); await this.setState({filterList:newlist});
}
//when a tag in a dropbox is clicked current value is the tags value
async onClick(id){
  let newValue=this.state.filterList[id];
  await this.setState({currentValue:newValue});
  await this.setState({isInvisible:true});
}
//to generate tags
async onGenerate(){
  let newTags=[];
  this.state.list.map((e,index)=>{
    
    newTags+=
       '<button id='+index+'  onClick='+this.onClick(index)+'>'+e+'</button>';
  });
  await this.setState({tags:newTags});
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
  await this.setState({currentValue:list[currentValueIndex]}); 
  
  this.filterList();
  this.onGenerate();
  await this.setState({isInvisible:false});
}
//if user clicks outside query box
async onClickAway(){
  await this.setState({tags:""});
  await this.setState({filterList:[]});
  await this.setState({isInvisible:true});
}
    render()
    {
           

     

           return( <div>

                                      <div> country: {this.state.area.region.country.value ? this.state.area.region.country.value : ''}</div>
                                       
                                      <div>region: {this.state.area.region.value ? this.state.area.region.value : ''}</div>

                                      <form onSubmit={this.handleSubmit}>
                                      <div><b>previous value:{this.state.area.value || ''}</b></div>
                                          <label>area:</label>
                                          <input type="text" id="fieldName" className="fieldName" onChange={this.onChange} value={this.state.currentValue}/>
                                        <OutsideClickHandler
                                            onOutsideClick={() => {
                                            this.onClickAway();
                                            }}
                                          >
                                            <div  dangerouslySetInnerHTML={{ __html: this.state.tags }}></div>
                                        </OutsideClickHandler>
                                          <div>{this.state.areaError}</div>
                                          <input type="submit" value="Submit"></input>
                                       </form>
                                       <button onClick={this.removeItem}>
                                          Delete
                                        </button>
                                </div>);



  }
}

// Exporting the component
export default Area;