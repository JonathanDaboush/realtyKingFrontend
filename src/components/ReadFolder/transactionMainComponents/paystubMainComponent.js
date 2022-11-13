import React, {Component} from 'react';
import $ from 'jquery';
import GeneralUser from './../accountComponents/generalUserComponent';
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
import CreditCard from "./../transactionComponents/creditCarComponent.js"
class userMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state=
        {departmentError:"",
        isEmployee:false,
        isUpdate:false,
        dateOfTransactionError:"",
        phoneNumberError:"",
        amountError:"",
        departmentError:"",
        fullNameError:"",
        goodThruError:"",
        cvvError:"",
        creditCardNoError:"",
        departmentNames:"",
        fullNames:"",
        i:"",
        paystub:""
    };
      }


    render()
    {

let paystub;
   if(this.props.isMenu){
              return(
                      <div>
                            <div>{this.state.paystub.fullName}</div>
                            <div>{this.state.paystub.DateOfTransaction}</div>
                            <div>{this.state.paystub.amount}</div>
                    </div>
                  );
              }
              else{
                  return(
                    <div>
                   

                    <GeneralUser name={this.state.paystub.name} />
                        
                    <div id="amount" name="amount" >amount:{this.state.paystub.amount}</div>

                    <div>credit card number:{this.state.paystub.creditCardNo}</div>
                   
                    <div id="phoneNumber" name="phoneNumber">phoneNumber:{this.state.paystub.phoneNumber}</div>

                    <div id="email" name="email">email:{this.state.paystub.email}</div>
               
                    <div id="dateOfTransaction" name="dateOfTransaction">dateOfTransaction:{this.state.paystub.dateOfTransaction}</div>
                 
                </div>
                  );
              }
         
    }


  
}

// Exporting the component
export default userMainComponent;