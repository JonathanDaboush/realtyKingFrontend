import { object } from "airbnb-prop-types";
import React,{useState,memo} from "react";
import MenuWrapper from "./menuWrapper";
export function MenuList(Items){
    let category=Items.kind;
    
    if(Items.Items.length>0){
            return(
            <div>
            
                    {
                        Object.values(Items.Items).map((item,index)=>{
                             return(
                                        //e returns null

                                        <div> <MenuWrapper type={category}id={item.id} isEdit={false} key={"key#"+index}/> </div>
                                    )
                               
                        })
                    
                    
                    }
                
            </div>
        );
    }
    else{
        return(<div></div>)}
    
}