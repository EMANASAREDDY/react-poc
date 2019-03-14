import React from 'react';
import  classes from './person.css';
const person = (props) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I am {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />

        </div>
    )
};
export const City = (props) => {
    return <p>I am a {props.address}</p>      
};
export default person;

