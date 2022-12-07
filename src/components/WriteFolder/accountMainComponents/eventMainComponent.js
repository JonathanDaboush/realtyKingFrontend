import React, {Component} from 'react';
import $ from 'jquery';
import GeneralUser from '../../Objects/accountComponents/generalUserComponent.js';
import Autocomplete from "../../Util/autocomplete.jsx";
class EventMainComponent extends Component {
     
  constructor(props){  
    super(props); 
    this.state = {
      dateOfEventError:"",
      dateOfSubmissionError:"",
      departmentNameError:[],
      employeeNameError:[]};
    this.removeTag=   this.removeTag.bind(this); 
}  
    render()
    {



           
            
            let tags=[];
            if(this.props.event.departments.length){
              this.props.event.departments.forEach((element,index) => {
                tags.push(  <div><label for="department">department:</label>
                <input type="text" name="department" value={element.departmentName} id="department"/>
                <div>{this.state.departmentNameError[index]}</div><a href={this.removeTag(index,tags)}>delete</a></div>);
              });
            }
            else{
              this.props.event.employees.forEach((element,index) => {
                tags.push(  <div><label for="employee">employee:</label>
                <input type="text" name="employee" value={element.firstName+" "+element.middleName+" "+element.lastName} id="employee"/>
                <div>{this.state.employeeNameError[index]}</div><a href={this.removeTag(index,tags)}>delete</a></div>);
              });
            }
            
             return
                                  (<div>
                                      <label for="dateOfEvent" >date Of Event:</label>
                                      <input type="date" value={this.props.event.dateOfEvent} name="dateOfEvent" id="dateOfEvent"/>
                                      <div> {this.state.dateOfEventError}</div>

                                      <label for="dateOfSubmission" >date Of Submission:</label>
                                      <input type="date" value={this.props.event.dateOfSubmission} name="dateOfSubmission" id="dateOfSubmission"/>
                                      <div> {this.state.dateOfSubmissionError}</div>

                                      <label for="description" >description:</label>
                                      <input type="text" value={this.props.event.description} name="description" id="description"/>
                               
                                 </div>);}
                                  
             

        


  
}

// Exporting the component
export default EventMainComponent;