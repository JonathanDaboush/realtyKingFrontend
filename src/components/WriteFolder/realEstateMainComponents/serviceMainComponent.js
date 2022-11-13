import React, {Component} from 'react';

class serviceMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state=
        {serviceError:""}}

        render()
        {return(
            <form action="/service" >
            <label for="service"> service :</label>
            <input type="text" id="service" name="service" value={this.props.serviceValue.service.value} />
            <label for="serviceValue"> service Value:</label>
            <input type="text" id="serviceValue" name="serviceValue" value={this.props.serviceValue.value} />
            <div>{this.state.serviceError}</div>
            
                <input type="submit" value="Submit"></input>
            </form>
        );}
}