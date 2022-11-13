import React, {Component} from 'react';
import $ from 'jquery';
import CreditCard from "../transactionComponents/creditCarComponent.js"
import Cheque from "../transactionComponents/chequeComponent.js"
import GeneralUser from '../accountComponents/generalUserComponent';
import Department from '../accountComponents/departmentComponent.js';
var classNames = require('classnames');
class TransactionMainComponent extends Component {
    
    render()
    {
        let paymentInfo=this.props.transaction.transactionDetails[0];
        let paymentInfo2=this.props.transaction.transactionDetails[1];   
        let payment;
        if(paymentInfo2.creditCard.creditCardNo){
            payment=<CreditCard CreditCard={paymentInfo2.creditCard} />
        }
        else{
            payment=<Cheque Cheque={paymentInfo2.cheque} />
        }
        let location=[];
        if(this.props.transaction.neighborhood.value)
        {
            location.push(<p>{this.props.transaction.neighborhood.value},</p>);
            location.push(<p>{this.props.transaction.neighborhood.city.value},</p>);
            location.push(<p>{this.props.transaction.neighborhood.city.region.value},</p>);
            location.push(<p>{this.props.transaction.neighborhood.city.region.country.value}</p>);
        }
        else
        {
            location.push(<p>{this.props.transaction.area.value},</p>);
            location.push(<p>{this.props.transaction.area.region.value},</p>);
            location.push(<p>{this.props.transaction.area.region.country.value}</p>);
            
        }
        return(<div>
                    <div>
                        <div>buyer:{paymentInfo.ofSubject}</div>
                        
                        <div>
                            transaction:credit
                        </div>
                        <div>
                            bank name:{paymentInfo.bankName} 
                        </div>
                        <div>
                            amount:{paymentInfo.amount}  
                        </div>
                        <div>
                            <CreditCard CreditCard={paymentInfo.creditCard}  />
                        </div>
                    </div>
                    <div>
                        <div>buyer:{paymentInfo2.ofSubject}</div>
                        
                        <div>
                            transaction:debit
                        </div>
                        <div>
                            bank name:{paymentInfo2.bankName} 
                        </div>
                        <div>
                            amount:{paymentInfo2.amount}  
                        </div>
                        <div>
                            {payment}
                        </div>
                    </div>
                    <div>
                        <div>{this.props.transaction.dateOfTransaction}</div>
                        <div>{this.props.transaction.agent1}</div>
                        <div>{this.props.transaction.agent2}</div>
                        <div>{this.props.transaction.address}</div>
                        <div>{this.props.transaction.amount}</div>
                        <div>{this.props.transaction.address},{location}</div>
                    </div>
                </div>);
    }


  
}

// Exporting the component
export default TransactionMainComponent;