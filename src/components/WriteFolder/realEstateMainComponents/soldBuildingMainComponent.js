import React, {Component, Fragment } from 'react';
import './css/jCirclize.css';
import './js/jCirclize.js';
import PropTypes from "prop-types";
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
class SoldBuilding extends Component {
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
      };
    
      static defaultProps = {
        suggestions: []
      };
    
      constructor(props) {
        super(props);
    
        this.state = {
          // The active selection's index
          activeSuggestion: 0,
          // The suggestions that match the user's input
          filteredSuggestions: [],
          // Whether or not the suggestion list is shown
          showSuggestions: false,
          // What the user has entered
          userInput: "",
          amountError: "",
            sellerError: "",
            buyerError: "",
            agent1Error: "",
            agent2Error: "",
            dateOfPurchaseError: "",
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


           return( <div>

                                      <div> country: {this.props.area.region.country.value}</div>
                                       
                                      <div>region: {this.props.area.region.value}</div>

                                      <form action="/area" >
                                        <Fragment>
                                        <label for="amount">amount:</label>
                                        <input type="number" name="amount" id="amount" value={this.props.soldBuilding.amount} />
                                        <div>{this.state.amountError}</div>
                                        <label for="seller">seller:</label>
                                        <input type="text" name="seller" id="seller" value={this.props.soldBuilding.seller}  />
                                        <div>{this.state.sellerError}</div>
                                        <label for="buyer">buyer:</label>
                                        <input type="text" name="buyer" id="buyer" value={this.props.soldBuilding.buyer}  />
                                        <div>{this.state.buyerError}</div>
                                        <label for="agent1">agent1:</label>
                                        <input type="text" name="agent1" id="agent1"  value={this.props.soldBuilding.agent1} />
                                        <div>{this.state.agent1Error}</div>
                                        <label for="agent2">agent2:</label>
                                        <input type="text" name="agent2" id="agent2" value={this.props.soldBuilding.agent2}  />
                                        <div>{this.state.agent2Error}</div>
                                        <label for="address">address:</label>
                                        <input type="text" name="address" id="address" value={this.props.soldBuilding.address}  />

                                        <label for="dateOfPurchase">date Of Purchase:</label>
                                        <input type="date" name="dateOfPurchase" id="dateOfPurchase"  value={this.props.soldBuilding.dateOfPurchase} />
                                        <div>{this.state.dateOfPurchaseError}</div>
                                            <input
                                            type="text"
                                            onChange={onChange}
                                            onKeyDown={onKeyDown}
                                            value={userInput}
                                            />
                                            {suggestionsListComponent}
                                        </Fragment>
                                    <div>{this.props.locationError}</div>
                                          <input type="submit" value="Submit"></input>
                                       </form>

                                </div>);



  }
}

// Exporting the component
export default SoldBuilding;