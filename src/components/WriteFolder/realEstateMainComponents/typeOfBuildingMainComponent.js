import React, {Component} from 'react';

class typeOfBuildingMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state=
        {typeOfBuildingError:""}}

        render()
        {return(
            <form action="/typeOfBuilding" >
            <label for="typeOfBuilding">type Of Building:</label>
            <input type="text" id="typeOfBuilding" name="typeOfBuilding" value={this.props.typeOfBuilding.value} />
            <div>{this.state.typeOfBuildingError}</div>
            
                <input type="submit" value="Submit"></input>
            </form>
        );}
}