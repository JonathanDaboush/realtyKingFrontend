import React, {Component} from 'react';
class ShiftMainComponent extends Component {
  
    constructor(props){  
        super(props); 
        this.state = {
            dateOfShiftError:"",
            shiftEndError:"",
            fullNameError:""};
        this.removeTag=   this.removeTag.bind(this); 
    }  

    render()
    { let fullName=this.props.shift.user.firstName+" "+this.props.shift.user.middleName+" "+this.props.shift.user.lastName;

        
             return
                             (<div>
                                    
                                          <form action="/shift">
                                              <label for="fullName">full name:</label>
                                              <input type="text" name="fullName" id="fullName" value={fullName} />
                                              <div>{this.state.fullNameError}</div>

                                              <label for="dateIfShift">date of shift:</label>
                                              <input type="text" name="dateOfShift" id="dateOfShift" value={this.props.shift.dateOfShift} />
                                              <div>{this.state.dateOfShiftError}</div>
                                              
                                              <label for="shiftStartTime">shift Start Time:</label>
                                              <input type="text" name="shiftStartTime" id="shiftStartTime" value={this.props.dateOfShiftError} />
                                        
                                              <label for="shiftEndTime">shift End Time:</label>
                                              <input type="text" name="shiftEndTime" id="shiftEndTime" value={this.props.shift.shiftEndTime} />
                                              <div>{this.state.shiftEndError}</div>
                                              
                                              <input type="submit" value="Submit"></input>
                                          </form>
                                            </div>);
            }

        


  
}

// Exporting the component
export default ShiftMainComponent;