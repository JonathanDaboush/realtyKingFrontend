import React, {Component}from 'react';

import './css/jCirclize.css';
import './js/jCirclize.js';
import Image from '../imageComponents/imageComponent';
class GeneralBuilding extends Component {
  constructor(props) {
    super(props);
    this.state = {data: [
      {
        image:
          "src\Images\defaultImage.jpg",
        text: "img1"
      }],attachments:[]};
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
 loadFiles(){
  let files="someFunction";
  
  let newData=[];
  files.map(function(file){
    newData.push(
      {
        link:file.value,
        text: file.title
      }
    );
  });
  this.setState({ attachments: newData })
 }

    render()
    {

      
          this.loadImages();
          this.loadFiles();
          let attachments;
          this.state.attachments.map((attachment)=>
            attachments.push(<a src={attachment.value}  download>{attachment.text}</a>));
          
          return(<div className="form-group">
                                                  <Image data={this.state.data} />
                                                  <attachments />
                                                  <div
                                                        id="postalCode"
                                                        name="postalCode"
                                                      >postal Code:{this.props.generalBuilding.postalCode}</div>
                                                <div
                                                      id="address"
                                                      name="address"
                                                    >address:{this.props.generalBuilding.address} </div>
                                                  <div
                                                        id="yearBuild"
                                                        name="yearBuild"
                                                      >year Build:{this.props.generalBuilding.yearBuild}</div>
                                                <label className="control-label" for="listingDate"> listing Date: </label>
                                                  <div
                                                        id="listingDate"
                                                        name="listingDate"
                                                      >year Build:{this.props.generalBuilding.listingDate}</div>
                                                  <div
                                                        id="lotSize"
                                                        name="lotSize"
                                                      >lot Size:{this.props.generalBuilding.lotSize} </div>
                                                  <div
                                                        id="percentileOfPriceDrop"
                                                        name="percentileOfPriceDrop"
                                                      >percentile Of Price Drop:{this.props.generalBuilding.percentileOfPriceDrop}</div>
                                                    <label className="control-label" for="description"> </label>
                                                      <div
                                                            id="description"
                                                            name="description"
                                                          >description:{this.props.generalBuilding.description}  </div>
                                                          <div
                                                            id="isConstruction"
                                                            name="isConstruction"
                                                          >isConstruction:{this.props.generalBuilding.isConstruction}  </div>
                                                           <div
                                                            id="tob"
                                                            name="tob"
                                                          >typeOfBuilding:{this.props.generalBuilding.typeOfBuilding}  </div>
                                                           <div
                                                            id="tosb"
                                                            name="tosb"
                                                          >typeOfSubBuilding:{this.props.generalBuilding.typeOfSubBuilding}  </div>
                                                          <div>realtor:{this.props.generalBuilding.employee}</div>
                                        </div>);
        


        
  }
}

// Exporting the component
export default GeneralBuilding;