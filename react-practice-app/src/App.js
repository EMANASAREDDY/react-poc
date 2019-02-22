import React, { Component } from 'react';
import './App.css';
import Person, { City } from './person/person.js';
import './person/person.css';

class App extends Component {
  state = {
    persons: [
      {id:1, name: 'Salla Ramesh', age: 29 },
      {id:2, name: 'manasa', age: 26 },
      {id:3, name: 'bhavishya', age: 2 }
    ],
    address: 'hyd',
    showPersons: false
  }
  switchNameHandler = (event,id) => {
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
    this.setState({persons : persons});

    
  }
  deleteNameHandler = (index) => {
     // let dpersons = this.state.persons.slice();
     let dpersons=[...this.state.persons];
      dpersons.splice(index,1);
      this.setState({persons:dpersons})
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
    const manStyle = {
      border: '5px blue'
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>{this.state.persons.map((person, index) => {
        return <Person key={person.id} name={person.name}
          age={person.age} click={this.deleteNameHandler.bind(index)}
          changed={(event)=> this.switchNameHandler(event, person.id)}  />
      })}


      </div>)
    }
    return (

      <div className='Person'>
        <h1 style={manStyle}> I am Manasa</h1>
        <p>bhavishya is my kid</p>
        {/*  Static values
       <Person name="ramesh"  age="28"/>
       <Person name="Bhavishya" age="3">My hobbies:reading</Person>
       <Person name="manasa" age="25"/> */}
        <button onClick={this.togglePersonsHandler} className="button">switch name</button>
        {persons}
        <City address={this.state.address} />
        <button onClick={() => this.cityNameHandler('Newyork')}>city name</button>
      </div>

    );
    //React based elements
    //return React.createElement('div',{className:'App'}, React.createElement('h1',{className:'App-header'},'manasa'));
  }
}

export default App;
