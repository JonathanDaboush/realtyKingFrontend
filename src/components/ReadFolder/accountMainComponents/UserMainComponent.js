import React, {Component} from 'react';
import $ from 'jquery';
import GeneralUser from '../../Objects/accountComponents/generalUserComponent'; 
import Autocomplete from "./Miscellaneousfeatures/Autocomplete";
class UserMainComponent extends Component {



    render()
    {
  


        return
              (
                 <GeneralUser user={this.props.user}/>
              );
         }
     
     
       
     }
     
     // Exporting the component
     export default UserMainComponent;