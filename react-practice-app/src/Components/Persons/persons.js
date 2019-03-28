import React from 'react';
import Person from './person/person.js'
const persons = (props) => 
  props.persons.map((person, index) => {

    return <Person
      click={() => this.props.clicked(index)}
      key={person.id} name={person.name}
      age={person.age}
      changed={(event) => this.props.changed(event, person.id)}/>
  });



export default persons;






{/*import React, { PureComponent } from 'react';
import Person from './person/person';
class persons extends PureComponent {
  //static getDerivedStateFromProps(props,state){
  //console.log('[persons.js] getDerivedStateFromProps');
  //return state;
  // }
  //componentWillReceiveProps(props) {
    //console.log('[persons.js] componentWillReceiveProps', props);
  //}
  //shouldComponentUpdate(nextProps, nextState) {
   // console.log('[persons.js] shouldComponentUpdate');
    //if (nextProps.persons !== this.props.persons ||
     // nextProps.clicked !== this.props.clicked ||
     // nextProps.changed !== this.props.changed
    //) {
//return true;
  //  } else {
     // return false;
   // }
    // return true;

  //}
   getSnapshotBeforeUpdate(prevProps,prevState){
 console.log('[persons.js] getSnapshotBeforeUpdate');
  return {message: 'Snapshot'};
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[persons.js] componentDidUpdate');
    console.log(snapshot);
  }
  componentWillUnmount() {
    console.log('[persons.js] componentWillUnmount');
  }

  render() {
    console.log('[persons.js] rendering...');

    return this.props.persons.map((person, index) => {

      return <Person click={() => this.props.clicked(index)}
        key={person.id} name={person.name}
        age={person.age}
        changed={(event) => this.props.changed(event, person.id)}
        isAuth={this.props.isAuthenticated} />
    }
    );
  }

};


export default persons;*/}