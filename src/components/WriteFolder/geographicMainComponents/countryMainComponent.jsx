import React, {Component,Fragment} from 'react';
import PropTypes from "prop-types";
import Autocomplete from '../../Util/autocomplete';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

class Country extends Component {
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
      countryError: '',list:[],
      country:this.emptyItem,countryNames:[""],
      action:"",
      filterList:[],
      currentValue:"",
      tags:"",
      isInvisible:true
      }
      this.removeItem=this.removeItem.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.filterList=this.filterList.bind(this);
      this.onChange = this.onChange.bind(this);
      this.onClick = this.onClick.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.changeOptions=this.changeOptions.bind(this);}
//to load data upon generation.

      async componentDidMount() {
        let currentComponent = this;
        if(this.props.id){
          if(this.props.id!==-1)
          { 
            let path='/country';
            await axios.get(
                'http://localhost:8080'+path+"/getById/"+this.props.id)
                .then(res => {
                    this.setState({country: res.data});
              }).catch(
              function (error) {
                let emptyItem={
                        value:""
                      }

                      currentComponent.setState({country:emptyItem},()=>
                  {console.log(currentComponent.state.country);});
              });}

          
            
            //set for autocomplete
          }   
            //get all countries
            let fromList=[];
            await axios.get(
              'http://localhost:8080'+"/country")
                 .then(res => {
                   let newList=res.data;
                   newList.map(
                    (e)=>{
                      fromList.push({id:e.id,value:e.value});
                    }
                   );
               }).then().catch(
               function (error) {
        
              });
              await this.setState({list:fromList})
              
      } 
      async changeOptions(){
        return this.state.filterList;
      }
       //to filter list
       filterList(){
          let oldList=this.state.list;
          let newList=[];
          if(oldList[0].value){

            oldList.map((e)=>{
              
            if(e.value.startsWith(this.state.currentValue)){
              newList.push(e.value);
            }
    
            });
          }
          else{
            newList=[];
          }
          this.setState({filterList:newList});
        }
//when a tag in a dropbox is clicked current value is the tags value
async onClick(id){
 
  await this.state.list.map(e=>{
    if(e.id==id){
       this.setState({currentValue:e.value});
    }
  })
 
  await this.setState({isInvisible:true});
}

//upon input change.
async onChange(childData){
 
  
  await this.setState({currentValue:childData});
  await this.filterList();
  await this.setState({isInvisible:false});
}

        //upon entering the input button edit or save will be completed.
      async handleSubmit(event) {
        event.preventDefault();
        let currentComponent = this;
        let path='/country';
        let country={};
        await axios.post(
          'http://localhost:8080'+path,this.state.currentValue)
             .then(res => {
              currentComponent.setState({countryError: res.data});
           }).catch(
           function (error) {
          });
    }
      //to remove item upon request.
    async removeItem(){
      let path='/country';
 let description="item can not be removed because it has locations inside it that need to be deleted first or item never existed.";
         
      let currentComponent = this;
        axios.delete('http://localhost:8080'+path+"/"+this.state.currentValue ).catch(
          currentComponent.setState({countryError:description}));
        
      window.location.reload(false);
     }
    
    render()
    {
           
    


           return( <div>

                                      <form onSubmit={this.handleSubmit} >
                                      
                                      <div><b>previous value:{this.state.country.value || ''}</b></div>
                                          <label >country:</label>
                                          <Autocomplete list={this.state.filterList} onChangeValue={this.onChange}/>
                                         
                                          <div>{this.state.countryError}</div>
                                          <input type="submit" value="Submit"></input>
                                       </form>
                                       <button onClick={this.removeItem}>
                                          Delete
                                        </button>
                                </div>);



  }
}

// Exporting the component
export  default Country;