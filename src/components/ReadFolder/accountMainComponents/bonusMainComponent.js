import React, {Component} from 'react';
import $ from 'jquery';
import GeneralUser from './../accountComponents/generalUserComponent';
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
class BonusMainComponent extends Component {
    

    render()
    {
           let tags;

                if(this.props.isMenu){
                return(<div>
                                                    <div>
                                                        <div
                                                                id="dateOfSubmission"
                                                                name="dateOfSubmission"

                                                              > date Of Submission:{this.props.bonus.dateOfSubmission}</div>
                                                        <div
                                                                id="description"
                                                                name="description"

                                                              > description:{this.props.bonus.description}</div>
                                                          <div
                                                                    id="amount"
                                                                    name="amount"

                                                                  >amount:{this.props.bonus.amount}</div>
                                                      </div>
                                              </div>  );
                }
                else{
                  let tags="";
                  if(this.props.bonus.event.departments.length){
                    this.props.bonus.event.departments.forEach(element => {
                      tags.push(<div>{element.value}</div>);
                    });
                  }
                  else{
                    this.props.bonus.event.employees.forEach(element => {
                      tags.push(<div><GeneralUser user={element.user} /></div>);
                    });
                  }
                return(<div>
                                                      <div id="tags">{tags}</div>
                                                      <div>
                                                        <div
                                                                id="dateOfSubmission"
                                                                name="dateOfSubmission"

                                                              > date Of Submission:{this.props.bonus.dateOfSubmission}</div>
                                                        <div
                                                                id="description"
                                                                name="description"

                                                              > description:{this.props.bonus.description}</div>
                                                          <div
                                                                    id="amount"
                                                                    name="amount"

                                                                  >amount:{this.props.bonus.amount}</div>
                                                      </div>
                                              </div>  );
                }

             
          }
}

// Exporting the component
export default BonusMainComponent;