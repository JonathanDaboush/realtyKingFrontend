import React,{useState, useEffect} from "react";
import { flushSync } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import axios from 'axios';
import { default as AreaW} from "../WriteFolder/geographicMainComponents/areaMainComponent.jsx";
import { default as CityW} from "../WriteFolder/geographicMainComponents/cityMainComponent.jsx";
import { default  as CountryW} from "../WriteFolder/geographicMainComponents/countryMainComponent.jsx";
import { default as NeighborhoodW} from "../WriteFolder/geographicMainComponents/neighborhoodMainComponent.jsx";
import { default as RegionW} from "../WriteFolder/geographicMainComponents/regionMainComponent.jsx";
import { NavBar } from "../Navbar/navbar.jsx";
import  {MenuList}  from "./MenuList.jsx";
import GeographicLocationSearch from "./geographicSearchBar.jsx";

import  NewObject  from "./newObject.jsx";
import { ThemeProvider } from "react-bootstrap";

import JSOG from 'jsog';

function Menu(props){
   
    
        
    let [supra,setSupra]=useState([]);
    let [options,setOptions]=useState([]);
    let [searchBar,setSearchBar]=useState([{locations:["country","region","area","city","neighborhood"]}]);
    let [category,setCategory]=useState('country');
    let [value,setValue]=useState('');
  let [childList,setChildList]=useState([]);
  let [childType,setChildType]=useState('');
  
  let onChangeSearchValue=(item)=>{
    if(!Object.keys(item).length){return;}
    setChildList((childList)=>{let newValue=item.kids;console.log(newValue);return newValue;});
    setChildType((childType)=>{let newValue=item.category;console.log(newValue);return newValue;});
  }
    let handleSearchBar=(e)=>{
        
        if(e.category==='country'){
            setCategory((category)=>{let newValue='region';console.log(newValue);return newValue;});
         
         }
          setOptions((options)=>{let newValue=e.kids;console.log(newValue);return newValue;}); 
         setSupra((supra)=>{let newValue=e;console.log(newValue);return newValue;});
         
   

        } 
        
        let handleNavBar=(e)=>{
                setCategory((category)=>{let newValue=e;console.log(newValue);return newValue;});
               setSupra((supra)=>{let newValue={category:e};console.log(newValue);return newValue;});
               console.log(supra);
                getChildren(e);
             
        }
        let getChildren=async(value)=>{
           
            let x=await axios.get('http://localhost:8080/'+value)
                .then
                (  
                    
                    (res)=>{
                        let newList=res.data;
                        let newObject={};
                        let target="";
                       target = JSOG.stringify(res.data);
                        newObject= JSOG.parse(target);
                        newList=newObject;
                    if(newList.length===0){
                        setOptions(options=>{let newValue=[];console.log(newValue);return newValue;});
                    }
                    else{
                            if(newList[0]!==undefined){
                                setOptions(options=>{let newValue=newObject;console.log(newValue);return newValue;});
                            }
                        
                        }
                    })
                .catch(function (error) {
                    console.log(error);
                });
            
            
        }
        
            useEffect(() => {
                setSupra((e)=>{let newValue={category:'country'};console.log(category);return newValue;});
            }
                , []);
 
    return(
        <div>
            <div>
                <NavBar content={searchBar} handleNavBar={handleNavBar} />
            </div>
            <div>
            { /*this is the call */}
               <GeographicLocationSearch handleSearchBar={handleSearchBar} onChangeValue={onChangeSearchValue} />
               <MenuList Items={childList} kind={childType}/>
                <NewObject {...supra}/>
           
                 <MenuList Items={options} kind={category}/>
            </div>
               <div>
               </div>
           
        </div>
        
    );
}

export default Menu;