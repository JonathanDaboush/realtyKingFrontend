import React, { Component, Fragment,useRef } from "react";
import JSOG from 'jsog';
import Autocomplete from "../Util/autocomplete.jsx";
import axios from "axios";
import { breakWord } from "./breakWord.js";
import { decrypt } from "../Util/jsogRetreival.js";
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
      let item={};
      oldList.map((e)=>{
          
        if(e.name===this.state.currentValue){
          item=e;
        }

        });
      this.props.onChangeValue(item);
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
  await axios.get(
    'http://localhost:8080/'+"country")
       .then(res => {
        let list=decrypt(res.data);
        list.map((item,index)=>{
          

          if(item.id){ keyValuePair.push({'name':breakWord(item,'country'),'category':'country',id:item.id,'kids':item.regions});}
          else{
            let deRef=useRef(item);
            keyValuePair.push({'name':breakWord(deRef,'country'),'category':'country',deRef:item.id,'kids':deRef.regions});
          }
          
         
        })
          
     }).catch(
      
     function (error) {console.log(error);
    }
    );

    await axios.get(
      'http://localhost:8080/'+"region")
      .then(res => { 
        let list=decrypt(res.data);
        list.map((item,index)=>{
          if(item.id){keyValuePair.push({'name':breakWord(item,'region'),'category':'region',id:item.id});}
           else{
            let deRef=useRef(item);
            keyValuePair.push({'name':breakWord(deRef,'region'),'category':'region',id:deRef.id});
          }
         
        })
          
     }).catch(
     function (error) {console.log(error);
    }
    );

      await axios.get(
        'http://localhost:8080/'+"area")
        .then(res => {
          let list=decrypt(res.data);
        list.map((item,index)=>{
            if(item.id){ keyValuePair.push({'name':breakWord(item,'area'),'category':'area',id:item.id});}
            else{
              let deRef=useRef(item);
              keyValuePair.push({'name':breakWord(deRef,'area'),'category':'area',id:deRef.id});
            }
           
          })
            
       }).catch(
       function (error) {
        console.log(error);
      }
      );

      await axios.get(
        'http://localhost:8080/'+"city").then(res => {
          let list=decrypt(res.data);
          list.map((item,index)=>{
        
          if(item.id){keyValuePair.push({'name':breakWord(item,'city'),'category':'city',id:item.id});}
          else{
            let deRef=useRef(item);
            keyValuePair.push({'name':breakWord(deRef,'city'),'category':'city',id:deRef.id});
          }
         
        })
          
     }).catch(
     function (error) {console.log(error);
    }
    );

    await axios.get(
      'http://localhost:8080/'+"neighborhood")
    .then(res => {
      let list=decrypt(res.data);
      list.map((item,index)=>{
        if(item.id){
          keyValuePair.push({'name':breakWord(item,'neighborhood'),'category':'neighborhood',id:item.id});}
          else{
            let deRef=useRef(item);
            keyValuePair.push({'name':breakWord(deRef,'neighborhood'),'category':'neighborhood',id:deRef.id});
          }
       
      })
        
   }).catch(
   function (error) {console.log(error);
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