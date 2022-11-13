import React, {Component,Fragment} from 'react';
import $ from 'jquery';
import GeneralUser from './../accountComponents/generalUserComponent';
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
import CreditCard from "./../transactionComponents/creditCarComponent.js"
class userMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state=
        {
        dateOfTransactionError:"",
        phoneNumberError:"",
        amountError:"",
        creditCardNoError:"",
        fullNameError:"",
        activeSuggestion: 0,
        // The suggestions that match the user's input
        filteredSuggestions: [],
        // Whether or not the suggestion list is shown
        showSuggestions: false,
        // What the user has entered
        userInput: ""
    };
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
    
    render()
    {
      const {
        onChange,
        onClick,
        onKeyDown,
        state: {
          activeSuggestion,
          filteredSuggestions,
          showSuggestions,
          userInput
        }
      } = this;
  
      let suggestionsListComponent;
  
      if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
          suggestionsListComponent = (
            <ul className="suggestions">
              {filteredSuggestions.map((suggestion, index) => {
                let className;
  
                // Flag the active suggestion with a class
                if (index === activeSuggestion) {
                  className = "suggestion-active";
                }
  
                return (
                  <li className={className} key={suggestion} onClick={onClick}>
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          );
        } else {
          suggestionsListComponent = (
            <div className="no-suggestions">
              <em>No suggestions, you're on your own!</em>
            </div>
          );
        }
      }
  

                  return(
                    <div>
                   <form action="/paystub">
                   <label for="fullName">full name:</label>
                   <Fragment>
                      <input
                        type="text"
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput}
                        id="fullName" name="fullName"
                      />
                      {suggestionsListComponent}
                  </Fragment>
                  <div>{this.state.fullNameError}</div>
                    
                    
                   <label for="amount">amount:</label>
                    <input type="number" name="amount" id="amount" value={this.state.paystub.amount} />
                    <div>{this.state.amountError}</div>
                    
                    <label for="creditCardNo">creditCardNo:</label>
                    <input type="number" name="creditCardNo" id="creditCardNo" value={this.state.paystub.creditCardNo} />
                    <div>{this.state.creditCardNoError}</div>
                    
                    <label for="phoneNumber">phone Number:</label>
                    <input type="text" name="phoneNumber" id="phoneNumber" value={this.state.paystub.phoneNumber} />
                    <div>{this.state.phoneNumberError}</div>
                    
                    <label for="email">email:</label>
                    <input type="email" id="email" name="email" value={this.state.paystub.email} />
                   

                    <label for="dateOfTransaction">date Of Transaction:</label>
                    <input type="date" name="dateOfTransaction" id="dateOfTransaction" value={this.state.paystub.dateOfTransaction} />
                    <div>{this.state.dateOfTransactionError}</div>
                    <input type="submit" value="Submit"></input>
            </form>
                </div>
                  );
              
         
    }


  
}

// Exporting the component
export default userMainComponent;