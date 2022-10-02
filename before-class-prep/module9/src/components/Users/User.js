const User = ({user, onDeleteUser}) => {

    const deleteUserHandler = (event) => {
        onDeleteUser(user.id);
      }

    return (
        <li key={user.id} onClick={deleteUserHandler}>
        {user.name} ({user.age} years old)
      </li>
    );
}

export default User;