import React, {Component} from 'react';

class propertyMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state=
        {propertyError:""}}

        render()
        {return(
            <form action="/property" >
            <label for="property"> property :</label>
            <input type="text" id="property" name="property" value={this.props.propertyValue.property.value} />
            <label for="propertyValue"> property Value:</label>
            <input type="text" id="propertyValue" name="propertyValue" value={this.props.propertyValue.value} />
            <div>{this.state.propertyError}</div>
            
                <input type="submit" value="Submit"></input>
            </form>
        );}
}