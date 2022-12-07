import React, {Component} from 'react';
import axios from 'axios';

class Neighborhood extends Component {
       
             
            
           constructor(props) {
              super(props);
              // Don't call this.setState() here!
              this.state = { neighborhood: { value:"",city:""} };
            }
            async componentDidMount() {
              if(this.props.id){
                console.log('hi');
                let path='http://localhost:8080/neighborhood/getById/'+this.props.id;
                await axios.get(path)
                     .then(res => {
                        this.setState({neighborhood: res.data});
                   }).catch(
                   function (error) {
                   
                  });

              }
            } 
    render()
    {
           

       
if(this.state.neighborhood.value===""||this.state.neighborhood.value===undefined){return(<div></div>);}

           return( <div>

<div> country: {this.state.neighborhood.city.region.country.value}</div>
                                       
                                       <div>region: {this.state.neighborhood.city.region.value}</div>
 
                                       <div> city: {this.state.neighborhood.city.value}</div>
                                       <div> neighborhood: {this.state.neighborhood.value}</div>
                                </div>);



  }
}

// Exporting the component
export default Neighborhood;