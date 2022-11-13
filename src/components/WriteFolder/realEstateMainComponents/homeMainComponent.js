import React, {Component} from 'react';
import Image from "./../imageComponents/imageComponent";
import PropTypes from "prop-types";
import { Fragment } from 'react';
var classNames = require('classnames');
class HomeM extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

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
                  attachmentValuePair:[],
                  images:this.props.images,
                  rooms:[],
                  propertyValuePair:[],
                  FeatureValuePair:[],
                  imageUpload:[],
                  // The active selection's index
                activeSuggestion: 0,
                // The suggestions that match the user's input
                filteredSuggestions: [],
                // Whether or not the suggestion list is shown
                showSuggestions: false,
                // What the user has entered
                userInput: "",
                roomError:[]

                }
                this.popLastImage= this.popLastImage.bind(this);
  this.handleChange=   this.handleChange.bind(this);
  this.callThis=   this.callThis.bind(this);
  this.removeThis=   this.removeThis.bind(this);
  this.removeImage=   this.removeImage.bind(this);
  this.removeFrequentlyAskedQuestions=   this.removeFrequentlyAskedQuestions.bind(this);
  this.removeHighlightValuePairs=   this.removeHighlightValuePairs.bind(this);
  this.removeFeatureValuePair=   this.removeFeatureValuePair.bind(this);
   this.removePropertyValuePair=    this.removePropertyValuePair.bind(this);
   this.removeAmmenetieValuePair=    this.removeAmmenetieValuePair.bind(this);
    this.removeRoom=     this.removeRoom.bind(this);
	this.insertFrequentlyAskedQuestions= 	this.insertFrequentlyAskedQuestions.bind(this);
	this.insertHighlightValuePairs= 	this.insertHighlightValuePairs.bind(this);
	 this.insertFeatureValuePair= 	 this.insertFeatureValuePair.bind(this);
	 this.insertPropertyValuePair= 	 this.insertPropertyValuePair.bind(this);
	  this.insertAmmenetieValuePair= 	  this.insertAmmenetieValuePair.bind(this);
	  this.insertRooms= 	  this.insertRooms.bind(this);
	  this.generationFunction= 	  this.generationFunction.bind(this);
	  this.generateFrequentlyAskedQuestions= 	  this.generateFrequentlyAskedQuestions.bind(this);
	  this.generateHighlightValuePairs= 	  this.generateHighlightValuePairs.bind(this);
	   this.generateFeatureValuePair= 	   this.generateFeatureValuePair.bind(this);
	   this.generatePropertyValuePair= 	   this.generatePropertyValuePair.bind(this);
	   this.generateAmmenetieValuePair= 	   this.generateAmmenetieValuePair.bind(this);
	   this.generateRooms= 	   this.generateRooms.bind(this);
    }
    onChange = e => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;
    
        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(
          suggestion =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
    
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions,
          showSuggestions: true,
          userInput: e.currentTarget.value
        });
      };
    
      onClick = e => {
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          userInput: e.currentTarget.innerText
        });
      };
    
      onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;
    
        // User pressed the enter key
        if (e.keyCode === 13) {
          this.setState({
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: filteredSuggestions[activeSuggestion]
          });
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
          if (activeSuggestion === 0) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
          if (activeSuggestion - 1 === filteredSuggestions.length) {
            return;
          }
    
          this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
      };
    
   generateRooms=()=>{
    let i=this.staterooms.length+1;
    let id="roomsGroup"+i;
    for(let i=0;i<this.props.rooms.length;i++){
        let room=this.props.rooms[i];
        this.state.rooms.add
        (<div id={id}>

            <label for="width">width:</label>
            <input type="number" name={"width"+i} id={"width"+i} value={room.width}/>
            <div>{this.props.roomError[i].widthError}</div>

            <label for="length">length:</label>
            <input type="number" name={"length"+i} id={"length"+i} value={room.length} />
            <div>{this.props.roomError[i].lengthError}</div>

            <label for="location">location:</label>
            <input type="text" name={"location"+i} id={"location"+i}  value={room.location} />
           
            <button onClick={()=>this.callThis("rooms",i,{id})}>
                                                      Delete
                                                  </button></div>);
    }
   }
    generateAmmenetieValuePair=()=>{
        for(let i=0;i<this.props.ammenetieValuePair.length;i++){
                
                let id="ammenetieGroup"+i;
                this.state.ammenetieValuePair.add
                (<div id={id}>
                        
                                
                <label for={"ammenetieName"+i}>ammenetie Name:</label>
                <input type="text" name={"ammenetieName"+i}  id={"ammenetieName"+i} value={this.props.ammenetieValuePair[i].ammenetie.Value} />
                <label for={"ammenetieValue"+i}>ammenetie Value:</label>
                <input type="text" name={"ammenetieValue"+i}  id={"ammenetieValue"+i} value={this.props.ammenetieValuePair[i].ammenetieValue.Value}/>
                

                <button onClick={()=>this.callThis("ammenetieValuePair",i,{id})}>
                Delete
            </button>
            </div>
                );
        }

    }
            generateFrequentlyAskedQuestions=()=>{
                for(let i=0;i<this.props.frequentlyAskedQuestions.length;i++){
                   
                    let id="frequentlyAskedQuestionsGroup"+i;
                     this.state.frequentlyAskedQuestions.add
                    (    <div if={"frequentlyAskedQuestionsGroup"+i}>
                                
                            <label for={"question"+i}>question:</label>
                            <input type="text" name={"question"+i} id={"question"+i} value={this.props.frequentlyAskedQuestions[i].question} />
                            <label for={"answer"+i}>answer:</label>
                            <input type="text" name={"answer"+i} id={"answer"+i} value={this.props.frequentlyAskedQuestions[i].answer} />
    
                            <button onClick={()=>this.callThis("frequentlyAskedQuestions",this.state.hoursOfOperation.length+1,{id})}>
                                Delete
                            </button>
                        </div>);
                    
                }
    
            }
    generateHighlightValuePairs=()=>{
    
        for(let i=0;i<this.props.highlightValuePair.length;i++){
                
                let id="highlightGroup"+i;
                this.state.highlightValuePair.add
                (<div id={id}>
                        
                                
                <label for={"highlightName"+i}>highlight Name:</label>
                <input type="text" name={"highlightName"+i}  id={"highlightName"+i} value={this.props.highlightValuePair[i].highlight.Value} />
                <label for={"highlightValue"+i}>highlight Value:</label>
                <input type="text" name={"highlightValue"+i}  id={"highlightValue"+i} value={this.props.highlightValuePair[i].highlightValue.Value}/>
                

                <button onClick={()=>this.callThis("highlightValuePair",i,{id})}>
                Delete
            </button>
            </div>
                );
        }

    }
 
   
        
         generateFeatureValuePair=()=>{ 
        for(let i=0;i<this.props.featureValuePair.length;i++){
                
                let id="featureGroup"+i;
                this.state.featureValuePair.add
                (<div id={id}>
                        
                                
                <label for={"featureName"+i}>feature Name:</label>
                <input type="text" name={"featureName"+i}  id={"featureName"+i} value={this.props.featureValuePair[i].feature.Value} />
                <label for={"featureValue"+i}>feature Value:</label>
                <input type="text" name={"featureValue"+i}  id={"featureValue"+i} value={this.props.featureValuePair[i].featureValue.Value}/>
                

                <button onClick={()=>this.callThis("featureValuePair",i,{id})}>
                Delete
            </button>
            </div>
                );
        }

    }
    generatePropertyValuePair=()=>{
        for(let i=0;i<this.props.propertyValuePair.length;i++){
                
                let id="propertyGroup"+i;
                this.state.propertyValuePair.add
                (<div id={id}>
                        
                                
                <label for={"propertyName"+i}>property Name:</label>
                <input type="text" name={"propertyName"+i}  id={"propertyName"+i} value={this.props.propertyValuePair[i].property.Value} />
                <label for={"propertyValue"+i}>property Value:</label>
                <input type="text" name={"propertyValue"+i}  id={"propertyValue"+i} value={this.props.propertyValuePair[i].propertyValue.Value}/>
                

                <button onClick={()=>this.callThis("propertyValuePair",i,{id})}>
                Delete
            </button>
            </div>
                );
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
        //for insertion
        insertRooms=()=>{
            let i=this.staterooms.length+1;
            let id="roomsGroup"+i;
            this.state.rooms.add
            (<div id={id}>

                <label for="width">width:</label>
                <input type="number" name={"width"+i} id={"width"+i} />
                <div>{this.props.roomError[i].widthError}</div>

                <label for="length">length:</label>
                <input type="number" name={"length"+i} id={"length"+i} />
                <div>{this.props.roomError[i].lengthError}</div>

                <label for="location">location:</label>
                <input type="text" name={"location"+i} id={"location"+i}  />
               
                <button onClick={()=>this.callThis("rooms",i,{id})}>
                                                          Delete
                                                      </button></div>);
            
           }
           insertAmmenetieValuePair=()=>{
            let i=this.state.ammenetieValuePair.length+1;
            let id="ammenetieGroup"+i;
            this.state.ammenetieValuePair.add
            (
                <div id={id}>
                
                       
                <label for={"ammenetieName"+i}>ammenetie Name:</label>
                <input type="text" name={"ammenetieName"+i}  id={"ammenetieName"+i}  />
                <label for={"ammenetieValue"+i}>ammenetie Value:</label>
                <input type="text" name={"ammenetieValue"+i}  id={"ammenetieValue"+i} />
                <div>{this.props.ammenetieValueErrors[i]}</div>

                <button onClick={()=>this.callThis("ammenetieValuePair",i,{id})}>
                Delete
            </button>
            </div>
            );
            }
            insertHighlightValuePairs=()=>{
                        

                let i=this.state.highlightValuePair.length+1;
                let id="highlightGroup"+i;
                this.state.highlightValuePair.add
                (
                    <div id={id}>
                    
                        
                        <label for={"highlightName"+i}>highlight Name:</label>
                        <input type="text" name={"highlightName"+i}  id={"highlightName"+i}  />
                        <label for={"highlightValue"+i}>highlight Value:</label>
                        <input type="text" name={"highlightValue"+i}  id={"highlightValue"+i} />
                        <div>{this.props.highlightValueErrors[i]}</div>

                        <button onClick={()=>this.callThis("highlightValuePair",i,{id})}>
                            Delete
                        </button>
                    </div>
            );


            }
            insertFrequentlyAskedQuestions=()=>{

                let i=this.state.frequentlyAskedQuestions.length+1;
                let id="frequentlyAskedQuestionsGroup"+i;
                this.state.frequentlyAskedQuestions.add(
                    <div id={"frequentlyAskedQuestionsGroup"+i}>
                        
                        <label for={"question"+i}>question:</label>
                        <input type="text" name={"question"+i} id={"question"+i} />
                        <label for={"answer"+i}>answer:</label>
                        <input type="text" name={"answer"+i} id={"answer"+i} />

                        <button onClick={()=>this.callThis("frequentlyAskedQuestions",this.state.hoursOfOperation.length+1,{id})}>
                            Delete
                        </button>
                    </div>

                    
                );




            }
            insertFeatureValuePairs=()=>{
                        

                let i=this.state.featureValuePair.length+1;
                let id="featureGroup"+i;
                this.state.featureValuePair.add
                (
                    <div id={id}>
                        
                                
                    <label for={"featureName"+i}>feature Name:</label>
                    <input type="text" name={"featureName"+i}  id={"featureName"+i} value={this.props.featureValuePair[i].feature.Value} />
                    <label for={"featureValue"+i}>feature Value:</label>
                    <input type="text" name={"featureValue"+i}  id={"featureValue"+i} value={this.props.featureValuePair[i].featureValue.Value}/>
                    
    
                    <button onClick={()=>this.callThis("featureValuePair",i,{id})}>
                    Delete
                </button>
                </div>
                 );


            }
            insertPropertyValuePairs=()=>{
                        

                let i=this.state.propertyValuePair.length+1;
                let id="propertyGroup"+i;
                this.state.propertyValuePair.add
                (
                    <div id={id}>
                        
                                
                <label for={"propertyName"+i}>property Name:</label>
                <input type="text" name={"propertyName"+i}  id={"propertyName"+i} value={this.props.propertyValuePair[i].property.Value} />
                <label for={"propertyValue"+i}>property Value:</label>
                <input type="text" name={"propertyValue"+i}  id={"propertyValue"+i} value={this.props.propertyValuePair[i].propertyValue.Value}/>
                

                <button onClick={()=>this.callThis("propertyValuePair",i,{id})}>
                Delete
            </button>
            </div>
             );


            }
        
       
 
      
        
      
       
        
        //for removal
        removeRoom=(i)=>{
            let roomList=this.staterooms;
            roomList.splice(i,1);
            this.setState({rooms: roomList});
     }
        removeAmmenetieValuePair=(i)=>{
              let ammenetieValuePairs=this.state.ammenetieValuePair;
              ammenetieValuePairs.splice(i,1);
              this.setState({ammenetieValuePair: ammenetieValuePairs});
       }
            removePropertyValuePair=(i)=>{
                     let propertyValuePairs=this.state.propertyValuePair;
                     propertyValuePairs.splice(i,1);
                     this.setState({propertyValuePair: propertyValuePairs});
              }
                   removeFeatureValuePair=(i)=>{
                            let featureValuePairs=this.state.featureValuePair;
                            featureValuePairs.splice(i,1);
                            this.setState({featureValuePair: featureValuePairs});
                     }
       removeHighlightValuePairs=(i)=>{
           let highlightValuePairs=this.state.highlightValuePair;
            highlightValuePairs.splice(i,1);
            this.setState({highlightValuePair: highlightValuePairs});
       }
      
       removeFrequentlyAskedQuestions=(i)=>{
                let frequentlyAskedQuestionsList=this.state.frequentlyAskedQuestions;
               frequentlyAskedQuestionsList.splice(i,1);
               this.setState({frequentlyAskedQuestions: frequentlyAskedQuestionsList});
   
           }
        removeImage=(i)=>{
                let imagesList=this.state.images;
               imagesList.splice(i,1);
               this.setState({images: imagesList});
        }
        removeThis=(className,i,id)=>{
            if("ammenetieValuePair"==={className}){this.removeAmmenetieValuePair(i);}
            else if("highlightValuePair"==={className}){this.removeHighlightValuePairs(i);}
             else if("featureValuePair"==={className}){this.removeFeatureValuePairs(i);}
              else if("propertyValuePair"==={className}){this.removePropertyValuePairs(i);}
            else if("frequentlyAskedQuestions"==={className}){this.removeFrequentlyAskedQuestions(i);}
            else if("images"==={className}){this.removeImage(i);}
            else if("rooms"==={className}){this.removeRoom(i);}
            document.getElementById(id).remove();
        }
        callThis=(className,i)=>{
            this.removeThis(className,i);
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
        
        popLastImage=()=>{
            let imageList=this.state.images;
            imageList.pop();
            this.setState({images: imageList});
            
        }

    render()
    {
        this.generationFunction();
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
              activeSuggestion,
              filteredSuggestions,
              showSuggestions,
              userInput
            }
          } = this;
      
          let suggestionsListComponent;
      
          if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
              suggestionsListComponent = (
                <ul className="suggestions">
                  {filteredSuggestions.map((suggestion, index) => {
                    let className;
      
                    // Flag the active suggestion with a class
                    if (index === activeSuggestion) {
                      className = "suggestion-active";
                    }
      
                    return (
                      <li className={className} key={suggestion} onClick={onClick}>
                        {suggestion}
                      </li>
                    );
                  })}
                </ul>
              );
            } else {
              suggestionsListComponent = (
                <div className="no-suggestions">
                  <em>No suggestions, you're on your own!</em>
                </div>
              );
            }
          }

      

        var panel1 = classNames({
          'd-block': this.state.panel1,
          'd-none': !this.state.panel1
        });
        var panel2 = classNames({
          'd-block':this.state.panel2,
          'd-none': !this.state.panel2
        });
        let imageUpload;
        if(this.props.isUpdate==true){
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
                            
                        </div>
                        <div>
                                <div>{this.props.realtorName}</div>
                                <div>{this.props.realtorContact}</div>
                        </div>
                    </div>);
        }
        else{
        return (<div>
        <form action="/home">
                    <div id="1" className={panel1}>

                    <label for="postalCode">postal Code:</label>
                    <input type="text" name="postalCode" id="postalCode" value={this.props.commercial.building.postalCode} />
                    <div>{this.props.postalCodeError}</div>
                    
                    <label for="price">price:</label>
                    <input type="number" name="price" id="price" value={this.props.commercial.building.price} />
                    <div>{this.props.priceError}</div>
                    
                    <label for="lotSize">lot Size:</label>
                    <input type="number" name="lotSize" id="lotSize" value={this.props.commercial.building.lotSize} />
                    <div>{this.props.lotSizeError}</div>
                    
                    <label for="typeOfBuilding">type Of Building:</label>
                    <input type="text" name="typeOfBuilding" id="typeOfBuilding" value={this.props.commercial.building.typeOfBuilding} />
                    <div>{this.props.typeOfBuildingError}</div>
                    
                    <label for="typeOfSubBuilding">type Of Sub Building:</label>
                    <input type="text" name="typeOfSubBuilding" id="typeOfSubBuilding" value={this.props.commercial.building.typeOfSubBuilding} />
                    <div>{this.props.typeOfSubBuildingError}</div>
                    
                    <label for="listingDate">listing Date:</label>
                    <input type="date" name="listingDate" id="listingDate" value={this.props.commercial.building.listingDate} />
                    <div>{this.props.listingDateError}</div>
                    
                    <label for="address">address:</label>
                    <input type="text" name="address" id="address" value={this.props.commercial.building.address} />
                    <div>{this.props.addressError}</div>
                    
                    <label for="yearBuild">year Build:</label>
                    <input type="date" name="yearBuild" id="yearBuild" value={this.props.commercial.building.yearBuild} />
                    <div>{this.props.yearBuildError}</div>
                    
                    
                    <label for="percentileOfPriceDrop">percentile Of Price Drop:</label>
                    <input type="number" name="percentileOfPriceDrop" id="percentileOfPriceDrop" value={this.props.commercial.building.percentileOfPriceDrop} />
                    <div>{this.props.percentileOfPriceDropError}</div>
                      <label for="description">description:</label>
                    <input type="text" name="description" id="description" value={this.props.commercial.building.description} />
                    <div>{this.props.descriptionError}</div>
                  
                    
                    <input type="checkbox" name="isConstruction" id="isConstruction" value={this.props.commercial.building.isConstruction} /><label for="isConstruction">under Construction:</label>
                   
                     
                        {this.state.frequentlyAskedQuestions}
                        <button onClick={this.insertFrequentlyAskedQuestions}>
                                insert question
                            </button>
                        {this.state.ammenetieValuePair}
                        <button onClick={this.insertAmmenetieValuePair}>
                                insert ammenetie
                            </button>
                        {this.state.highlightValuePair}
                        <button onClick={this.insertHighlightValuePairs}>
                                insert highlight
                            </button>
                            <label for="location">location:</label>
                    <Fragment>
                        <input
                        type="text"
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput}
                        />
                        {suggestionsListComponent}
                    </Fragment>
                    <div>{this.props.locationError}</div>
                    </div>
                    <div id="2" className={panel2}>
                    <label for="numOfBeds">num Of Beds:</label>
                    <input type="number" name="numOfBeds" id="numOfBeds" value={this.props.home.numOfBeds} />
                    <div>{this.props.Error}</div>
                    <label for="numOfBats">num Of Bats:</label>
                    <input type="number" name="numOfBats" id="numOfBats" value={this.props.home.numOfBats} />
                    <div>{this.props.numOfBatsError}</div>
                    <label for="hideSale">hide Sale:</label>
                    <input type="date" name="hideSale" id="hideSale" value={this.props.home.hideSale} />
                    <div>{this.props.hideSaleError}</div>
                    <label for="dateOfOpenHouse">dateOfOpenHouse:</label>
                    <input type="date" name="dateOfOpenHouse" id="dateOfOpenHouse" value={this.props.home.dateOfOpenHouse} />
                    <div>{this.props.dateOfOpenHouseError}</div>
                    <label for="squareFeet">squareFeet:</label>
                    <input type="number" name="squareFeet" id="squareFeet" value={this.props.home.squareFeet} />
                    <div>{this.props.squareFeetError}</div>
                    <label for="overview">overview:</label>
                    <input type="text" name="overview" id="overview" value={this.props.home.overview} />
                    <div>{this.props.overviewError}</div>
                    <label for="rentingPolicy">rentingPolicy:</label>
                    <input type="text" name="rentingPolicy" id="rentingPolicy" value={this.props.home.rentingPolicy} />
                    <div>{this.props.rentingPolicyError}</div>			

                        {this.state.rooms}
                       <button onClick={this.insertRooms}>
                               insert room
                           </button>
                           {this.state.propertyValuePair}
                        <button onClick={this.insertPropertyValuePair}>
                                insert property
                            </button>
                        {this.state.featureValuePair}
                        <button onClick={this.insertFeatureValuePairs}>
                                insert feature
                            </button>
                    </div>
                    <div>
                        <fieldset>
                            <input type="radio" id="opt1" name="opt" value="1"   onChange={this.handleChange} checked></input>
                            <label for="opt">option 1</label>

                            <input type="radio" id="opt2" name="opt" value="2"  onChange={this.handleChange} ></input>
                            <label for="opt">option 2</label>
                        </fieldset>
                    </div>
                    <div>
                        <div>{this.props.realtorName}</div>
                        <div>{this.props.realtorContact}</div>
                    </div>
                    <Image images={this.state.images} />
                    {imageUpload}

                    <button onClick={this.popLastImage}>
                        delete last image from gallery.
                    </button>
                      <input type="submit" value="submit" />
                    </form>
                </div>);
        }



             }

            
  
}

// Exporting the component
export default HomeM;