import React,{ Component} from 'react';
import PropTypes from 'prop-types';
import  Classes from './person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
class Person extends Component{
    constructor(props) {
        super(props);
        console.log('[person.js] Inside constructor', props);
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
        console.log('[person.js]  Inside componentWillMount()');
    }
    componentDidMount() {
        console.log('[person.js] inside componentDidMount()')
    }
    //constructor(props){
       // super(props);
        //this.inputElementRef = React.createRef();

    //}
//    static contextType=AuthContext;
    //componentDidMount(){
       // this.inputElement.focus();
       // console.log(this.context.authenticated);
       //this.inputElementRef.Current.focus();
    //}
    render(){
    console.log('[person.js] rendering...');

return (
    <Aux className={Classes.Person}>
        
        {/*this.context.authenticated?<p>Authenticated</p> :<p>please Login</p>*/}
    
        
        <p  onClick={this.props.click}>I am {this.props.name} and I am {this.props.age}</p>,
        <p key="i2">{this.props.children}</p>,
        <input type="text"  key="i3"
       // ref={(inputEl)=>{this.inputElement=inputEl}} 
       // ref={this.inputElmentRef}
        onChange={this.props.changed} value={this.props.name} />
</Aux>
);
    

    

} 
}

Person.propTypes={
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed:PropTypes.func
};


export default withClass(Person,Classes.person);

