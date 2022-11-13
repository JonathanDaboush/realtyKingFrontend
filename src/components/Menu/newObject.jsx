import React,{useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import axios from 'axios';
import { default as AreaW} from "../WriteFolder/geographicMainComponents/areaMainComponent.jsx";
import { default as CityW} from "../WriteFolder/geographicMainComponents/cityMainComponent.jsx";
import { default  as CountryW} from "../WriteFolder/geographicMainComponents/countryMainComponent.jsx";
import { default as NeighborhoodW} from "../WriteFolder/geographicMainComponents/neighborhoodMainComponent.jsx";
import { default as RegionW} from "../WriteFolder/geographicMainComponents/regionMainComponent.jsx";

export default function NewObject(props){
    let [list,setList]=useState("");
    let category="";
    
    if(props===null ||  typeof props === "undefined"||Object.keys(props).length === 0){
        return(<div></div>);}

    else{
        if(props.category==='country')
        {category='region';}
        if(category==='country'){ return(<CountryW id={-1} />);}
        else  if(category==='region'){ 
            let newList={id:-1,country:{...props}};
            return(<RegionW { ...newList} />);}
    }
    
    
}