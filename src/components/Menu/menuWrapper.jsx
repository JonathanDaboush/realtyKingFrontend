import React, { useState }from "react";

import Area from "../ReadFolder/geographicMainComponents/areaMainComponent.jsx";
import City from "../ReadFolder/geographicMainComponents/cityMainComponent.jsx";
import Country from "../ReadFolder/geographicMainComponents/countryMainComponent.jsx";
import Neighborhood from "../ReadFolder/geographicMainComponents/neighborhoodMainComponent.jsx";
import Region from "../ReadFolder/geographicMainComponents/regionMainComponent.jsx";
import { default as AreaW} from "../WriteFolder/geographicMainComponents/areaMainComponent.jsx";
import { default as CityW} from "../WriteFolder/geographicMainComponents/cityMainComponent.jsx";
import { default as CountryW} from "../WriteFolder/geographicMainComponents/countryMainComponent.jsx";
import { default as  NeighborhoodW} from "../WriteFolder/geographicMainComponents/neighborhoodMainComponent.jsx";
import { default as  RegionW} from "../WriteFolder/geographicMainComponents/regionMainComponent.jsx";


export default function MenuWrapper({type,id,isEdit}){
   let [edit,setEdit] = useState(isEdit);
   let changer=()=>{console.log('you clicked me!');
   let newEdit=!edit;
   setEdit(newEdit)}
       if(type==='country'){
            return(  
                     <div key={"frommenulist"+id}>
                        <div className={edit ? 'd-block' :'d-none'}><CountryW id={id}/><button onClick={changer}>read</button></div>
                        <div className={edit ? 'd-none' : 'd-block'}><Country id={id} /><button onClick={changer}>edit</button></div>
                     </div>
                     );
       }
       
    
}