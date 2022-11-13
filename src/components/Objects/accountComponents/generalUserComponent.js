import React, {Component} from 'react';
import './css/jCirclize.css';
import './js/jCirclize.js';
import Image from '../imageComponents/imageComponent';
import Autocomplete from "./../MiscellaneousServices/Autocomplete";
class GeneralUser extends Component {
  
  constructor(props) {
    super(props);
    this.state = {data: [
      {
        image:
          "src\Images\defaultImage.jpg",
        text: "img1"
      }]};
  }

  loadImages(){
    let ext=this.props.generalBuilding.address;
      let files="someFunction";
      let i=0;
      let newData=[];
      files.map(function(file, i){
        newData.push(
          {
            image:file,
          text: "img "+i
          }
        );
        i++;
      });
      this.setState({ data: newData })
  
     
   }

    render()
    {


       


        

                          return (<div className="form-group">
                          <Image data={this.state.data} />

                          <div
                                                                    id="gender"
                                                                    name="gender"
                                                                  >Name:{this.props.user.gender}</div>
                                                             <div
                                                                    id="fullName"
                                                                    name="fullName"
                                                                  >Name:{this.props.user.fullName}</div>
                                                              <div
                                                                    id="dob"
                                                                    name="dob"
                                                                  >Date of birth:{this.props.user.dob}</div>]
                                                          <div id="email"
                                                                name="email"
                                                              >email:{this.props.user.email} </div>
                                                      <div
                                                           id="phoneNumber"
                                                            name="phoneNumber"

                                                          > phone Number:{this.props.user.phoneNumber}</div>
                                                      <div
                                                            id="password"
                                                            name="password"
                                                          >password:{this.props.user.password}</div>

                                                        <div>
                                                            is active:{this.props.user.isActive}
                                                        </div>
                            </div>);
                        }

     
}

// Exporting the component
export default GeneralUser;