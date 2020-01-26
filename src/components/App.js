import React, { Component } from 'react';
import {Provider} from './context';
import Menu from './Menu';
import FormContainer from './FormContainer';
import CardList from './CardList'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Player from './Player';
// import PlayerList from './PlayerList';
// import AddPlayerForm from './AddPlayerForm';


class App extends Component {

  state = {
    type: '',
    babyEvents: [
      {
        //may need to include type in here for card customization
      typeOfCard: '',
      date: '',
      startTime: '',
      endTime:'',
      colorOfPoop: '',
      consistency: '',
      notes: '',
      foodType:'',
      qualityOfFeed:'',
      boobUsed:'',
      mealTime:'',
      food:'',
      howMuchSolid:'',
      mealNotes:'',
      id: 1
      }
    ]
  };

  prevId = 1;


  handleShowForm = (babyEvent) => {
    switch (babyEvent) {
      //-----------SLEEPING FORM SELECTION----------------//
      case "snooze":
        console.log("snooze TEST");
        this.setState( prevState => {
          return{
            type: 'snooze'
          }
        });
        console.log("STATE: " + this.state.type);
        break;
      //-----------EATING FORM SELECTION----------------//
      case "chow":
        
        console.log("chow TEST");
        this.setState(prevState => {
          return {
            type: 'chow'
          }
        });
        console.log("STATE: " + this.state.type);
        break;

      //-----------POOP FORM SELECTION----------------//
      case "butt":
        console.log("Poop TEST");
        this.setState(prevState => {
          return {
            type: 'butt'
          }
        });
        console.log("STATE: " + this.state.type);
        break;
    }
  }

  handleCard = (data) =>{
    console.log(data);
    this.setState ( previousState => {
      return{
        type: '',
        babyEvents: [
          
          {
            typeOfCard: data.typeOfCard,
            date: data.date,
            startTime: data.startTime,
            endTime: data.endTime,
            notes: data.notes,
            colorOfPoop: data.colorOfPoop,
            consistency:data.consistency,
            foodType:data.foodType,
            qualityOfFeed:data.qualityOfFeed,
            boobUsed:data.boobUsed,
            mealTime:data.mealTime,
            food:data.food,
            howMuchSolid:data.howMuchSolid,
            mealNotes:data.mealNotes,
            id: this.prevId += 1
          }
          , ...previousState.babyEvents
        ]
      };

    });
    
  }

  

  render() {
    console.log(this.state);
    return (
      < Provider value = {
        {
          displayForm: this.state.displayForm,
          babyEvents: this.state.babyEvents

        }
      } >
      <div class="container" style={{width: "80%"}}>
          <div id="header">
              <h1>The Remy <a id='sleep'>Sleep</a>, <a id='eat'>Eat</a> and <a id='poop'>Poop</a> Tracker</h1>
          </div>
        <Menu displayForm={this.handleShowForm}/>

        <FormContainer type={this.state.type} addCard={this.handleCard}/>
        {/* <CardComp /> */}
        <CardList />
      </div>
        
        
      </Provider>
    );
  }
}

export default App;

