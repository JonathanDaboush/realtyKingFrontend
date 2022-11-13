import React, {Component} from 'react';
import './css/jCirclize.css';
import './js/jCirclize.js';
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
class FrequentlyAskedQuestion extends Component {
 
    render()
    {
        let name="question"+this.props.i;
        let nameValue="answer"+this.props.i;
        

             return(<div>
                    <div  id={name} className="form-control" name={name}>question:{this.props.frequentlyAskedQuestion.question}</div>
                    <div id={nameValue} className="form-control" name={nameValue} >answer:{this.props.frequentlyAskedQuestion.answer}</div>
                </div>);

        
  }
}

// Exporting the component
export default FrequentlyAskedQuestion;