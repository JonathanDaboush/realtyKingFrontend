import React, {Component} from 'react';
import $ from 'jquery';
import AccountPrivilege from '../../Objects/accountComponents/accountPrivilageComponent.js';
class accountPrivilageMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {shiftEndError:"",
        privilegeNameError:"",
        priorityError:"" };
      }

    render()
    {

       
               return
                        ( 
                            <form action="/accountPrivilege"> 

                                              <label for="privilegeName">privilege Name:</label>
                                              <input type="text" name="privilegeName" id="privilegeName" value={this.props.accountPrivilege.privilegeName} />
                                              <div>{this.state.privilegeNameError}</div>
                                              
                                              <input  type="checkbox"  value={this.props.accountPrivilege.enableSlideshow} name="enableSlideshow" id="enableSlideshow"/><div>enableSlideshow</div>

                                             
                                              <label for="privilegePrice">privilege Price:</label>
                                              <input type="text" name="privilegePrice" id="privilegePrice" value={this.props.accountPrivilege.privilegePrice} />
                                              <div>{this.state.shiftEndError}</div>
                                              
                                              <label for="priority">priority:</label>
                                              <input type="text" name="priority" id="priority" value={this.props.accountPrivilege.priority} />
                                              <div>{this.state.priorityError}</div>

                                <input type="submit" value="Submit"></input>
                            </form>
         
                        );
        }


  
}

// Exporting the component
export default accountPrivilageMainComponent;