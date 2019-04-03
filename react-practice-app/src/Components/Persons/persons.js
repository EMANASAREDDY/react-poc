import React, {PureComponent} from 'react';
import Person from './person/person.js'
class Persons extends PureComponent{
  constructor(props) {
    super(props);
    console.log('[persons.js] Inside constructor', props);
    this.state = {
        persons: [
            { id: 1, name: 'Salla Ramesh', age: 29 },
            { id: 2, name: 'manasa', age: 26 },
            { id: 3, name: 'bhavishya', age: 2 }
        ],
        address: 'hyd',
        showPersons: false,
        changeCounter: 0,
        authenticated: false
    }
}
componentWillMount() {
    console.log('[persons.js]  Inside componentWillMount()');
}
componentDidMount() {
    console.log('[persons.js] inside componentDidMount()')
}
componentWillReceiveProps(nextProps){
console.log('[UPDATE persons.js] componentWillReceiveProps',nextProps);
}
//shouldComponentUpdate(nextProps,nextState){
//console.log('[UPDATE persons.js] shouldComponentUpdate',nextProps,nextState);
  //return nextProps.persons!==this.props.persons||
        // nextProps.changed!==this.props.changed||
       //  nextProps.clicked!==this.props.clicked;
 //return true;
//}
componentWillUpdate(nextProps,nextState){
  console.log('[UPDATE persons.js] componentWillUpdate()',nextProps,nextState);
}
componentDidUpdate(){
  console.log('[UPDATE persons.js] componentDidUpdate()');
}
  

  render(){
    console.log('[person.js] inside rendering')
    return this.props.persons.map((person, index) => {

      return <Person
        click={() => this.props.clicked(index)}
        key={person.id} name={person.name}
        age={person.age}
        changed={(event) =>this.props.changed(event, person.id)}/>
    });
  
  
  }
}
  


export default Persons;