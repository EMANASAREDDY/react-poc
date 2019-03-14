import React from 'react';


const validation = (props) => {
    let validationMessage='text long enough';
    if(props.inputLength<=5){
        validationMessage='text short';
    }
    return (
        <div>
            {validationMessage}
              
            
        </div>
    );
};




export default validation;

