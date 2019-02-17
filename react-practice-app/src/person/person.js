import React from 'react';


const person = (props) => {
    return (
        <div>
        <p onClick={props.click}>I am {props.name} and I am {props.age}</p> 
        <input type="text" onChange={props.changed} value={props.name}/>
        {props.children}
        </div>
    )   
};

export const City = (props) => {
    return <p>I am a {props.address}</p>      
};

    

export default person;

