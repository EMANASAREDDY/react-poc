import React, { PureComponent } from 'react';
import Persons from '../Components/Persons/persons';
import Cockpit from '../Components/Cockpit/Cockpit.js';
import Classes from '../Containers/App.css';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside constructor', props);
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
        console.log('[App.js]  Inside componentWillMount()');
    }
    componentDidMount() {
        console.log('[App.js] inside componentDidMount()')
    }
   // shouldComponentUpdate(nextProps,nextState){
        //console.log('[UPDATE App.js] shouldComponentUpdate',nextProps,nextState);
        //return nextState.persons!==this.state.persons||
        //nextState.showPersons!==this.state.showPersons;
      //}
      componentWillUpdate(nextProps,nextState){
        console.log('[UPDATE App.js] componentWillUpdate()',nextProps,nextState);
      }
      componentDidUpdate(){
        console.log('[UPDATE App.js] componentDidUpdate()');
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
        this.setState((prevState, props) => {
            return {
                persons: persons,
                changeCounter: prevState.changeCounter + 1

            };
        });
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
        this.setState((prevState,props)=>{ 
            return {showPersons: !doesShow,
        changeCounter:prevState.changeCounter+1
            }
        });
    }
    loginHandler = () => {
        this.setState({ authenticated: true });
    }




    render() {
        console.log('[App.js] inside rendering');


        let persons = null;

        if (this.state.showPersons) {
            persons =
                <Persons
                    persons={this.state.persons}
                    clicked={this.deleteNameHandler}
                    changed={this.switchNameHandler} />;

        }

        return (

            <Aux>
            <button onClick={()=>{this.setState({showPersons:true})}}> show Persons</button>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler} />
                {persons}


            </Aux>

        );
        //React based elements
        //return React.createElement('div',{className:'App'}, React.createElement('h1',{className:'App-header'},'manasa'));
    }
}

export default withClass(App,Classes.App);
