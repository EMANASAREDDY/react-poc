import React from 'react';
import Classes from './Cockpit.css';
import Aux from'../../hoc/Auxiliary';
const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = 'Classes.Button';
 if(props.showPersons){
  btnClass = [Classes.Button,Classes.Red].join(" ");
  }

  //if (props.state.persons.length <= 2) {
   // assignedClasses.push(Classes.red);
 // }
 // if (this.state.persons.length <= 1) {
  //  assignedClasses.push(Classes.bold);
//}


  return (
    <Aux>
    <h1>{ props.appTitle}</h1>
      <p className={assignedClasses.join('')}>It is Really Working</p>
      <button className={btnClass} onClick={props.clicked}>toggle Person</button>
    </Aux>
  );
};
export default cockpit;