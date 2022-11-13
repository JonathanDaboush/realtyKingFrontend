import React, {Component} from 'react';
import $ from 'jquery';
import ServiceValuePair from './realEstateComponents/serviceValueComponent';
import Autocomplete from "./MiscellaneousServices/Autocomplete";
class ServiceMainComponent extends Component {



    render()
    {
        let i="";
        

        return
              (
                 <serviceValuePair  serviceValuePair={this.props.serviceValuePair} i={i}/>
              );
         }
     
     
       
     }
     
     // Exporting the component
     export default ServiceMainComponent;