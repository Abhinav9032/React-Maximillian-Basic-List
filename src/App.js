import React, { useState, Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id :"a1" ,name: "Maximus", age: 28 },
      { id :"a2" ,name: "Manu", age: 29 },
      { id :"a3" ,name: "Stefanie", age: 26 }
    ],  
    otherState: "Some other state",
    showPersons: true
  };

  deletePesronsHandler = (personIndex) => {
 const leftPersons = [...this.state.persons];
 leftPersons.splice(personIndex,1);
 this.setState({persons: leftPersons})
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "Captain America", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stefanie", age: 39 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShowPesons = this.state.showPersons;
    this.setState({
      showPersons: !doesShowPesons
    });
  };

  changeNameHandler = (event , id) => {
    
    const personIndex = this.state.persons.findIndex( p => {return p.id === id})

    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons})
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let personsList = null;

    if (this.state.showPersons) {
      personsList = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person 
            name={person.name} 
            age={person.age} 
            key={person.id} 
            click={() => this.deletePesronsHandler(index)} 
            changed={(event) => this.changeNameHandler(event,person.id)}
            />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {personsList}
      </div>
    );
  }
}

export default App;
