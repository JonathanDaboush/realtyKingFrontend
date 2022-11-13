import React, {Component} from 'react';

var classNames = require('classnames');
class EmployeeMainComponent extends Component {
    constructor(props)
    {
        super(props);
      this.state={
        panel1:true,
        panel2:true,
        panel3:true,
        phoneNumberError:"",
        dobError:"",
        passwordError:"",
        emailError:"",
        genderError:"",
        companyError:"",
        addressError:"",
        dateOfTerminationError:"",
        hourlyPayError:"",
        brokageShareError:"",
        employeeEndDateError:""
      }
           
        this.handleChange= this.handleChange.bind(this);
    }

  

         handleChange = event => {
            let value=event.target.value;
             this.setState({panel: value});

             this.setState({panel1: false});
            this.setState({panel2: false});
            this.setState({panel3: false});
            if(value==="1"){
                this.setState({panel1: true});
            }
            else if(value==="2")
            {
                     this.setState({panel2: true});
                             }
            else if(value==="3")
            {
                 this.setState({panel3: true});
                             }
           

          };

    render()
    {

        var panel1 = classNames({
          'd-block': this.this.state.panel1,
          'd-none': !this.this.state.panel1
        });
        var panel2 = classNames({
          'd-block': this.this.state.panel2,
          'd-none': !this.this.state.panel2
        });
        var panel3 = classNames({
          'd-block': this.this.state.panel3,
          'd-none': !this.this.state.panel3
        });
 
     
                        return
                         (<div>
                          <form action="/employee">
                            <div id="1" className={panel1}>
                                <label for="gender">gender:</label>
                                <input type="text" name="gender" value={this.props.user.gender.gender} id="gender"/>
                                <div>{this.state.genderError}</div>

                                <label for="email"  >email</label>
                                <input type="email" value={this.props.user.email} name="email" id="email" />
                                <div>{this.state.emailError}</div>

                                <label for="password" >password:</label>
                                <input type="text" value={this.props.user.password} name="password" id="password"/>
                                <div>{this.state.passwordError}</div>

                                <label for="dob" >dob:</label>
                                <input type="date" value={this.props.user.dob} name="dob" id="dob"/>
                                <div> {this.state.dobError}</div>
                        
                                <label for="phoneNumber" >phone number:</label>
                                <input type="text" value={this.props.user.phoneNumber} name="phoneNumber" id="phoneNumber"/>
                                <div>{this.state.phoneNumberError}</div>
                            
                                <input  type="checkbox"  value={this.props.user.isActive} name="isActive" id="isActive"/><div>isActive:</div>
                            </div>
                            <div id="2" className={panel2}>

                         

                                <label for="company">company:</label>
                                <input type="text" name="company" id="company" value={this.props.employee.company.value} />
                                <div>{this.state.companyError}</div>
                                
                               
                                <input type="checkbox" name="status" id="status" value={this.props.employee.status} /> <label for="status">status</label>
                               

                                <label for="address">address:</label>
                                <input type="text" name="address" id="address" value={this.props.employee.address} />
                                <div>{this.state.addressError}</div>

                                <label for="dateOfTermination">date Of Termination:</label>
                                <input type="text" name="dateOfTermination" id="dateOfTermination" value={this.props.employee.dateOfTermination} />
                                <div>{this.state.dateOfTerminationError}</div>

                        
                                

                            </div>
                    <div id="3" className={panel3}>
                        
                                <label for="employeeStartDate">employee Start Date:</label>
                                  <input type="date" id="employeeStartDate" name="employeeStartDate" value={this.props.employee.employeeTerm.employeeStartDate} />
                                 
                                  <label for="employeeEndDate">employee End Date:</label>
                                  <input type="date" id="employeeEndDate" name="employeeEndDate" value={this.props.employee.employeeTerm.employeeEndDate} />
                                  <div>{this.state.employeeEndDateError}</div>

                                  <label for="brokageShare">brokage Share:</label>
                                  <input type="number" id="brokageShare" name="brokageShare" value={this.props.employee.employeeTerm.brokageShare} />
                                  <div>{this.state.brokageShareError}</div>

                                  <label for="hourlyPay">hourly Pay:</label>
                                  <input type="number" id="hourlyPay" name="hourlyPay" value={this.props.employee.employeeTerm.hourlyPay} />
                                  <div>{this.state.hourlyPayError}</div>
                    </div>
                    
                    <div>
                        <fieldset>
                            <input type="radio" id="opt1" name="opt" value="1"   onChange={this.handleChange} checked></input>
                            <label for="opt">option 1</label>

                            <input type="radio" id="opt2" name="opt" value="2"  onChange={this.handleChange} ></input>
                            <label for="opt">option 2</label>

                            <input type="radio" id="opt3" name="opt" value="3"  onChange={this.handleChange} ></input>
                            <label for="opt">option 3</label>

                           
                        </fieldset>
                    </div>
                    <input type="submit" value="Submit"></input>
                </form>
                </div>);
        }



             


  
}

// Exporting the component
export default EmployeeMainComponent;