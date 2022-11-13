import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
class Country extends Component {
  emptyItem={
    value:"",region:""
  }
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { country: this.emptyItem};
  }
  async componentDidMount() {
    if(this.props.id){
      let path='/country/getById/'+this.props.id;
      await axios.get(
        'http://localhost:8080'+path)
           .then(res => {
              this.setState({country: res});
         }).catch(
         function (error) {
          console.log('badError');
        });
  } }
    render()
    {
           

       
if(this.state.country.value  ===""){return( <div>

                                country: {this.state.country.value}
                                </div>);}
else{return(<div>country: {this.state.country.data.value}</div>)}

           



  }
}

// Exporting the component
export default Country;