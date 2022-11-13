import React, {Component} from 'react';
class ShiftMainComponent extends Component {
  


    render()
    {

        
             return
                             (<div>
                                                <div>
                                                <div
                                                           id="name"
                                                           name="name"
                                                         >name: {this.props.shift.user.firstName} {this.props.shift.user.middleName} {this.props.shift.user.lastName}</div>
                                                     <div
                                                           id="dateOfShift"
                                                           name="dateOfShift"
                                                         >date Of Shift: {this.props.shift.dateOfShift}</div>
                                                        <div
                                                              id="shiftStartTime"
                                                              name="shiftStartTime"
                                                            > shift Start Time:{this.props.shift.shiftStartTime}</div>
                                                           <div 
                                                                id="shiftEndTime"
                                                                 name="shiftEndTime"
                                                               >shiftEndTime:{this.props.shift.shiftEndTime}
                                                           </div>
                                                </div>
                                            </div>);
            }

        


  
}

// Exporting the component
export default ShiftMainComponent;