import React, {Component} from 'react';
class AccountPrivilege  extends Component  {
   

    render()
    {

       
             return(<div>

                                    <div>
                                    {this.props.accountPrivilege.privilegeName}
                                    </div>
                                    <div name="enableSlideshow" id="enableSlideshow">
                                    enableSlideshow:{this.props.accountPrivilege.enableSlideshow}</div>

                                    <div  id="priority" name="priority">priority: {this.props.accountPrivilege.priority}</div>

                                    <div id="privilegePrice" name="privilegePrice">
                                        privilegePrice:{this.props.accountPrivilege.privilegePrice}
                                    </div>

                </div>);
               

        
      }
    }
 

// Exporting the component
export default AccountPrivilege;