import React,{useState, useEffect} from "react";
import {GetLinks} from "../../Util/getLinks.js";
import Image from '../../Objects/imageComponents/imageComponent.jsx';
import Autocomplete from "../../Util/autocomplete.jsx";
import axios from 'axios';
function GeneralUser(props){
  let [data,setData]=useState({});
  let [fullName, setFullName]=useState("");
  let [gender, setGender]=useState("");
  let [email, setEmail]=useState("");
  let [password, setPassword]=useState("");
  let [dob, setDob]=useState("");
  let [phoneNumber, setPhoneNumber]=useState("");
  let [isActive, setIsActive]=useState("");

  let loadImages=(address)=>{
    let ext=this.props.generalBuilding.address;
    let newData={sources:[]}
    let path="images/user/"+fullName;
    newData.sources=GetLinks(path);
    setData(newData); }
    
   useEffect(() => {
    let target=[]

          axios.get(
      'http://localhost:8080/'+"user/getById/"+this.props.id)
        .then(res => {
          Object.values(res).map((item)=>{
            target.push(item.data);
          
          })
            
      }).catch(
        
      function (error) {console.log(error)
      }
      ); 
      let path="images/user/"+fullName;
      loadImages(path);
            }
    , []);

     return (<div className="form-group">
                          <Image data={data} />
                                                              
                                                             <div
                                                                    id="fullName"
                                                                    name="fullName"
                                                                  >Name:{fullName}</div>
                                                             <div
                                                                    id="gender"
                                                                    name="gender"
                                                                  >Name:{gender}</div>
                                                              <div
                                                                    id="dob"
                                                                    name="dob"
                                                                  >Date of birth:{dob}</div>
                                                          <div id="email"
                                                                name="email"
                                                              >email:{email} </div>
                                                      <div
                                                           id="phoneNumber"
                                                            name="phoneNumber"

                                                          > phone Number:{phoneNumber}</div>
                                                      <div
                                                            id="password"
                                                            name="password"
                                                          >password:{password}</div>

                                                        <div>
                                                            is active:{isActive}
                                                        </div>
                            </div>);
                        

     
}

// Exporting the component
export default GeneralUser;