import React, { useContext, useState } from 'react';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = () => {
  const authCtx = useContext(AuthContext);
  const [enteredName, setEnteredName] = useState();

  const enteredNameHanlder = (event) => {
    setEnteredName(event.target.value);
  };

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <form onSubmit={authCtx.getProfile(enteredName)}>
        <label htmlFor="name-input">Name: </label>
        <input id="name-input" onChange={enteredNameHanlder}/>
        
        <button>Submit Name</button>
      </form>
      <Button onClick={authCtx.onLogout} />
    </Card>
  );
};

export default Home;
