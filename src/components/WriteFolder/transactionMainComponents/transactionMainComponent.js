import React, {Component,Fragment} from 'react';
import $ from 'jquery';
import PropTypes from "prop-types";
var classNames = require('classnames');
class TransactionMainComponent extends Component {
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
                 // The active selection's index
                 activeSuggestion: 0,
                 // The suggestions that match the user's input
                 filteredSuggestions: [],
                 // Whether or not the suggestion list is shown
                 showSuggestions: false,
                 // What the user has entered
                 userInput: ""
            }}
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

        let paymentInfo=this.props.transaction.transactionDetails[0];
        let paymentInfo2=this.props.transaction.transactionDetails[1];   
        let payment;
        if(paymentInfo2.creditCard.creditCardNo){
         
            payment.push(<div>
                    <label for="creditCardNo1">creditCardNo:</label>
                    <input type="text" name="creditCardNo1" id="creditCardNo1" value={paymentInfo2.creditCard.creditCardNo} />
                    <div>{this.props.creditCardNoError1}</div>
                    <label for="cvv1">cvv:</label>
                    <input type="text" name="cvv1" id="cvv1" value={paymentInfo2.creditCard.cvv} />
                    <div>{this.props.cvvError1}</div>
                    <label for="goodThru1">goodThru:</label>
                    <input type="date" name="goodThru1" id="goodThru1" value={paymentInfo2.creditCard.goodThru} />
                    <div>{this.props.goodThruError1}</div>
                    
            </div>);
        }
        else{
           
            payment.add(
                <div>
                    <label for="chequeNo">chequeNo:</label>
                    <input type="text" name="chequeNo" id="chequeNo" value={paymentInfo2.cheque.chequeNo} />
                    <div>{this.props.chequeNoError}</div>
                    <label for="nameOnCheque">nameOnCheque:</label>
                    <input type="text" name="nameOnCheque" id="nameOnCheque" value={paymentInfo2.cheque.nameOnCheque} />
                    <div>{this.props.nameOnChequeError}</div>
                </div>
            );
        }
        
        
     
        return(<div>
                    <form action="/transaction">
                    <div>
                        
                        <label for="ofSubject">of Subject:</label>
                        <input type="text" name="ofSubject" id="ofSubject" value={paymentInfo.ofSubject} />
                        <div>{this.props.ofSubjectError}</div>
                        
                        <label for="amount">amount:</label>
                        <input type="text" name="amount" id="amount" value={paymentInfo.amount} />
                        <div>{this.props.amountError}</div>

                        <label for="bankName">bank Name:</label>
                        <Fragment>
                        <input
                            type="text"name="bankName" id="bankName" 
                            onChange={onChange}
                            onKeyDown={onKeyDown}
                            value={userInput}
                        />
                        {suggestionsListComponent}
                        </Fragment>
                    </div>
                    
                        <div>
                        <div>
                                <label for="creditCardNo1">creditCardNo:</label>
                                <input type="text" name="creditCardNo1" id="creditCardNo1" value={paymentInfo2.creditCard.creditCardNo} />
                                <div>{this.props.creditCardNoError1}</div>
                                <label for="cvv1">cvv:</label>
                                <input type="text" name="cvv1" id="cvv1" value={paymentInfo2.creditCard.cvv} />
                                <div>{this.props.cvvError1}</div>
                                <label for="goodThru1">goodThru:</label>
                                <input type="date" name="goodThru1" id="goodThru1" value={paymentInfo2.creditCard.goodThru} />
                                <div>{this.props.goodThruError1}</div>
                                
                        </div>
                        </div>
                    <div>
                    <div>
                        
                        <label for="toSubject">of Subject:</label>
                        <input type="text" name="toSubject" id="toSubject" value={paymentInfo.toSubject} />
                        <div>{this.props.toSubjectError}</div>
                        
                        <label for="amount">amount:</label>
                        <input type="text" name="amount" id="amount" value={paymentInfo.amount} />
                        <div>{this.props.amountError}</div>

                        <label for="bankName">bank Name:</label>
                        <Fragment>
                        <input
                            type="text"name="bankName" id="bankName" 
                            onChange={onChange}
                            onKeyDown={onKeyDown}
                            value={userInput}
                        />
                        {suggestionsListComponent}
                        </Fragment>
                    </div>
                        <div>
                            {payment}
                        </div>
                    </div>
                    <div>
         

                    <label for="dateOfTransaction">date Of Transaction:</label>
                    <input type="date" name="dateOfTransaction" id="dateOfTransaction" value={this.props.transaction.dateOfTransaction} />
                    <div>{this.props.dateOfTransactionError}</div>

                    <label for="agent1">agent1:</label>
                    <input type="text" name="agent1" id="agent1" value={this.props.transaction.agent1} />
                    <div>{this.props.agent1Error}</div>

                    <label for="agent2">agent2:</label>
                    <input type="text" name="agent2" id="agent2" value={this.props.transaction.agent2} />
                    <div>{this.props.agent2Error}</div>

                    <label for="address">address:</label>
                    <input type="text" name="address" id="address" value={this.props.transaction.address} />

                    <label for="amount">amount:</label>
                    <input type="number" name="amount" id="amount" value={this.props.transaction.amount} />
                    <div>{this.props.amountError}</div>

                        <label for="location">location:</label>
                        <Fragment>
                            <input
                            type="text"
                            id="location"
                            name="location"
                            onChange={onChange}
                            onKeyDown={onKeyDown}
                            value={userInput}
                            />
                            {suggestionsListComponent}
                            </Fragment>
                        
                        <div>{this.props.locationError}</div>
                        

                        <label for="address">address:</label>
                       <input type="text" value={this.props.transaction.address} id="address" name="address" />
                        
                    </div>  <input type="submit" value="Submit"></input>
            </form>
                </div>);
    }


  
}

// Exporting the component
export default TransactionMainComponent;