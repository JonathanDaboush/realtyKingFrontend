import React, {Component} from 'react';
class ForgotPassword extends Component  {
    


    render()
    {
        return(
            <div>
                <h1>Forgot Password?</h1>
                <p>Please enter in your email address and we will send you a message with your password in it.</p>
                <form action="/user/forgotPassword">
                        <label className="control-label" for="email"> email: </label>
                        <input

                            type="email"
                            id="email"
                            name="email"
                            value={this.props.user.email}
                            />
                        <input type="submit" value="submit"></input>
                </form>
            </div>
        );
    }

}
export default ForgotPassword;