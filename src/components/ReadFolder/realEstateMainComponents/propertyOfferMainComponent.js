import React, {Component} from 'react';

class propertyOfferMainComponent extends Component {
    

        render()
        {return(
          <div>
            <div>address:{this.props.propertyOffer.generalBuilding.address}</div>
            
            <div>amount:{this.props.propertyOffer.amount} </div>
            
            <div>todayPreceedsDate:{this.props.propertyOffer.todayPreceedsDate}</div>
            
           </div>   
        );}
}