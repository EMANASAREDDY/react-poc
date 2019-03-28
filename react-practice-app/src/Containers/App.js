import React, { Component } from 'react';
import Persons from '../Components/Persons/persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Classes from '../Containers/App.css';
import Aux from '../hoc/Auxiliary.js' ;
import AuthContext from '../context/auth-context';

class App extends Component {
    constructor(props){
        super(props);
        console.log('[App.js] constructor');
    }
    
    state = {
        persons: [
            { id: 1, name: 'Salla Ramesh', age: 29 },
            { id: 2, name: 'manasa', age: 26 },
            { id: 3, name: 'bhavishya', age: 2 }
        ],
        address: 'hyd',
        showPersons: false,
        showCockpit: true,
        changeCounter:0,
        authenticated:false

    }
    static getDerivedStateFromProps(props,state){
        console.log('[App.js] getDerivedFromProps',props);
        return state;
    }
    //componentWillMount(){
        //console.log('[App.js] componentWillMount');
   // }
   shouldComponentUpdate(nextProps,nextState)
   {
       console.log('[App.js] shouldComponentUpdate');
       return true;
   }
   componentDidUpdate(){
       console.log('[App.js] componentDidUpdate')
   }
    componentDidMount(){
        console.log('[App.js] componentDidMount');

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
        this.setState((prevState,props)=>{
            return{
                 persons: persons, 
                 changeCounter:prevState.changeCounter+1 

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
        this.setState({ showPersons: !doesShow });
    }
        loginHandler=()=>{
            this.setState({authenticated: true});
        }


    

    render() {
        console.log('[App.js] render');
        
        let persons = null;
        if (this.state.showPersons) {
            persons =(
        
                <Persons 
                persons={this.state.persons}
                clicked={this.deleteNameHandler}
            changed={this.switchNameHandler}
            isAuthenticated={this.state.authenticated}/>);
    

            
            
        }
        return (

            <Aux>
                <button  onClick={()=>{this.setState({showCockpit:false});}}>Cockpit Remove</button>
                <AuthContext.Provider value={{authenticated:this.state.authenticated,login:this.loginHandler}}>
                {this.state.showCockpit ? (
               <Cockpit 
               title={this.props.appTitle}
               showPersons={this.state.showPersons}
               Persons={this.state.persons}
                clicked={this.togglePersonsHandler}
                login={this.loginHandler}/> ):null}

                {persons}
                </AuthContext.Provider>

        </Aux>

        );
        //React based elements
        //return React.createElement('div',{className:'App'}, React.createElement('h1',{className:'App-header'},'manasa'));
    }
}

export default withClass(App,Classes.App);
