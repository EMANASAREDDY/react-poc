import React from 'react';

const char=(props)=>{
    const style={
        display:'inline-block',
        margin:'16px',
        padding:'16px',
        border:'1px solid black',
        textAlign:'centre'
    

};
return(
<div style={style} onClick={props.clicked}> {props.character}</div>
);
};
export default char;