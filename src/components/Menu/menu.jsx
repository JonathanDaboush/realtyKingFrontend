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
function Menu(props){
   
    
        
    let [supra,setSupra]=useState([]);
    let [options,setOptions]=useState([]);
    let [searchBar,setSearchBar]=useState([{locations:["country","region","area","city","neighborhood"]}]);
    let [category,setCategory]=useState('');
    let [value,setValue]=useState('');
  
    
    let handleSearchBar=(value)=>{

        if(value.category==='country'){
            setCategory((category)=>{let newValue='region';console.log(newValue);return newValue;});
         
         }
          setOptions((options)=>{let newValue=value.kids;console.log(newValue);return newValue;}); 
         setSupra((supra)=>{let newValue=value;console.log(newValue);return newValue;});
          getChildren(value.category+"/getById/"+value.id);
   

        } 
        
        let handleNavBar=(value)=>{
                setCategory((category)=>{let newValue=value;console.log(newValue);return newValue;});
               setSupra((supra)=>{let newValue=[];console.log(newValue);return newValue;});
                getChildren(category);
             
        }
        const getChildren=(value)=>{
           
            let res=axios.get('http://localhost:8080/'+value)
                .then
                (  
                    
                    function(res){
                        let list=res.data;
                    if(list.length===0){
                    }
                    else{
                            if(list[0]!==undefined){
                                setOptions(options=>{let newValue=list;console.log(newValue);return newValue;});
                            }
                        
                        }
                    })
                .catch(function (error) {
                    console.log(error);
                });
                

                
            
        }
        
            useEffect(() => { 
                if(category===''){
                    category='country';
                }
                        }
                , [value]);
 
    return(
        <div>
            <div>
                <NavBar content={searchBar} handleNavBar={handleNavBar} />
            </div>
            <div>
            { /*this is the call */}
               <GeographicLocationSearch handleSearchBar={handleSearchBar}/>
            
                <NewObject {...supra}/>
           
                 <MenuList Items={options} kind={category}/>
            </div>
               
           
        </div>
        
    );
}

export default Menu;
