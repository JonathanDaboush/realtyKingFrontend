import React, {Component} from 'react';
import AmmenetieValues from '../../Objects/realEstateComponents/ammenetieValuesComponent.js';
import HighlightValues from '../../Objects/realEstateComponents/highlightValueComponent';
import FrequentlyAskedQuestion from '../../Objects/realEstateComponents/frequentlyAskedQuestionComponent.js';
import PropertyValuePair from '../../Objects/realEstateComponents/propertyValuePairComponent.js';
import GeneralBuilding from '../../Objects/realEstateComponents/generalBuildingComponent.js';
import FeatureValuePair from '../../Objects/realEstateComponents/featureValuePairComponent.js';
import Room from '../../Objects/realEstateComponents/roomComponent.js';
var classNames = require('classnames');
class HomeM extends Component {
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
                  ammenetieValuePair:[],
                  highlightValuePair:[],
                  frequentlyAskedQuestions:[],
                  rooms:[],
                  propertyValuePair:[],
                  FeatureValuePair:[]

                }
                
  this.handleChange=   this.handleChange.bind(this);
  
	  this.generationFunction= 	  this.generationFunction.bind(this);
	  this.generateFrequentlyAskedQuestions= 	  this.generateFrequentlyAskedQuestions.bind(this);
	  this.generateHighlightValuePairs= 	  this.generateHighlightValuePairs.bind(this);
	   this.generateFeatureValuePair= 	   this.generateFeatureValuePair.bind(this);
	   this.generatePropertyValuePair= 	   this.generatePropertyValuePair.bind(this);
	   this.generateAmmenetieValuePair= 	   this.generateAmmenetieValuePair.bind(this);
	   this.generateRooms= 	   this.generateRooms.bind(this);
    }

   generateRooms=()=>{
    for(let i=0;i<this.props.home.rooms.length;i++){
        let room=this.props.home.rooms[i];
        this.staterooms.add( <div><Room   room={this.props.home.rooms[i]}
        /></div>);
    }
   }
   generateAmmenetieValues=()=>{
    for(let i=0;i<this.props.home.building.ammenetieValues.length;i++){
               let ammenetieValuePair=this.props.home.building.ammenetieValues[i];
               this.state.ammenetieValues.add
               (<div>

                       <AmmenetieValues ammenetieValues={ammenetieValuePair} i={i}/>
                     
                   </div>
               );
    }

}
generateHighlightValues=()=>{
   
    for(let i=0;i<this.props.home.building.highlightValues.length;i++){
               let highlightValuePair=this.props.home.building.highlightValues[i];
               this.state.highlightValues.add
               (<div>

                       <HighlightValues i={i} highlightValues={highlightValuePair} />
                        
                   </div>
               );
    }

}
    
        generatePropertyValuePair=()=>{
            for(let i=0;i<this.props.home.propertyValues.length;i++){
                        let propertyValuePair=this.props.home.propertyValues[i];
                        this.state.propertyValues.add
                        (<div>
        
                                <PropertyValuePair propertyValues={propertyValuePair} i={i}/>
                            
                            </div>
                        );
            }
    
        }
        
            generateFeatureValuePair=()=>{
                for(let i=0;i<this.props.home.featureValues.length;i++){
                    let featureValuePair=this.props.home.featureValues[i];
                    this.state.featureValues.add
                    (<div>
    
                            <FeatureValuePair featureValues={featureValuePair} i={i}/>
                        
                        </div>
                    );
        }
        
            }
  

   
    generateFrequentlyAskedQuestions=()=>{
        for(let i=0;i<this.props.home.building.frequentlyAskedQuestions.length;i++){
            let faq=this.props.home.building.frequentlyAskedQuestions[i];
            this.state.frequentlyAskedQuestions.add
            ( <div>
                    <FrequentlyAskedQuestion 
                        question={faq[0]}
                        answer={faq[1]}
                        i={i} isUpdate={this.props.home.isUpdate}
                    /> 
                   
                </div>);
            
        }

    }

        generationFunction=()=>{
            this.generateAmmenetieValuePair();
            this.generateFrequentlyAskedQuestions();
            this.generateHighlightValuePairs();
            this.generateFeatureValuePair();
            this.generatePropertyValuePair();
            this.generateRooms();
           
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

        var panel1 = classNames({
          'd-block': this.state.panel1,
          'd-none': !this.state.panel1
        });
        var panel2 = classNames({
          'd-block':this.state.panel2,
          'd-none': !this.state.panel2
        });
       
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
        if(this.props.isMenu){
                    return
                     (<div>
                        <div>
                            {location}
                            <GeneralBuilding 
                            generalBuilding={this.props.home.building}
                        />
                        </div>
                        <div>
                            <div>{this.props.home.squareFeet}</div>
                            <div>{this.props.home.numOfBats}</div>
                            <div>{this.props.home.numOfBeds}</div>
                        </div>
                    </div>);
        }
        else{
        return (<div>
                    <div id="1" className={panel1}>

                    <GeneralBuilding 
                            generalBuilding={this.props.home.building}
                        />
                        {location}
                   
                        {this.state.frequentlyAskedQuestions}
                      
                        {this.state.ammenetieValuePair}
                       
                        {this.state.highlightValuePair}
                       
                        //enter in area
                    </div>
                    <div id="2" className={panel2}>
                    <div>
                    <div>{this.props.home.rentingPolicy}</div>
                        <div>{this.props.home.overview}</div>
                        <div>{this.props.home.dateOfOpenHouse}</div>
                        <div>{this.props.home.hideSale}</div>
                        <div>{this.props.home.squareFeet}</div>
                        <div>{this.props.home.numOfBats}</div>
                        <div>{this.props.home.numOfBeds}</div>
                        <div>{this.props.home.rentingPolicy}</div>
                        </div>

                        {this.state.rooms}
                       
                           {this.state.propertyValuePair}
                        
                        {this.state.featureValuePair}
                       
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
export default HomeM;