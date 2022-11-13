import React, {Component} from 'react';

class propertyOfferMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state=
        {
            todayPreceedsDateError:"",
            addressError:"",
            amountError:""}}

        render()
        {return(
            <form action="/propertyOffer" >
            <label for="address">address:</label>
            <input type="text" id="address" name="address" value={this.props.propertyOffer.generalBuilding.address} />
            <div>{this.state.addressError}</div>
            <label for="amount">amount:</label>
            <input type="text" id="amount" name="amount" value={this.props.propertyOffer.amount} />
            <div>{this.state.amountError}</div>
            <label for="todayPreceedsDate">todayPreceedsDate:</label>
            <input type="text" id="todayPreceedsDate" name="todayPreceedsDate" value={this.props.propertyOffer.todayPreceedsDate} />
            <div>{this.state.todayPreceedsDateError}</div>
                <input type="submit" value="Submit"></input>
            </form>
        );}
}