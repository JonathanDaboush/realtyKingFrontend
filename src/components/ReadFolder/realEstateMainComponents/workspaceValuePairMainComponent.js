import React, {Component} from 'react';
import $ from 'jquery';
import WorkspaceValuePair from './realEstateComponents/workspaceValueComponent';
import Autocomplete from "./MiscellaneousServices/Autocomplete";
class WorkspaceMainComponent extends Component {
    constructor(props)
    {
        super(props);
    }


    render()
    {
   let i="";

        return
              (
                 <workspaceValuePair  workspaceValuePair={this.props.workspaceValuePair} i={i} />
              );
         }
     
     
       
     }
     
     // Exporting the component
     export default WorkspaceMainComponent;