import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './person/person.js';
import './person/person.css';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Salla Ramesh', age: 29 },
      { id: 2, name: 'manasa', age: 26 },
      { id: 3, name: 'bhavishya', age: 2 }
    ],
    address: 'hyd',
    showPersons: false
  }
  switchNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => { return person.id === id });
    console.log(personIndex);
    const person = {
      ...this.state.persons[personIndex]
    };
    console.log(person);
    console.log(event.target.value);
    person.name = event.target.value;
    console.log(event.target.value);
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });


  }
  deleteNameHandler = (index) => {
    // let dpersons = this.state.persons.slice();
    let dpersons = [...this.state.persons];
    dpersons.splice(index, 1);
    this.setState({ persons: dpersons })
  }
  middleNameHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Salla Ramesh ' + event.target.value, age: 29 },
        { name: 'Eleti Manasa ' + event.target.value, age: 26 },
        { name: 'Salla Bhavishya ' + event.target.value, age: 2 }
      ]
    })
  }
  cityNameHandler = (city) => {
    this.setState({
      address: city
    })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });


  }

  render() {
    const classes = [];
    const manStyle = {
      border: '5px blue',
      backgroundColor: "blue",
      ':hover':
      {
        backgroundColor: 'green'

      }
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>{this.state.persons.map((person, index) => {
        return <Person key={person.id} name={person.name}
          age={person.age} click={this.deleteNameHandler.bind(index)}
          changed={(event) => this.switchNameHandler(event, person.id)} />
      })}

      </div>
      );
      manStyle.backgroundColor = 'red';
      manStyle[':hover'].backgroundColor = 'green';



      if (this.state.persons.length <= 2) {
        classes.push('red')
      }
      if (this.state.persons.length <= 1) {
        classes.push('bold')
      }
    }
    return (
      <StyleRoot>
        <div className='Person'>
          <h1> I am Manasa</h1>
          <p class={classes.join(' ')}>bhavishya is my kid</p>
          {/*  Static values
       <Person name="ramesh"  age="28"/>
       <Person name="Bhavishya" age="3">My hobbies:reading</Person>
       <Person name="manasa" age="25"/> */}

          <button style={manStyle} onClick={this.togglePersonsHandler} >switch name</button>
          {persons}
         
        </div>
      </StyleRoot>
    );
    //React based elements
    //return React.createElement('div',{className:'App'}, React.createElement('h1',{className:'App-header'},'manasa'));
  }
}

export default Radium(App);
