import React, {Component} from 'react';
import $ from 'jquery';
import AccountPrivilege from '../../Objects/accountComponents/accountPrivilageComponent';
class accountPrivilageMainComponent extends Component {


    render()
    {

       
               return
                        (<AccountPrivilege accountPrivilege={this.props.AccountPrivilege}/>);
        }


  
}

// Exporting the component
export default accountPrivilageMainComponent;