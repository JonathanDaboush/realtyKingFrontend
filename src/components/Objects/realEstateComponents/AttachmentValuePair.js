import React, {Component} from 'react';


class Attachment extends Component {




    render()
    {


 
       
            return(<div>
                                    <a href={this.props.attachmentValue.value} download>{this.props.attachmentValue.attachment.value}</a>
                            </div>);
           
  }
}

// Exporting the component
export default Attachment;