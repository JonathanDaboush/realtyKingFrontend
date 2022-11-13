import React, {Component} from 'react';
import $ from 'jquery';
import GeneralUser from './../accountComponents/generalUserComponent';
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
class BonusMainComponent extends Component {
  Constructor(props){  
    super(props); 
    this.state = {amountError:"",
    descriptioinError:"",
    dateOfSubmissionError:"",
    departmentNameError:[],
    employeeNameError:[]};
    this.removeTag=   this.removeTag.bind(this); 
}  
removeTag(i,tags){
  tags.splice(i,1);
  
}
    render()
    {
           

              
                  let tags=[];
                  if(this.props.bonus.event.departments.length){
                    this.props.bonus.event.departments.forEach((element,index) => {
                      tags.push(  <div><label for="department">department:</label>
                      <input type="text" name="department" value={element.departmentName} id="department"/>
                      <div>{this.state.departmentNameError[index]}</div><a href={this.removeTag(index,tags)}>delete</a></div>);
                    });
                  }
                  else{
                    this.props.bonus.event.employees.forEach((element,index) => {
                      tags.push(  <div><label for="employee">employee:</label>
                      <input type="text" name="employee" value={element.firstName+" "+element.middleName+" "+element.lastName} id="employee"/>
                      <div>{this.state.employeeNameError[index]}</div><a href={this.removeTag(index,tags)}>delete</a></div>);
                    });
                  }
                return(<div> <form action="/bonus">
                
                                                      <div id="tags">{tags}</div>
                                                   
                                                      <label for="dateOfSubmission">date Of Submission"</label>
                                                      <input type="date" name="dateOfSubmission" value={this.props.bonus.dateOfSubmission} id="dateOfSubmission" />
                                                      <div>{this.state.dateOfSubmissionError}</div>
                                                      <label for="description">description:</label>
                                                      <input type="text" name="description" value={this.props.bonus.description} id="description" />
                                                      <div>{this.state.descriptioinError}</div>
                                                      <label for="amount">amount:</label>
                                                      <input type="number" name="amount" value={this.props.bonus.amount} id="amount" />
                                                      <div>{this.state.amountError}</div>
                                                      
                                                      <input type="submit" value="Submit"></input>
        </form> 
                                              </div>  );
                

             
          }
}

// Exporting the component
export default BonusMainComponent;