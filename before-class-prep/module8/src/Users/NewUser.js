import React, { useState } from "react";
import Card from "../UI/Card";
import styles from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from '../UI/ErrorModal';

const NewUser = (props) => {
    const [age, setAge] = useState("");
    const [userName, setUserName] = useState("");
    const [error, setError] = useState();

  const newUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0) {
        setError({
            title: 'Invalid User Name Input',
            message: 'Please enter a valid user name.'
        });
        return;
    }
    if (age.trim().length === 0 || +age < 1) {
        setError({
            title: 'Invalid Age Input',
            message: 'Please enter a valid age.'
        });
        return;
    }
    props.onNewUser(userName, age);
    setUserName("");
    setAge("");
    setError();
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
    <Card className={styles.input}>
      <form onSubmit={newUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" value={userName} onChange={userNameChangeHandler}/>
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" value={age} onChange={ageChangeHandler}/>
        <Button type="submit">Add New User</Button>
      </form>
    </Card>
    </div>
  );
};

export default NewUser;
