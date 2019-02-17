import React, { Component } from 'react';
import './App.css';
import Person, { City } from './person/person.js';
import './person/person.css';

class App extends Component {
  state = {
    persons : [
      {name:'ramesh', age:29},
      {name:'manasa', age:26},
      {name:'bhavishya', age:29}
    ],
    address: 'hyd'
  }
  switchNameHandler=()=>{
    this.setState({persons:[
      {name:'Salla Ramesh', age:29},
      {name:'manasa', age:26},
      {name:'bhavishya', age:2}
    ]})
  }
  middleNameHandler=(event)=>{
    this.setState({persons:[
      {name:'Salla Ramesh '+event.target.value, age:29},
      {name:'Eleti Manasa '+event.target.value, age:26},
      {name:'Salla Bhavishya '+event.target.value, age:2}
    ]})
  }
  cityNameHandler=(city)=>{
    this.setState({address:city
    })
    }
  render() {
    const manStyle = {
      border:'5px solid blue',
      textDecoration: 'underline'
    }
    return (
     
     <div className='Person'>
       <h1 style={manStyle}> iam react app</h1> 
       <p>bhavishya is my kid</p>
       {/*  Static values
       <Person name="ramesh"  age="28"/>
       <Person name="Bhavishya" age="3">My hobbies:reading</Person>
       <Person name="manasa" age="25"/> */}
       <button onClick={this.switchNameHandler}>switch name</button>
       <Person name={this.state.persons[0].name}  age={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name}  age={this.state.persons[1].age}
        click={this.middleNameHandler.bind(this, 'Reddy')}/>
       <Person name={this.state.persons[2].name}  age={this.state.persons[2].age}
       changed={this.middleNameHandler}/>
       <City address={this.state.address}/>
       <button onClick={() => this.cityNameHandler('Newyork')}>city name</button>
      </div>
    
   );
   //React based elements
  //return React.createElement('div',{className:'App'}, React.createElement('h1',{className:'App-header'},'manasa'));
  }
}

export default App;
