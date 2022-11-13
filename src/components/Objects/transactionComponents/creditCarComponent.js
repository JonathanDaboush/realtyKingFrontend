import React, {Component} from 'react';

import './css/jCirclize.css';
import './js/jCirclize.js';
class CreditCard extends Component {
  

    render()
    {

       
        let creditCardNo="creditCardNo"+this.props.i; 
        let cvv="cvv"+this.props.i;
        let goodThru="goodThru"+this.props.i; 

          
               if(this.props.byCreditCardNo===true){
                                     return(<div className="form-group">
                                                       <label className="control-label" for={creditCardNo}> creditCardNo: </label>
                                                         <div type="text"
                                                               id={creditCardNo}
                                                               name={creditCardNo}
                                                             > {this.props.CreditCard.creditCardNo} </div>
                                                 </div> );
                           }
                           else{
                             return(<div className="form-group">
                                                               <label className="control-label" for={creditCardNo}> creditCardNo: </label>
                                                                 <div type="text"
                                                                       id={creditCardNo}
                                                                       name={creditCardNo}

                                                                     >  {this.props.CreditCard.creditCardNo} </div>



                                                                 <label className="control-label" for={cvv}> cvv: </label>
                                                                     <div type="text"
                                                                           id={cvv}
                                                                           name={cvv}
                                                                         >{this.props.CreditCard.cvv}   </div>

                                                                 <label className="control-label" for={goodThru}> goodThru: </label>
                                                                     <div type="date"
                                                                           id={goodThru}
                                                                           name={goodThru}
                                                                         > {this.props.CreditCard.goodThru} </div>
                                                           </div> );
                                                }

        

  }
}

// Exporting the component
export default CreditCard;