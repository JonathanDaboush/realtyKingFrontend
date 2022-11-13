import React, {Component} from 'react';

import './css/jCirclize.css';
import './js/jCirclize.js';
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
class HoursOfOperation extends Component {


  
    render()
    {
       
        let day="day"+this.this.props.i;
        let name="timeTable"+this.props.i;
    


              return(<div>
                <div  className="form-control" name="day" id="day" >day:{this.props.hoursOfOperation.day.value}</div>
                <div  className="form-control" name="timeTable" id="timeTable" >time table: value={this.props.hoursOfOperation.value}</div>
            </div>    );

        
  }
}

// Exporting the component
export default HoursOfOperation;