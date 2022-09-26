import React, {useState} from 'react';
import NewUser from './Users/NewUser';
import UserList from './Users/UserList';


function App() {
  const [usersList, setUsersList] = useState([]);

  const newUserHandler = (userName, userAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: userName, age: userAge }];
    });
  };

  return (
    <div>
      <NewUser onNewUser={newUserHandler} />
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
