import React, {Component} from 'react';
import './css/jCirclize.css';
import './js/jCirclize.js';
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
class WorkspaceValuePair extends Component {

    render()
    {


      
        let name="workspace"+this.props.i;
        let nameValue="workspaceValue"+this.props.i;
       
    
             return(<div>
                                    <div id={name} className="form-control" name={name}  >workspace:{this.props.workspaceValuePair.workspace.value}</div>
                                    <div id={nameValue} className="form-control" name={nameValue}  > workspace Value:{this.props.workspaceValuePair.workspaceValue.value}</div>
                            </div>);
 
          


  }
}

// Exporting the component
export default WorkspaceValuePair;