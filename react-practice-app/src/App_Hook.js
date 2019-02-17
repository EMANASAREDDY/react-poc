import React, {useState} from 'react';
import './App.css';
import Person, { City } from './person/person.js';

const app = (props) => {
  const [personState, setPersonState] = useState({
      persons : [
        {name:'ramesh', age:29},
        {name:'manasa', age:26},
        {name:'bhavishya', age:29}
      ]
    });

    const switchNameHandler=()=>{
      setPersonState({persons:[
          {name:'salla ramesh', age:29},
          {name:'manasa', age:26},
          {name:'bhavishya', age:29}
        ]
      })
      }


     const [addressState, setAddressState] = useState({
       address:'Hyderabad'
      });

      const cityNameHandler=()=>{
        setAddressState({address:'Newyork'
        })
        }
        

   return (
     <div className="App">
       <h1> iam react app</h1> 
       <p>bhavishya is my kid</p>
       {/*  Static values
       <Person name="ramesh"  age="28"/>
       <Person name="Bhavishya" age="3">My hobbies:reading</Person>
       <Person name="manasa" age="25"/> */}
       <button onClick={switchNameHandler}>switch name</button>
       <Person name={personState.persons[0].name}  age={personState.persons[0].age}/>
       <Person name={personState.persons[1].name}  age={personState.persons[1].age}
        click={switchNameHandler}/>
       <Person name={personState.persons[2].name}  age={personState.persons[2].age}/>
       <City address={addressState.address}/> 
       <button onClick={cityNameHandler}>City name</button>
       
      </div>
    
   );
   //React based elements
  //return React.createElement('div',{className:'App'}, React.createElement('h1',{className:'App-header'},'manasa'));
  
}

export default app;

