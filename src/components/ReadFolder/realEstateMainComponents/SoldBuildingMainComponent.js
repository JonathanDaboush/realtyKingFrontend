import React, {Component} from 'react';
import './css/jCirclize.css';
import './js/jCirclize.js';
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
class SoldBuilding extends Component {


    render()
    {
           

     
let location=[];
if(this.props.soldBuilding.area){
  location.push(this.props.soldBuilding.area);
}
else{
  location.push(this.props.soldBuilding.neighborhood);
}
           return( <div>

                                      <div> buyer: {this.props.soldBuilding.buyer}</div>
                                       
                                      <div>seller: {this.props.soldBuilding.seller}</div>

                                      <div> agent1: {this.props.soldBuilding.agent1}</div>

                                      <div> agent2: {this.props.soldBuilding.agent2}</div>

                                      <div> amount: {this.props.soldBuilding.amount}</div>
                                      <div> amount: {this.props.soldBuilding.address}</div>
                                      <div>{location}</div>
                                      <div> amount: {this.props.soldBuilding.dateOfPurchase}</div>

                                </div>);



  }
}

// Exporting the component
export default SoldBuilding;