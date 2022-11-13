import React, {Component} from 'react';
import $ from 'jquery';
import GeneralUser from '../../Objects/accountComponents/generalUserComponent'; 
import Autocomplete from "./Miscellaneousfeatures/Autocomplete";
class UserMainComponent extends Component {



    render()
    {
  


        return
              (
             
        
       <form action="/user" >
             <label for="gender">gender:</label>
            <input type="text" name="gender" value={this.props.user.gender.gender} id="gender"/>
            <div>{this.props.genderError}</div>

            <label for="email"  >email</label>
            <input type="email" value={this.props.user.email} name="email" id="email" />
            <div>{this.props.emailError}</div>

            <label for="password" >password:</label>
            <input type="text" value={this.props.user.password} name="password" id="password"/>
            <div>{this.props.passwordError}</div>

            <label for="dob" >dob:</label>
            <input type="date" value={this.props.user.dob} name="dob" id="dob"/>
            <div> {this.props.dobError}</div>
       
            <label for="phoneNumber" >phone number:</label>
            <input type="text" value={this.props.user.phoneNumber} name="phoneNumber" id="phoneNumber"/>
            <div>{this.props.phoneNumberError}</div>
           
            <input  type="checkbox"  value={this.props.user.isActive} name="isActive" id="isActive"/><div>isActive:</div>

            <input type="submit" value="Submit"></input>
        </form>);
         }
     
     
       
     }
     
     // Exporting the component
     export default UserMainComponent;