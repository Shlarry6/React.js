import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  const deleteUserHandler = (uId) => {
    setUsersList((prevUsersList) => {
        return prevUsersList.filter(user => user.id !== uId);
    })
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} onDeleteUser={deleteUserHandler}/>
    </>
  );
}

export default App;
