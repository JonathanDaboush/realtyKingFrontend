import React, {Component} from 'react';

class dayMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state=
        {dayError:""}}

        render()
        {return(
            <form action="/day" >
            <label for="day">day:</label>
            <input type="text" id="day" name="day" value={this.props.day.value} />
            <div>{this.state.dayError}</div>
            
                <input type="submit" value="Submit"></input>
            </form>
        );}
}