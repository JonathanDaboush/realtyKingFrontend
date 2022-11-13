import React, {Component} from 'react';

import './css/jCirclize.css';
import './js/jCirclize.js';

class Cheque extends Component {
 
    render()
    {
        let chequeNo="chequeNo"+this.props.i; 
        let paymentId="paymentId"+this.props.i;

       

            return(<div>
                 <div className="form-group">
                    <div type="text" name={chequeNo} id={chequeNo}>cheque number:{this.props.Cheque.chequeNo} </div>
                </div>
                <div className="form-group">
                    <div type="text" name={paymentId} id={paymentId}>payment id:{this.props.Cheque.paymentId}</div>
                </div>
            </div> );

        
  
}}

// Exporting the component
export default Cheque;