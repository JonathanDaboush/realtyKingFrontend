import React, {Component} from 'react';

class highlightMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state=
        {highlightError:""}}

        render()
        {return(
            <form action="/highlight" >
            <label for="highlight"> highlight :</label>
            <input type="text" id="highlight" name="highlight" value={this.props.highlightValue.highlight.value} />
            <label for="highlightValue"> highlight Value:</label>
            <input type="text" id="highlightValue" name="highlightValue" value={this.props.highlightValue.value} />
            <div>{this.state.highlightError}</div>
            
                <input type="submit" value="Submit"></input>
            </form>
        );}
}