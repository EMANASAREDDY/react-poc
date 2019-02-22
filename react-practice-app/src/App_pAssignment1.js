import React, { Component } from 'react';
import './App.css';
import Person from './person/customer.js';
import './person/person.css';

class App extends Component {
  state = {
    persons: [
      { name: 'ramesh', age: 29 },
      { name: 'manasa', age: 26 },
      
    ]
  }
 
  
  middleNameHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Salla Ramesh ' + event.target.value, age: 29 },
        { name: 'Eleti Manasa ' + event.target.value, age: 26 },

      ]
    })
  }
  
  render() {
    
    return (

      <div>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
        click={this.middleNameHandler.bind(this, 'Reddy')}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
         changed={this.middleNameHandler} />

    
      </div>

    );
  }
}

export default App;
