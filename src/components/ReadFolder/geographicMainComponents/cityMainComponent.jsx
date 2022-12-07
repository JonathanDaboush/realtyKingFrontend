import React, {Component} from 'react';
import axios from 'axios';

class City extends Component {
       emptyItem={
              value:"",region:""
            }
           constructor(props) {
              super(props);
              // Don't call this.setState() here!
              this.state = { city: this.emptyItem };
            }
            async componentDidMount() {
              if(this.props.id){
                let path='/city/getById/'+this.props.id;
                await axios.get(
                  'http://localhost:8080'+path)
                     .then(res => {
                        this.setState({city: res.data});
                   }).catch(
                   function (error) {
                  });
            }} 
    render()
    {
           

       
if(this.state.city.value===''||this.state.city.value===undefined){return(<div></div>)}

           return( <div>

                                        <div> country: {this.state.city.region.country.value}</div>
                                       
                                       <div>region: {this.state.city.region.value}</div>
 
                                       <div> city: {this.state.city.value}</div>
                                </div>);



  }
}

// Exporting the component
export default City;