import React, {Component} from 'react';
import $ from 'jquery';
import Employee from './../accountComponents/employeeComponent';
import EmployeeTerm from './../accountComponents/employeeTermComponent';
import GeneralUser from './../accountComponents/generalUserComponent';
var classNames = require('classnames');
class EmployeeMainComponent extends Component {
    constructor(props)
    {
        super(props);
      this.state={
        panel1:true,
        panel2:true,
        panel3:true
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
        let location;
            if(this.props.employee.employeeGeographicData.area.value){
                location=this.props.employee.employeeGeographicData.area.value+","+
                    this.props.employee.employeeGeographicData.area.region.value+","+
                    this.props.employee.employeeGeographicData.area.region.country.value;
            }
            else{
                location=this.props.employee.employeeGeographicData.city.value+","+
                    this.props.employee.employeeGeographicData.city.region.value+","+
                    this.props.employee.employeeGeographicData.city.region.country.value;
            }
        if(this.props.isMenu){
            
                        return
                         (<div>
                                <GeneralUser
                                    user={this.props.employee.employee.user}
                                />
                                <div>{location}</div>
                                <div>{this.props.employee.employeeTerm.hourlyPay}</div>
                            </div>);
        }
        else{
                        return
                         (<div>
                    <div id="1" className={panel1}>
                        <GeneralUser
                            user={this.props.employee.user}
                        />
                        {location}
                    </div>
                    <div id="2" className={panel2}>

                        <div>Gender:{this.props.employee.gender.value}</div>
                        <div>Company:{this.props.employee.company.value}</div>
                        <div>{this.props.employee.dateOfTermination}</div>
                                <div>{this.props.employee.address}</div>
                                <div>isActive:{this.props.employee.status}</div>

                    </div>
                    <div id="3" className={panel3}>
                        <EmployeeTerm
                           employeeTerm={this.props.employee.employeeTerm}

                        />
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
                </div>);
        }



             }


  
}

// Exporting the component
export default EmployeeMainComponent;