import React, { useEffect,useRef,useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';
const cockpit = (props) => {
  const toggleBtnRef=useRef(null);
  const authContext=useContext(AuthContext);
  console.log(AuthContext.authenticated);
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

  // setTimeout(() => {
    //  alert('saved data to cloud');
    //}, 1000);
    toggleBtnRef.current.click();
return () => {
  
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    
    return () => {
      console.log('[Cockpit.js] cleanup work in  2nd useEffect');
    };
  },);



  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }


  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p>bhavishya is my kid</p>
      {/*  Static values
       <Person name="ramesh"  age="28"/>
       <Person name="Bhavishya" age="3">My hobbies:reading</Person>
       <Person name="manasa" age="25"/> */}
      <button ref={toggleBtnRef} onClick={props.clicked} className={btnClass}>switch name</button>
       <button onClick={authContext.login}>Log In</button>
    </div>
  );
};
export default React.memo(cockpit);
