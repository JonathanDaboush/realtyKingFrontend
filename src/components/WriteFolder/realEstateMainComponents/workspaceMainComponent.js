import React, {Component} from 'react';

class workspaceMainComponent extends Component {
    constructor(props) {
        super(props);
        this.state=
        {workspaceError:""}}

        render()
        {return(
            <form action="/workspace" >
            <label for="workspace"> workspace :</label>
            <input type="text" id="workspace" name="workspace" value={this.props.workspaceValue.workspace.value} />
            <label for="workspaceValue"> workspace Value:</label>
            <input type="text" id="workspaceValue" name="workspaceValue" value={this.props.workspaceValue.value} />
            <div>{this.state.workspaceError}</div>
            
                <input type="submit" value="Submit"></input>
            </form>
        );}
}