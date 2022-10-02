import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

import User from './User';

const UsersList = (props) => {
  
 
  
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
         <User user={user} onDeleteUser={props.onDeleteUser}/>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
