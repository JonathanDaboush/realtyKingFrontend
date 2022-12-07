import React, {Component} from 'react';
import axios from 'axios';

class Region extends Component {
  emptyItem={
    value:"",country:""
  }
       constructor(props) {
              super(props);
              // Don't call this.setState() here!
              this.state = { region: this.emptyItem };
            }
            async componentDidMount() {
              let ofObject={};
              if(this.props.id){
                let path='/region/getById/'+this.props.id;
                await axios.get(
                  'http://localhost:8080'+path)
                     .then(res => {
                      ofObject= res.data;
                   }).catch(
                   function (error) {
                    
                  });}
                 await this.setState({region:ofObject});
            } 
    render()
    {
           

       
      if(this.state.region.value===''||this.state.region.value===undefined){return(<div></div>)}

           return( <div>

                      <div> country: {this.state.region.country.value}</div>
                                       
                        <div>region: {this.state.region.value}</div>
                                </div>);



  }
}

// Exporting the component
export default Region;