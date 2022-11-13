import React, {Component} from 'react';

class ammenetieMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state=
        {ammenetieError:""}}

        render()
        {return(
            <form action="/ammenetie" >
            <label for="ammenetie"> ammenetie :</label>
            <input type="text" id="ammenetie" name="ammenetie" value={this.props.ammenetieValue.ammenetie.value} />
            <label for="ammenetieValue"> ammenetie Value:</label>
            <input type="text" id="ammenetieValue" name="ammenetieValue" value={this.props.ammenetieValue.value} />
            <div>{this.state.ammenetieError}</div>
            
                <input type="submit" value="Submit"></input>
            </form>
        );}
}