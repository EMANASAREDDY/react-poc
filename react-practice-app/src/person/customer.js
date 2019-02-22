import React from 'react';


const person = (props) => {
    return (
        <div>
            <p>I am {props.name} and I am {props.age}</p>
            <input type="text" onChange={props.changed}/>
        

        </div>
    )
};





export default person;

