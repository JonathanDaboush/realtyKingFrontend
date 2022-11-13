import React, {Component,Fragment} from 'react';
import $ from 'jquery';
import GeneralUser from './../accountComponents/generalUserComponent';
import Department from './../accountComponents/department';
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
import PropTypes from "prop-types";
class PayrollMainComponent extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };
       constructor(props)
        {
            super(props);
            this.state = {
              amountError:"",
              dateOfTransactionError:"",
              departmentError:[],
              nameError:[],
              suggestionsListComponent:[],
              departments:[],
              employees:[],
              isEmployee:true,
              activeSuggestion: 0,
              // The suggestions that match the user's input
              filteredSuggestions: [],
              // Whether or not the suggestion list is shown
              showSuggestions: false,
              // What the user has entered
              userInput: "",
              tags:[]
            }
            this.changeText=this.changeText.bind(this);
            this.getDefaultData=this.getDefaultData.bind(this);
            this.updateState=this.updateState.bind(this);
            this.createDepartmentTag=this.createDepartmentTag.bind(this);

            this.onChange = this.onChange.bind(this);
            this.onClick = this.onClick.bind(this);
            this.onKeyDown = this.onKeyDown.bind(this);
        }
        onChange = e => {
          const { suggestions } = this.props;
          const userInput = e.currentTarget.value;
      
          // Filter our suggestions that don't contain the user's input
          const filteredSuggestions = suggestions.filter(
            suggestion =>
              suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
          );
      
          this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
          });
        };
      
        onClick = e => {
          this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
          });
        };
      
        onKeyDown = e => {
          const { activeSuggestion, filteredSuggestions } = this.state;
      
          // User pressed the enter key
          if (e.keyCode === 13) {
            this.setState({
              activeSuggestion: 0,
              showSuggestions: false,
              userInput: filteredSuggestions[activeSuggestion]
            });
          }
          // User pressed the up arrow
          else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
              return;
            }
      
            this.setState({ activeSuggestion: activeSuggestion - 1 });
          }
          // User pressed the down arrow
          else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
              return;
            }
      
            this.setState({ activeSuggestion: activeSuggestion + 1 });
          }
        };
      
       updateState(state,prop){
            this.setState({ state:prop });
        }
          createDepartmentTag = (i) => {
                      {this.state.tags.push(<div>
                        <label for={"departmentName"+i}>department name:</label>
                       <Fragment>
                           <input
                             type="text"
                             onChange={this.onChange}
                             onKeyDown={this.onKeyDown}
                             value={this.userInput}
                             id={"departmentName"+i} name={"departmentName"+i}
                           />
                           {this.state.suggestionsListComponent}
                       </Fragment>
                       <div>{this.state.departmentNameError}</div>
                     </div>);}
                    }
                     createAccountNameTag = (i) => {
                      {this.state.tags.push(<div>
                         <label for={"fullName"+i}>full name:</label>
                        <Fragment>
                            <input
                              type="text"
                              onChange={this.onChange}
                              onKeyDown={this.onKeyDown}
                              value={this.userInput}
                              id={"fullName"+i} name={"fullName"+i}
                            />
                            {this.state.suggestionsListComponent}
                        </Fragment>
                        <div>{this.state.fullNameError}</div>
                      </div>);}
                    }
                    //filter each department and get all employees or departments upon request. based on is employee
       getDefaultDate(){

          this.updateState(this.state.departments,this.props.payroll.department);
       }
        changeText(){
            if(this.state.isEmployee==true){
                 this.setState({isEmployee: false});
                 this.setState({text: "for department"});
                 this.getDefaultData();
            }
            else{
                this.setState({isEmployee: true});
                this.setState({text: "for employees"});
                this.getDefaultData();
            }
        }

        componentDidMount() {

            if(this.props.isEmployee){
                this.setState({text: "for department"});

            }
            else{
                this.setState({text:"for employees" });
            }
            this.setState({isEmployee: this.props.isEmployee});
            this.getDefaultData();
        }

    render()
    {

      this.getDefaultData();

     
  
  
      if (this.showSuggestions && this.userInput) {
        if (this.filteredSuggestions.length) {
          this.setState((suggestionsListComponent)=>  (
            <ul className="suggestions">
              {this.filteredSuggestions.map((suggestion, index) => {
                let className;
  
                // Flag the active suggestion with a class
                if (index === this.activeSuggestion) {
                  className = "suggestion-active";
                }
  
                return (
                  <li className={className} key={suggestion} onClick={this.onClick}>
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          ));
        } else {
          this.setState((suggestionsListComponent)=>  (suggestionsListComponent = (
            <div className="no-suggestions">
              <em>No suggestions, you're on your own!</em>
            </div>
          )));
        }
      }
           
           
             
            
             
                return
                                     (<div>
                                     <form action="/payroll">
                    <div id="tags">{this.state.tags}</div>
                    <button onclick={this.props.changeText}></button>
                    <div>
                     
                       <label className="control-label" for="amount"> amount: </label>
                         <input

                               type="text"
                               id="amount"
                               name="amount"
                               value={this.props.payroll.amount}
                             />
                       <div>{this.props.amountError}</div>
                         <label className="control-label" for="dateOfTransaction"> dateOfTransaction: </label>
                            <input

                                  type="date"
                                  id="dateOfTransaction"
                                  name="dateOfTransaction"
                                  value={this.props.payroll.dateOfTransaction}
                                />
                          <div>{this.props.dateOfTransactionError}</div>

                    </div>  <input type="submit" value="Submit"></input>
            </form>
                </div> );
             

        }


  
}

// Exporting the component
export default PayrollMainComponent;