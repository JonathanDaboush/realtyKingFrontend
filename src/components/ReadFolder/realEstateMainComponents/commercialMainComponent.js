import React, {Component} from 'react';
import GeneralBuilding from '../../Objects/realEstateComponents/generalBuildingComponent.js';
import ServiceValuePair from '../../Objects/realEstateComponents/serviceValuePairComponent.js';
import AvailableSpace from '../../Objects/realEstateComponents/availableSpaceComponent.js';
import AmmenetieValues from '../../Objects/realEstateComponents/ammenetieValuesComponent.js';
import FrequentlyAskedQuestion from '../../Objects/realEstateComponents/frequentlyAskedQuestionComponent.js';
import WorkspaceValues from '../../Objects/realEstateComponents/workspaceValuesComponent.js';
import HighlightValues from './realEstateComponents/highlightValueComponent';
import HoursOfOperation from '../../Objects/realEstateComponents/hoursOfOperationComponent.js';

var classNames = require('classnames');
class Commercial extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
                  text: "",
                  text2:"",
                  isNeighborhood:false,
                  panelNumber:1,
                  panel1:false,
                  panel2:false,
                  ammenetieValues:[],
                  highlightValues:[],
                  serviceValues:[],
                  workspaceValues:[],
                  frequentlyAskedQuestions:[],
                  hoursOfOperation:[],
                  availableSpaces:[],
                  images:this.props.commercial.images,
                  i:0
                }
                this.handleChange=   this.handleChange.bind(this);
                this.generateAvailableSpaces= this.generateAvailableSpaces.bind(this);
                this.generateServiceValues= this.generateServiceValues.bind(this);
                this.generateAmmenetieValues= this.generateAmmenetieValues.bind(this);
                this.generateHighlightValues= this.generateHighlightValues.bind(this);
                this.generateServiceValues= this.generateServiceValues.bind(this);
                this.generateWorkspaceValues= this.generateWorkspaceValues.bind(this);
                this.generateFrequentlyAskedQuestions= this.generateFrequentlyAskedQuestions.bind(this);
                this.generateHoursOfOperation= this.generateHoursOfOperation.bind(this);
                this.generationFunction= this.generationFunction.bind(this);
           

    }

    generateAvailableSpaces=()=>{
        for(let i=0;i<this.props.commercial.availableSpaces.length;i++){
                   let availableSpace=this.props.commercial.availableSpaces[i];
                   let token=[]
                   token.push(<AvailableSpace
                               availableSpace={this.availableSpace}
                           />);
                   this.state.availableSpaces.add
                   (<div>

                           {token}
                          
                       </div>
                   );
        }

   }
 
     generateServiceValues=()=>{
              for(let i=0;i<this.props.commercial.serviceValues.length;i++){
                         let serviceValuePair=this.props.commercial.serviceValues[i];
                         this.state.serviceValues.add
                         (<div>
     
                                 <ServiceValuePair serviceValues={serviceValuePair} i={i}/>
                                 
                             </div>
                         );
              }
     
         }
    generateAmmenetieValues=()=>{
         for(let i=0;i<this.props.commercial.building.ammenetieValues.length;i++){
                    let ammenetieValuePair=this.props.commercial.building.ammenetieValues[i];
                    this.state.ammenetieValues.add
                    (<div>

                            <AmmenetieValues ammenetieValues={ammenetieValuePair} i={i}/>
                          
                        </div>
                    );
         }

    }
    generateHighlightValues=()=>{
        
         for(let i=0;i<this.props.commercial.building.highlightValues.length;i++){
                    let highlightValuePair=this.props.commercial.building.highlightValues[i];
                    this.state.highlightValues.add
                    (<div>

                            <HighlightValues i={i} highlightValues={highlightValuePair} />
                             
                        </div>
                    );
         }

    }
    generateServiceValues=()=>{
        for(let i=0;i<this.props.commercial.serviceValues.length;i++){
                    let serviceValuePair=this.props.commercial.serviceValues[i];
                    this.state.serviceValues.add
                    (<div>

                        <ServiceValuePair serviceValues={serviceValuePair} i={i} />
                         
                      </div>  
                    );
        }

    }
    generateWorkspaceValues=()=>{
         for(let i=0;i<this.props.commercial.workspaceValues.length;i++){
                    let workspaceValuePair=this.props.commercial.workspaceValues[i];
                    this.state.workspaceValues.add
                    (
                        <div>
                            <WorkspaceValues workspaceValues={workspaceValuePair} i={i} />
                           
                        </div>
                    );
         }

    }
 
    generateFrequentlyAskedQuestions=()=>{
            for(let i=0;i<this.props.commercial.building.frequentlyAskedQuestions.length;i++){
                let faq=this.props.commercial.building.frequentlyAskedQuestions[i];
                this.state.frequentlyAskedQuestions.add
                ( <div>
                        <FrequentlyAskedQuestion 
                            question={faq[0]}
                            answer={faq[1]}
                            i={i} 
                        /> 
                       
                    </div>);
                
            }

        }
    generateHoursOfOperation=()=>{
   
            for(let i=0;i<this.props.commercial.hoursOfOperations.length;i++){
                let hoursOfOperation=this.props.commercial.hoursOfOperations;
                this.state.hoursOfOperation.add(
                    <div>
                        <HoursOfOperation 
                            i={i}
                            hoursOfOperation={hoursOfOperation}
                        />
                   </div>     
                );
            
            

        }}
        generationFunction=()=>{
            this.generateAmmenetieValues();
            this.generateFrequentlyAskedQuestions();
            this.generateHighlightValues();
            this.generateHoursOfOperation();
            this.generateServiceValues();
            this.generateWorkspaceValues();
            this.generateAvailableSpaces();
        }
    

       handleChange = event => {
                  let value=event.target.value;
                   this.setState({panel2: false});

                   this.setState({panel1: false});
                  if(value==="1"){
                      this.setState({panel1: true});
                  }
                  else if(value==="2")
                  {
                           this.setState({panel2: true});
                                   }


                };

    render()
    {
        this.generationFunction();

        let location;
            if(this.props.employee.employeeCapsule.employeeGeographicData.area.value){
                location=this.props.commercial.building.area.value+","+
                this.props.commercial.building.area.region.value+","+
                this.props.commercial.building.area.region.country.value;
            }
            else{
                location=this.props.commercial.building.neighborhood.city.value+","+
                this.props.commercial.building.neighborhood.city.value+","+
                this.props.commercial.building.neighborhood.city.region.value+","+
                this.props.commercial.building.neighborhood.city.region.country.value;
            }

        var panel1 = classNames({
          'd-block':this.state.panel1,
          'd-none': !this.state.panel1
        });
        var panel2 = classNames({
          'd-block':this.state.panel2,
          'd-none': !this.state.panel2
        });
        let imageUpload;
        if(this.props.commercial.isUpdate==true){
            imageUpload=<div>
                <label for="imageUpload">images:</label>
                <input type="file" id="files" name="files" multiple></input>
            </div>
        }
        else{
            imageUpload=<div></div>
        }
        if(this.props.isMenu){
                    return
                     (<div>
                        <div>
                        <GeneralBuilding 
                            generalBuilding={this.props.commercial.building}
                        />
                        </div>
                        <div>
                            <div>this.props.commercial.buildingSpace</div>
                            <div>this.props.commercial.buildingClass</div>
                        </div>
                    </div>);
        }
        else{
        return (<div>
        <div>{this.props.commercial.realtor}</div>
                    <div id="1" className={panel1}>

                        <GeneralBuilding 
                            generalBuilding={this.props.commercial.building}
                        />

                        <div>{this.state.frequentlyAskedQuestions}</div>
                      
                        <div>{this.state.ammenetieValues}</div>
                        
                        <div>{this.state.highlightValues}</div>
                        
                        <div>{location}</div>
                    </div>
                    <div id="2" className={panel2}>
                        <div>this.props.commercial.buildingSpace</div>
                        <div>this.props.commercial.buildingClass</div>
                      
                   
                        {this.state.hoursOfOperation}
                       
                        {this.state.workspaceValues}
                      
                        {this.state.serviceValues}
                  
                    </div>
                    <div>
                        <fieldset>
                            <input type="radio" id="opt1" name="opt" value="1"   onChange={this.handleChange} checked></input>
                            <label for="opt">option 1</label>

                            <input type="radio" id="opt2" name="opt" value="2"  onChange={this.handleChange} ></input>
                            <label for="opt">option 2</label>
                        </fieldset>
                    </div>
                  
                </div>);
        }



             

            }
  
}

// Exporting the component
export default Commercial;