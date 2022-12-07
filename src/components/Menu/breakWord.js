import React,{useState, useRef} from "react";
//breaks a series of values from a nested array of n length and breaks them to a single line.
//each word seperated by a , character.
export function breakWord(ofObject,type){
let object=ofObject;
    let item="";
    let list=[]; 
    if(type==='country'){
       item=object.value;
    }
    
    else if(type==='region'){
        item=object.value+","+object.country.value;
    }

    else if(type==='area'){
        item=object.value+","+object.region.value+","+object.region.country.value;
    }

    else if(type==='city'){
        item=object.value+","+object.region.value+","+object.region.country.value;
    }

    else if(type==='neighborhood'){
        item=object.value+","+object.city.value+","+object.city.region.value+","+object.city.region.country.value;
    }
    return item;

}