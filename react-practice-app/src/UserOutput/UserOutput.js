import React from 'react';
import'./UserOutput.css';
const UserOutput = (props)=>{
    return(
        <div>
            <p> Username:{props.userName}</p>
            <p>I am angular</p>
        </div>
    );
};
export default UserOutput;

