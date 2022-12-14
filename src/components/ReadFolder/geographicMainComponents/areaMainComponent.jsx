import React, {Component} from 'react';

import axios from 'axios';
class Area extends Component {
  emptyItem={
    value:"",region:""
  }
 constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { area: this.emptyItem };
  }
  async componentDidMount() {
    let path='/area/getById/'+this.props.id;
    await axios.get(
      'http://localhost:8080'+path)
         .then(res => {
            this.setState({area: res.data});
       }).catch(
       function (error) {
      });
  } 
    render()
    {
           

       
      if(this.state.area.value===''||this.state.area.value===undefined){return(<div></div>)}

           return( <div>

                                      <div> country: {this.state.area.region.country.value}</div>
                                       
                                      <div>region: {this.state.area.region.value}</div>

                                      <div> area: {this.state.area.value}</div>

                                </div>);



  }
}

// Exporting the component
export default Area;