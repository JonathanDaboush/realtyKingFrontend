import React, {Component,Fragment} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import OutsideClickHandler from 'react-outside-click-handler';
import Autocomplete from '../../Util/autocomplete';
import JSOG from 'jsog';
import {parse, stringify} from 'flatted/esm';
class Area extends Component {
  
    
    //to load data upon generation.
   constructor(props){  
      super(props);  
      this.state = {  
         areaError: ''  ,regionList:[],regionFilterList:[],
       area:{value:"",region:""},areaNames:[""], list:[],
       action:"",
       filterList:[],
       currentValue:"",currentValueRegion:"",
       tags:"",
       isInvisible:true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.filterList=this.filterList.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeRegion = this.onChangeRegion.bind(this);
        this.onClick = this.onClick.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.changeValue = this.changeValue.bind(this);}
        //to load data upon generation.
        changeValue=(target,value)=>{
          if(target==='list'){
            this.setState({list:value}, function () {
              console.log(this.state.list);
            });
          }
          else{
            this.setState({area:value}, function () {
              console.log(this.state.area);
            });
          }}
       //to filter list
     async filterList(event,type){
        if(type==='region'){
          let newlist=[];
          await this.setState({currentValueRegion:event});
          this.state.regionList.map((e)=>{
            if(e.value.startsWith(event)){
               newlist.push(e.value+","+e.country.value);
            }
          
          }); 

         
         this.setState({ regionFilterList:newlist }, () => {
          console.log(this.state.regionFilterList);
         });
          



         
          
        }
        else{
           await this.setState({currentValue:event},() => {
              console.log(this.state.currentValue);
            });
          let newlist=[];
          this.state.list.map((e)=>{
            if(e.value.startsWith(this.state.currentValue)){
              newlist.push(e.value+","+e.region.value+","+e.region.country.value);
            }
           
          }); 
          this.setState({filterList:newlist}); 
          
        }
  
}
//when a tag in a dropbox is clicked current value is the tags value
onClick(id){
  let newValue=this.state.filterList[id];
  this.setState({currentValue:newValue});
  this.setState({isInvisible:true});
}
//to generate tags

//upon input change.
onChange(event){
 

  this.filterList(event,'area');
}
onChangeRegion(event){
 
  this.filterList(event,'region');
}

         //to remove item upon request.
     removeItem(){
      let path='/area';
      axios.delete(
        'http://localhost:8080/'+path+"/"+this.props.id);
      window.location.reload(false);
     }
      
       async componentDidMount() {
        let path='/area';
        let ofList=[];
          await   axios.get(
              'http://localhost:8080/area')
                 .then(res => {
                  let newList=res.data;
                  let newObject={};
                  let target="";
                 target = JSOG.stringify(res.data);
                  newObject= JSOG.parse(target);
                  newObject.map(
                    (e)=>{
                      ofList.push({id:e.id,value:e.value,region:e.region});
                    }
                   );
               }).then().catch(
               function (error) {
                console.log(error);
              });
              this.setState({list:ofList});
        

          let fromList=[];
          await axios.get(
            'http://localhost:8080/'+"region")
               .then(res => {
                let newList=res.data;
                let newObject={};
                let target="";
               target = JSOG.stringify(res.data);
                newObject= JSOG.parse(target);
                newObject.map(
                  (e)=>{
                    fromList.push({id:e.id,value:e.value,country:e.country});
                  }
                 );
             }).then().catch(
             function (error) {
              console.log(error);
            });
            this.setState({regionList:fromList});

        if(this.props.id!==-1){
        axios.get(
          'http://localhost:8080/area'+"/getById/"+this.props.id)
             .then(res => {
                this.changeValue('area', res.data);
           }).catch(
           function (error) {
            console.log(error);
          });}
          else{

           
            let emptyItem={
              value:"",region:this.props.region
            }
            this.setState({area:emptyItem});
          }
      } 
  //upon entering the input button edit or save will be completed.
  //upon entering the input button edit or save will be completed.
  async handleSubmit(event) {
    event.preventDefault();

    let supraList=this.state.regionList;
    let newArea=this.state.area;
    for(let i=0;i<supraList.length;i++){

     let values=this.state.currentValueRegion.split(',')[0];
     let values2=this.state.currentValueRegion.split(',')[1];
     let dude=supraList[i].country;
     if(supraList[i].value===this.state.currentValueRegion.split(',')[0]
     &&supraList[i].country.value===this.state.currentValueRegion.split(',')[1]){
       newArea.region=supraList[i];
     }
    }
     newArea.value=this.state.currentValue; 
     this.setState({area:newArea});

    await axios.post(
     'http://localhost:8080/area', { id: newArea.region.id ,value:newArea.value})
        .then(res => {
           this.setState({areaError: res.data});this.setState({isLoading:true});
      }).catch(
      function (error) {
       console.log(error);
     });
     newArea.Region=null;
    await this.setState({area:newArea});
}
    render()
    {
   
if(this.state.area.region===null){
  return( <div>

    <div> region: <Autocomplete list={this.state.regionFilterList} onChangeValue={this.onChangeRegion}/></div>
 <form  onSubmit={this.handleSubmit} >
 <div><b>previous value:{this.state.area.value || ''}</b></div>
    <label>area:</label>
    <Autocomplete list={this.state.filterList} onChangeValue={this.onChange}/>
    <div>{this.state.areaError}</div>
    <input type="submit" value="Submit"></input>
 </form>
 <button onClick={this.removeItem}>
    Delete
  </button>
</div>);
}

           return( <div>

                                          <div> region: {this.state.area.region.value || ''}</div>
                                       <form  onSubmit={this.handleSubmit} >
                                       <div><b>previous value:{this.state.area.value || ''}</b></div>
                                          <label>area:</label>
                                          <Autocomplete list={this.state.filterList} onChangeValue={this.onChange}/>
                                          <div>{this.state.areaError}</div>
                                          <input type="submit" value="Submit"></input>
                                       </form>
                                       <button onClick={this.removeItem}>
                                          Delete
                                        </button>
                                </div>);



  }
}

// Exporting the component
export default Area;