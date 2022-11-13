import React, {Component} from 'react';

class typeOfSubBuildingMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state=
        {typeOfSubBuildingError:""}}

        render()
        {return(
            <form action="/typeOfSubBuilding" >
            <label for="typeOfSubBuilding">type Of Sub Building:</label>
            <input type="text" id="typeOfSubBuilding" name="typeOfSubBuilding" value={this.props.typeOfSubBuilding.value} />
            <div>{this.state.typeOfSubBuildingError}</div>
            
                <input type="submit" value="Submit"></input>
            </form>
        );}
}