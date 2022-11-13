import React, {Component} from 'react';
import $ from 'jquery';
import AmmenetieValuePair from './realEstateComponents/ammenetieValueComponent';
class AmmenetieMainComponent extends Component {


    render()
    {
   
let i="";

        return
              (
                 <AmmenetieValuePair  ammenetieValuePair={this.props.ammenetieValuePair} i={i} />
              );
         }
     
     
       
     }
     
     // Exporting the component
     export default AmmenetieMainComponent;