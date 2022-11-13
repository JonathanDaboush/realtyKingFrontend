import React, {Component} from 'react';
import $ from 'jquery';
import GeneralUser from './../accountComponents/generalUserComponent';
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
class EventMainComponent extends Component {
     

    render()
    {



           if(this.props.event.isMenu){
            (<div>
            
               <div>
                  <div
                          id="dateOfSubmission"
                          name="dateOfSubmission"

                        > date Of Submission:{this.props.event.dateOfSubmission}</div>
                 <div
                          id="description"
                          name="description"

                        > description:{this.props.event.description}</div>
                    <div
                             id="dateOfEvent"
                             name="dateOfEvent"

                           >dateOfEvent:{this.props.event.dateOfEvent}</div>
               </div>
           </div> );
           }
            let tags;
            if(this.props.event.departments.length){
              this.props.event.departments.forEach(element => {
                element.employees.map((e)=>tags.push(<div>{element.value}</div>));
                
              });
            }
            else{
              this.props.event.employees.forEach(element => {
                tags.push(<div><GeneralUser user={element.user} /></div>);
              });
            }
             return
                                  (<div>
                                <div id="tags">{tags}</div>
                                 <div>
                                    <div
                                            id="dateOfSubmission"
                                            name="dateOfSubmission"

                                          > date Of Submission:{this.props.event.dateOfSubmission}</div>
                                   <div
                                            id="description"
                                            name="description"

                                          > description:{this.props.event.description}</div>
                                      <div
                                               id="dateOfEvent"
                                               name="dateOfEvent"

                                             >dateOfEvent:{this.props.event.dateOfEvent}</div>
                                 </div>
                             </div> );
             }

        


  
}

// Exporting the component
export default EventMainComponent;