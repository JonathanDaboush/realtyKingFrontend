import React, {Component} from 'react';

class featureMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state=
        {featureError:""}}

        render()
        {return(
            <form action="/feature" >
            <label for="feature"> feature :</label>
            <input type="text" id="feature" name="feature" value={this.props.featureValue.feature.value} />
            <label for="featureValue"> feature Value:</label>
            <input type="text" id="featureValue" name="featureValue" value={this.props.featureValue.value} />
            <div>{this.state.featureError}</div>
            
                <input type="submit" value="Submit"></input>
            </form>
        );}
}