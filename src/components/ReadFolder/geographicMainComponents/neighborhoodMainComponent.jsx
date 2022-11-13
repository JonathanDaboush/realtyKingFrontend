import React, {Component} from 'react';
import axios from 'axios';

class Neighborhood extends Component {
       emptyItem={
              value:"",city:""
            }
           constructor(props) {
              super(props);
              // Don't call this.setState() here!
              this.state = { neighborhood: this.emptyItem };
            }
            async componentDidMount() {
              if(this.props.id){
                let path='/neighborhood/'+this.props.id;
                await axios.get(
                  'http://localhost:8080'+path)
                     .then(res => {
                        this.setState({neighborhood: res});
                   }).catch(
                   function (error) {
                    let emptyItem={
                            value:"",city:""
                          }
                    this.setState({neighborhood:emptyItem});
                  });

              }
            } 
    render()
    {
           

       


           return( <div>

<div> country: {this.state.neighborhood.city.region.country.value}</div>
                                       
                                       <div>region: {this.state.neighborhood.city.region.value}</div>
 
                                       <div> city: {this.state.neighborhood.city.value}</div>
                                       <div> city: {this.state.neighborhood.value}</div>
                                </div>);



  }
}

// Exporting the component
export default Neighborhood;