import React, {Component,Fragment} from 'react';
import PropTypes from "prop-types";
import Image from "./../imageComponents/imageComponent"

var classNames = require('classnames');
class Commercial extends Component {
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
                  attachmentValuePair:[],
                  highlightValuePair:[],
                  serviceValuePair:[],
                  workspaceValuePair:[],
                  frequentlyAskedQuestions:[],
                  hoursOfOperation:[],
                  availableSpaces:[],
                  images:this.props.images,
                  i:0,
                  imageUpload:[],
                  // The active selection's index
                activeSuggestion: 0,
                // The suggestions that match the user's input
                filteredSuggestions: [],
                // Whether or not the suggestion list is shown
                showSuggestions: false,
                // What the user has entered
                userInput: "",
                buildingSpaceError:"",
                locationError:"",
                descriptionError:"",
                percentileOfPriceDropError:"",
                yearBuildError:"",
                addressError:"",
                postalCodeError:"",
                listingDateError:"",
                typeOfSubBuildingError:"",
                typeOfBuildingError:"",
                lotSizeError:"",
                priceError:"",
                availableSpaceError:[],
                dayError:[]
                }
                this.handleClick = this.handleClick.bind(this);
                
                this.generateAvailableSpaces= this.generateAvailableSpaces.bind(this);
                this.generateServiceValuePair= this.generateServiceValuePair.bind(this);
                this.generateAmmenetieValuePair= this.generateAmmenetieValuePair.bind(this);
                this.generateHighlightValuePairs= this.generateHighlightValuePairs.bind(this);
                this.generateServiceValuePairs= this.generateServiceValuePairs.bind(this);
                this.generateWorkspaceValuePairs= this.generateWorkspaceValuePairs.bind(this);
                this.generateAttachmentValuePairs= this.generateAttachmentValuePairs.bind(this);
                this.generateFrequentlyAskedQuestions= this.generateFrequentlyAskedQuestions.bind(this);
                this.generateHoursOfOperation= this.generateHoursOfOperation.bind(this);
                this.generationFunction= this.generationFunction.bind(this);
                this.insertAmmenetieValuePair= this.insertAmmenetieValuePair.bind(this);
                this.insertServiceValuePair= this.insertServiceValuePair.bind(this);
                this.insertServiceValuePairs= this.insertServiceValuePairs.bind(this);
                this.insertWorkspaceValuePairs= this.insertWorkspaceValuePairs.bind(this);
                this.insertAttachmentValuePairs= this.insertAttachmentValuePairs.bind(this);
                this.insertFrequentlyAskedQuestions= this.insertFrequentlyAskedQuestions.bind(this);
                this.insertHighlightValuePairs= this.insertHighlightValuePairs.bind(this);
                this.insertHoursOfOperation= this.insertHoursOfOperation.bind(this);
                this.popLastImage= this.popLastImage.bind(this);
                this.handleChange= this.handleChange.bind(this);
                this.removeThis= this.removeThis.bind(this);
                this.removeImage= this.removeImage.bind(this);
                this.removeHoursOfOperation= this.removeHoursOfOperation.bind(this);
                this.removeFrequentlyAskedQuestions= this.removeFrequentlyAskedQuestions.bind(this);
                this.removeAttachmentValuePairs=this.removeAttachmentValuePairs.bind(this);
                this.removeWorkspaceValuePairs=this.removeWorkspaceValuePairs.bind(this);
                this.removeServiceValuePairs=this.removeServiceValuePairs.bind(this);
                this.removeHighlightValuePairs=this.removeHighlightValuePairs.bind(this);
                this.removeServiceValuePairs=this.removeServiceValuePairs.bind(this);
                this.removeAvailableSpace=this.removeAvailableSpace.bind(this);
                this.removeAmmenetieValuePair=this.removeAmmenetieValuePair.bind(this);
                this.insertAvailableSpace=this.insertAvailableSpace.bind(this);

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
    
    generateAvailableSpaces=()=>{
        for(let i=0;i<this.props.availableSpace.length;i++){
                   let availableSpace=this.props.availableSpaces[i];
                   let id="availableSpaceGroup"+i;
                   this.state.availableSpaces.add
                   (<div id={id}>
                                            
                                            <label for={"spaceType"+i}>space Type:</label>
                                            <input type="text" name={"spaceType"+i} id={"spaceType"+i} value={availableSpace.floor} />
                                            
                                            <label for={"floor"+i}>floor:</label>
                                            <input type="number" name={"floor"+i} id={"floor"+i} value={availableSpace.floor} />
                                            <div>{this.state.availableSpaceError[i].floorError}</div>
                                            <label for={"leaseRate"+i}>lease Rate:</label>
                                            <input type="number" name={"leaseRate"+i} id={"leaseRate"+i} value={availableSpace.leaseRate} />
                                            
                                            <label for={"divisibleSpace"+i}>divisible Space:</label>
                                            <input type="number" name={"divisibleSpace"+i} id={"divisibleSpace"+i} value={availableSpace.divisibleSpace} />
                                            <div>{this.state.availableSpaceError[i].divisibleSpaceError}</div>
                                            <label for={"totalSpaceAvailable"+i}>total Space Available:</label>
                                            <input type="number" name={"totalSpaceAvailable"+i} id={"totalSpaceAvailable"+i} value={availableSpace.totalSpaceAvailable} />
                                            <div>{this.state.availableSpaceError[i].totalSpaceAvailableError}</div>
                                            <label for={"dateOfAvailability"+i}>date Of Availability:</label>
                                            <input type="date" name={"dateOfAvailability"+i} id={"dateOfAvailability"+i} value={availableSpace.dateOfAvailability} />

                                            <label for={"leaseType"+i}>lease Type:</label>
                                            <input type="number" name={"leaseType"+i} id={"leaseType"+i} value={availableSpace.leaseType} />

                                            <label for={"title"+i}>title:</label>
                                            <input type="text" name={"title"+i} id={"title"+i} value={availableSpace.title} />

                                            <button onClick={()=>this.callThis("availableSpaces",i,{id})}>
                                                Delete
                                            </button>
                            </div>   
                   );
        }

   }
 
     generateServiceValuePair=()=>{
              for(let i=0;i<this.props.serviceValuePair.length;i++){
                     
                         let id="serviceGroup"+i;
                         this.state.serviceValuePair.add
                         (<div id={id}>
                            
                                   
                         <label for={"serviceName"+i}>service Name:</label>
                         <input type="text" name={"serviceName"+i}  id={"serviceName"+i} value={this.props.serviceValuePair[i].service.Value} />
                         <label for={"serviceValue"+i}>service Value:</label>
                         <input type="text" name={"serviceValue"+i}  id={"serviceValue"+i} value={this.props.serviceValuePair[i].serviceValue.Value}/>
                       

                         <button onClick={()=>this.callThis("serviceValuePair",i,{id})}>
                         Delete
                     </button>
                     </div>
                         );
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
    generateServiceValuePairs=()=>{
        for(let i=0;i<this.props.serviceValuePair.length;i++){
                 let id="serviceGroup"+i;
                    this.state.serviceValuePair.add
                    (<div id={"serviceGroup"+i}>
                            
                                   
                    <label for={"serviceName"+i}>service Name:</label>
                    <input type="text" name={"serviceName"+i}  id={"serviceName"+i} value={this.props.serviceValuePair[i].service.Value} />
                    <label for={"serviceValue"+i}>service Value:</label>
                    <input type="text" name={"serviceValue"+i}  id={"serviceValue"+i} value={this.props.serviceValuePair[i].serviceValue.Value}/>
                   

                    <button onClick={()=>this.callThis("serviceValuePair",i,{id})}>
                    Delete
                </button>
                </div>
                    );
        }

    }
    generateWorkspaceValuePairs=()=>{
         for(let i=0;i<this.props.workspaceValuePair.length;i++){
                
                    let id="workspaceGroup"+i;
                    this.state.workspaceValuePair.add
                    (
                        <div id={id}>
                            
                                   
                        <label for={"workspaceName"+i}>workspace Name:</label>
                        <input type="text" name={"workspaceName"+i}  id={"workspaceName"+i} value={this.props.workspaceValuePair[i].workspace.Value} />
                        <label for={"workspaceValue"+i}>workspace Value:</label>
                        <input type="text" name={"workspaceValue"+i}  id={"workspaceValue"+i} value={this.props.workspaceValuePair[i].workspaceValue.Value}/>
                  

                        <button onClick={()=>this.callThis("workspaceValuePair",i,{id})}>
                        Delete
                    </button>
                    </div>
                    );
         }

    }
    generateAttachmentValuePairs=()=>{
            for(let i=0;i<this.props.attachmentValuePair.length;i++){
                        
                        let id="attachmentGroup"+i;
                        this.state.attachmentValuePair.add
                        (
                            <div id={id}>
                            
                                   
                                <label for={"attachmentName"+i}>attachment Name:</label>
                                <input type="text" name={"attachmentName"+i}  id={"attachmentName"+i} value={this.props.attachmentValuePair[i].attachment.Value} />
                                <label for={"attachmentValue"+i}>attachment Value:</label>
                                <input type="text" name={"attachmentValue"+i}  id={"attachmentValue"+i} value={this.props.attachmentValuePair[i].attachmentValue.Value}/>
                              
                                <button onClick={()=>this.callThis("attachmentValuePair",i,{id})}>
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
                (    <div id={"frequentlyAskedQuestionsGroup"+i}>
                            
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
    generateHoursOfOperation=()=>{
       
            for(let i=0;i<this.props.hoursOfOperation.length;i++){
                let hoursOfOperation=this.props.hoursOfOperation;
                let id="hoursOfOperationGroup"+i;
                this.state.hoursOfOperation.add(
                    <div  id={id}>
                       
                            <label for={"day"+i}>day:</label>
                            <input type="text" name={"day"+i}  id={"day"+i} value={hoursOfOperation.day} />
                            <div>{this.props.dayError[i]}</div>
                            <label for={"timeTable"+i}>time Table:</label>
                            <input type="text" name={"{timeTable"+i}  id={"timeTable"+i} value={hoursOfOperation.timeTable} />

                        <button onClick={()=>this.callThis("hoursOfOperation",i,{id})}>
                                Delete
                            </button>
                   </div>     
                );}
        }
        generationFunction=()=>{
            this.generateAmmenetieValuePair();
            this.generateAttachmentValuePairs();
            this.generateFrequentlyAskedQuestions();
            this.generateHighlightValuePairs();
            this.generateHoursOfOperation();
            this.generateServiceValuePairs();
            this.generateWorkspaceValuePairs();
            this.generateAvailableSpaces();
        }
        //for insertion
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
                           
                            <button onClick={()=>this.callThis("ammenetieValuePair",i,{id})}>
                            Delete
                        </button>
                        </div>
                        );
        }
        
         insertServiceValuePair=()=>{
                                let i=this.state.serviceValuePair.length+1;
                                let id="serviceGroup"+i;
                                this.state.serviceValuePair.add
                                (
                                    

                            <div id={id}>
                            
                                   
                            <label for={"serviceName"+i}>service Name:</label>
                            <input type="text" name={"serviceName"+i}  id={"serviceName"+i} />
                            <label for={"serviceValue"+i}>service Value:</label>
                            <input type="text" name={"serviceValue"+i}  id={"serviceValue"+i} />
                           
                            <button onClick={()=>this.callThis("serviceValuePair",i,{id})}>
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
                                
                                <button onClick={()=>this.callThis("highlightValuePair",i,{id})}>
                                    Delete
                                </button>
                            </div>
                       );


        }
        insertServiceValuePairs=()=>{

                        let i=this.state.serviceValuePair.length+1;
                        let id="serviceGroup"+i;
                        this.state.serviceValuePair.add
                        (   <div id={id}>
                            
                                   
                        <label for={"serviceName"+i}>service Name:</label>
                        <input type="text" name={"serviceName"+i}  id={"serviceName"+i}  />
                        <label for={"serviceValue"+i}>service Value:</label>
                        <input type="text" name={"serviceValue"+i}  id={"serviceValue"+i} />
                      
    
                        <button onClick={()=>this.callThis("serviceValuePair",i,{id})}>
                        Delete
                    </button>
                    </div>
                            );


        }
        insertWorkspaceValuePairs=()=>{

                        let i=this.state.workspaceValuePair.length+1;
                        let id="workspaceGroup"+i;
                        this.state.workspaceValuePair.add
                        (  <div id={id}>
                            
                                   
                        <label for={"workspaceName"+i}>workspace Name:</label>
                        <input type="text" name={"workspaceName"+i}  id={"workspaceName"+i}  />
                        <label for={"workspaceValue"+i}>workspace Value:</label>
                        <input type="text" name={"workspaceValue"+i}  id={"workspaceValue"+i} />
                      

                        <button onClick={()=>this.callThis("workspaceValuePair",i,{id})}>
                        Delete
                    </button>
                    </div>
                        );


        }
        insertAttachmentValuePairs=()=>{

                            let i=this.state.attachmentValuePair.length+1;
                            let id="attachmentGroup"+i;
                            this.state.attachmentValuePair.add
                            (<div id={id}>
                            
                                   
                                <label for={"attachmentName"+i}>attachment Name:</label>
                                <input type="text" name={"attachmentName"+i}  id={"attachmentName"+i}  />
                                <label for={"attachmentValue"+i}>attachment Value:</label>
                                <input type="text" name={"attachmentValue"+i}  id={"attachmentValue"+i} />
                              

                                <button onClick={()=>this.callThis("attachmentValuePair",i,{id})}>
                                Delete
                            </button>
                            </div>
                            );
         }
        insertFrequentlyAskedQuestions=()=>{

                    let i=this.state.frequentlyAskedQuestions.length+1;
                    let id="frequentlyAskedQuestionGroup"+i;
                    this.state.frequentlyAskedQuestions.add(
                        <div id={"frequentlyAskedQuestionGroup"+i}>
                            
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
        insertHoursOfOperation=()=>{
                    let i="hoursOfOperation"+this.state.hoursOfOperation.length+1;
                 let id="hoursOfOperationGroup"+i;
                    
                   
                    
                    this.state.hoursOfOperation.add(
                        <div>
                              <div  id={id}>
                            
                            <label for={"day"+i}>day:</label>
                            <input type="text" name={"day"+i}  id={"day"+i}  />
                            <div>{this.state.dayError[i]}</div>
                            <label for={"timeTable"+i}>time Table:</label>
                            <input type="text" name={"timeTable"+i}  />

                                <button onClick={()=>this.callThis("hoursOfOperation",i,{id})}>
                                        Delete
                                    </button>
                                </div>     
                              
                        </div>     
                    );
            }
            insertAvailableSpace=()=>{
                let i=this.state.availableSpaces.length+1;
                let id="availableSpaceGroup"+i;
                this.state.availableSpaces.add
                (
                    <div id={"availableSpaceGroup"+i}>
                                            
                                <label for={"spaceType"+i}>space Type:</label>
                                <input type="text" name={"spaceType"+i} id={"spaceType"+i} />
                                
                                <label for={"floor"+i}>floor:</label>
                                <input type="number" name={"floor"+i} id={"floor"+i} />
                                
                                <div>{this.state.availableSpaceError[i].floorError}</div>
                                <label for={"leaseRate"+i}>lease Rate:</label>
                                <input type="number" name={"leaseRate"+i} id={"leaseRate"+i}  />
                                
                                <label for={"divisibleSpace"+i}>divisible Space:</label>
                                <input type="number" name={"divisibleSpace"+i} id={"divisibleSpace"+i} />
                                
                                <div>{this.state.availableSpaceError[i].divisibleSpaceError}</div>
                                <label for={"totalSpaceAvailable"+i}>total Space Available:</label>
                                <input type="number" name={"totalSpaceAvailable"+i} id={"totalSpaceAvailable"+i}  />
                               
                                <div>{this.state.availableSpaceError[i].totalSpaceAvailableError}</div>
                                <label for={"dateOfAvailability"+i}>date Of Availability:</label>
                                <input type="date" name={"dateOfAvailability"+i} id={"dateOfAvailability"+i}  />

                                <label for={"leaseType"+i}>lease Type:</label>
                                <input type="number" name={"leaseType"+i} id={"leaseType"+i}/>

                                <label for={"title"+i}>title:</label>
                                <input type="text" name={"title"+i} id={"title"+i}  />

                                <button onClick={()=>this.callThis("availableSpaces",i,{id})}>
                                    Delete
                                </button>
                </div>     
                );
            }
        
        //for removal
        removeAmmenetieValuePair=(i)=>{
              let ammenetieValuePairs=this.state.ammenetieValuePair;
              ammenetieValuePairs.splice(i,1);
              document.getElementById("ammenetieGroup"+i).remove();
              this.setState({ammenetieValuePair: ammenetieValuePairs});

       }
       removeAvailableSpace=(i)=>{
            let availableSpacesList=this.state.availableSpaces;
            availableSpacesList.splice(i,1);
            document.getElementById("availableSpaceGroup"+i).remove();
            this.setState({availableSpaces: availableSpacesList});

        }
         
       removeHighlightValuePairs=(i)=>{
           let highlightValuePairs=this.state.highlightValuePair;
            highlightValuePairs.splice(i,1);
            document.getElementById("highlightGroup"+i).remove();
            this.setState({highlightValuePair: highlightValuePairs});
       }
       removeServiceValuePairs=(i)=>{
            let serviceValuePairs=this.state.serviceValuePair;
           serviceValuePairs.splice(i,1);
           document.getElementById("serviceGroup"+i).remove();
           this.setState({serviceValuePair: serviceValuePairs});
       }
       removeWorkspaceValuePairs=(i)=>{
            let workspaceValuePairs=this.state.workspaceValuePair;
           workspaceValuePairs.splice(i,1);
           document.getElementById("workspaceGroup"+i).remove();
           this.setState({workspaceValuePair: workspaceValuePairs});
       }
       removeAttachmentValuePairs=(i)=>{
            let attachmentValuePairs=this.state.attachmentValuePair;
             attachmentValuePairs.splice(i,1);
             document.getElementById("attachmentGroup"+i).remove();
             this.setState({attachmentValuePair: attachmentValuePairs});
           }
       removeFrequentlyAskedQuestions=(i)=>{
                let frequentlyAskedQuestionsList=this.state.frequentlyAskedQuestions;
               frequentlyAskedQuestionsList.splice(i,1);
               document.getElementById("frequentlyAskedQuestionGroup"+i).remove();
               this.setState({frequentlyAskedQuestions: frequentlyAskedQuestionsList});
   
           }
       removeHoursOfOperation=(i)=>{
                let hoursOfOperations=this.state.hoursOfOperation;
                hoursOfOperations.splice(i,1);
                document.getElementById("hoursOfOperationGroup"+i).remove();
                this.setState({hoursOfOperation: hoursOfOperations});
           }
        removeImage=(i)=>{
                let imagesList=this.state.images;
               imagesList.splice(i,1);
            
               this.setState({images: imagesList});
        }
   
        removeThis=(className,i,id)=>{
            if("ammenetieValuePair"==={className}){this.removeAmmenetieValuePair(i);}
            else if("highlightValuePair"==={className}){this.removeHighlightValuePairs(i);}
            else if("workspaceValuePair"==={className}){this.removeWorkspaceValuePairs(i);}
            else if("attachmentValuePair"==={className}){this.removeAttachmentValuePairs(i);}
            else if("frequentlyAskedQuestions"==={className}){this.removeFrequentlyAskedQuestions(i);}
            else if("hoursOfOperation"==={className}){this.removeHoursOfOperation(i);}
            else if("serviceValuePair"==={className}){this.removeServiceValuePair(i);}
            else if("availableSpaces"==={className}){this.removeAvailableSpaces(i);}
            else if("images"==={className}){this.removeImage(i);}
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
          'd-block':this.state.panel1,
          'd-none': !this.state.panel1
        });
        var panel2 = classNames({
          'd-block':this.state.panel2,
          'd-none': !this.state.panel2
        });
        
        let location;
        
        if(this.props.commercial.area.value){location=this.props.commercial.building.area.value}
        else{location=this.props.commercial.building.neighborhood.value}
        return (<div>
        <form action="/commercial">
                    <div id="1" className={panel1}>

                    <label for="postalCode">postal Code:</label>
                    <input type="text" name="postalCode" id="postalCode" value={this.props.commercial.building.postalCode} />
                    <div>{this.state.postalCodeError}</div>
                    
                    <label for="price">price:</label>
                    <input type="number" name="price" id="price" value={this.props.commercial.building.price} />
                    <div>{this.state.priceError}</div>
                    
                    <label for="lotSize">lot Size:</label>
                    <input type="number" name="lotSize" id="lotSize" value={this.props.commercial.building.lotSize} />
                    <div>{this.state.lotSizeError}</div>
                    
                    <label for="typeOfBuilding">type Of Building:</label>
                    <input type="text" name="typeOfBuilding" id="typeOfBuilding" value={this.props.commercial.building.typeOfBuilding} />
                    <div>{this.state.typeOfBuildingError}</div>
                    
                    <label for="typeOfSubBuilding">type Of Sub Building:</label>
                    <input type="text" name="typeOfSubBuilding" id="typeOfSubBuilding" value={this.props.commercial.building.typeOfSubBuilding} />
                    <div>{this.state.typeOfSubBuildingError}</div>
                    
                    <label for="listingDate">listing Date:</label>
                    <input type="date" name="listingDate" id="listingDate" value={this.props.commercial.building.listingDate} />
                    <div>{this.state.listingDateError}</div>
                    
                    <label for="address">address:</label>
                    <input type="text" name="address" id="address" value={this.props.commercial.building.address} />
                    <div>{this.state.addressError}</div>
                    
                    <label for="yearBuild">year Build:</label>
                    <input type="date" name="yearBuild" id="yearBuild" value={this.props.commercial.building.yearBuild} />
                    <div>{this.state.yearBuildError}</div>
                    
                    
                    <label for="percentileOfPriceDrop">percentile Of Price Drop:</label>
                    <input type="number" name="percentileOfPriceDrop" id="percentileOfPriceDrop" value={this.props.commercial.building.percentileOfPriceDrop} />
                    <div>{this.state.percentileOfPriceDropError}</div>
                    
                    <label for="description">description:</label>
                    <input type="text" name="description" id="description" value={this.props.commercial.building.description} />
                    <div>{this.state.descriptionError}</div>
                    
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
                    <div>{this.state.locationError}</div>
                    </div>
                    <div id="2" className={panel2}>
                   
                    <label for="buildingSpace">building Space:</label>
                    <input type="text" name="buildingSpace" id="buildingSpace" value={this.props.commercial.buildingSpace} />
                    <div>{this.state.buildingSpaceError}</div>
                    
                    <label for="buildingSpace">building Space:</label>
                    <input type="number" name="buildingSpace" id="buildingSpace" value={this.props.commercial.buildingSpace} />
                    <div>{this.props.buildingSpaceError}</div>
                        <div>please download files/images here.</div>
                        {this.state.attachmentValuePair}
                        <button onClick={this.insertAttachmentValuePair}>
                                insert attachment
                            </button>
                        {this.state.hoursOfOperation}
                        <button onClick={this.insertHoursOfOperation}>
                                insert hours Of Operation
                            </button>
                        {this.state.workspaceValuePair}
                        <button onClick={this.insertWorkspaceValuePairs}>
                                insert workspace
                            </button>
                        {this.state.serviceValuePair}
                        <button onClick={this.insertServiceValuePairs}>
                                insert service
                            </button>
                    </div>
                    <div>
                        <fieldset>
                            <input type="radio"  id="opt1" name="opt" value="1"   onChange={this.handleChange} checked></input>
                            <label for="opt1">option 1</label>

                            <input type="radio"  id="opt2" name="opt" value="2"  onChange={this.handleChange} ></input>
                            <label for="opt2">option 2</label>
                        </fieldset>
                    </div>
                    <div>
                        <div>{this.props.realtorName}</div>
                        <div>{this.props.realtorContact}</div>
                    </div> 
                    <Image images={this.state.images} />
                   
                    <button onClick={this.popLastImage}>
                        delete last image from gallery.
                    </button>
                    <input type="submit" value="submit" />
                    </form>
                </div>);}
        



             

            
  
}

// Exporting the component
export default Commercial;