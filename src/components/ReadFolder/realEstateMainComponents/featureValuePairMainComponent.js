import React, {Component} from 'react';
import $ from 'jquery';
import FeatureValuePair from './realEstateComponents/featureValueComponent';
import Autocomplete from "./Miscellaneousfeatures/Autocomplete";
class FeatureMainComponent extends Component {



    render()
    {
  
  let i="";
    

        return
              (
                 <featureValuePair  featureValuePair={this.props.featureValuePair} i={i} />
              );
         }
     
     
       
     }
     
     // Exporting the component
     export default FeatureMainComponent;