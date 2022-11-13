import React, {Component} from 'react';
import './css/jCirclize.css';
import './js/jCirclize.js';
class EmployeeTerm extends Component {
  


    render()
    {

        


             return(<div className="form-group">

                              <div
                                     id="employeeStartDate"
                                     name="employeeStartDate"
                                   >employee Start Date:{this.props.employeeTerm.employeeStartDate}</div>
                              <div
                                    id="employeeEndDate"
                                    name="employeeEndDate"
                                  >employee End Date:{this.props.employeeTerm.employeeEndDate}</div>
                               <div
                                     id="brokageShare"
                                     name="brokageShare"
                                   >brokage Share:{this.props.employeeTerm.brokageShare}</div>
                            <div
                                    id="hourlyPay"
                                    name="hourlyPay"
                                  >hourly Pay:{this.props.employeeTerm.hourlyPay}</div>

                                  
                    
                     </div>);


        

  }
}

// Exporting the component
export default EmployeeTerm;