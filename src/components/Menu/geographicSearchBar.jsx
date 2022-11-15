import React, { Component, Fragment } from "react";

import Autocomplete from "../Util/autocomplete.jsx";
import axios from "axios";
import { breakWord } from "./breakWord.js";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import OutsideClickHandler from 'react-outside-click-handler';
class GeographicLocationSearch extends Component {
 

  constructor(props) {
    super(props);

    this.state = {
      list:[],
      action:"",
      filterList:[],
      currentValue:"",
      tags:[],
      nameToId:[],
      category:"",
      id:0,
      currentValue:""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.filterList = this.filterList.bind(this);
    this.onChange = this.onChange.bind(this);
  }
    //to filter list
    filterList(){
      let oldList=this.state.list;
      let newList=[];
      if(oldList.length>1){

        oldList.map((e)=>{
          
        if(e.name.startsWith(this.state.currentValue)){
          newList.push(e.name);
        }

        });
      }
      else{
        newList=[];
      }

      this.setState({filterList:newList});
    }
//upon input change.
async onChange(childData){
 
  
  await this.setState({currentValue:childData});
  await this.filterList();
  await this.setState({isInvisible:false});
}
//when value of search bar is decided and a query to submit has been made page will load to specific location.
async handleSearch(){
   //implement key value pairs in wrapper.
   let possibleOptions=[];
   //set possible options
   let line=this.state.currentValue;
   let value;
   let asCategory=-1;
   let fromList=this.state.list;
   
   let item=fromList.find(item => item.name === line);
   //create object and return it.
   this.props.handleSearchBar(item);
}

//to generate list
async componentDidMount(){
  let keyValuePair=[];
  axios.get(
    'http://localhost:8080/'+"country")
       .then(res => {
        Object.values(res).map((item)=>{
          for(let i=0;i<item.length;i++){

            keyValuePair.push({'name':breakWord(item[i],'country'),'category':'country',id:item[i].id,'kids':item[i].regions});
          }
         
        })
          
     }).catch(
      
     function (error) {console.log(error)
    }
    );

    axios.get(
      'http://localhost:8080/'+"region")
      .then(res => {
        Object.values(res).map((item)=>{
          for(let i=0;i<item.length;i++){
            keyValuePair.push({'name':breakWord(item[i],'region'),'category':'region',id:item[i].id});
          }
         
        })
          
     }).catch(
     function (error) {
    }
    );

      axios.get(
        'http://localhost:8080/'+"area")
        .then(res => {
          Object.values(res).map((item)=>{
            for(let i=0;i<item.length;i++){
              this.keyValuePair.push({'name':breakWord(item[i],'area'),'category':'area',id:item[i].id});
            }
           
          })
            
       }).catch(
       function (error) {
      }
      );

      axios.get(
        'http://localhost:8080/'+"city").then(res => {
        Object.values(res).map((item)=>{
          for(let i=0;i<item.length;i++){
            this.keyValuePair.push({'name':breakWord(item[i],'city'),'category':'city',id:item[i].id});
          }
         
        })
          
     }).catch(
     function (error) {
    }
    );

    axios.get(
      'http://localhost:8080/'+"neighborhood")
    .then(res => {
      Object.values(res).map((item)=>{
        for(let i=0;i<item.length;i++){
          this.keyValuePair.push({'name':breakWord(item[i],'neighborhood'),'category':'neighborhood',id:item[i].id});
        }
       
      })
        
   }).catch(
   function (error) {
  }
  );
            await this.setState({list:keyValuePair});
            
            
          }
  render() {
    
  
    return (
        <form onSubmit={this.handleSearch}>
          <div>search By Location</div>
          <Autocomplete list={this.state.filterList} onChangeValue={this.onChange}/>
          <input type="submit" value="search Within Location"></input>
        </form>
    );
  }
}

export default GeographicLocationSearch;