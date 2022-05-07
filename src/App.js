import React, { useState } from 'react';
import AddNewUser from './components/user/AddNewUser';
import UsersList from './components/user/UsersList';
function App() 
{
  //connect between the to elements
  const[usersList,setUsersList] = useState([]);

  // adding the new user after reciving him

  function user_Added(i_userName, i_userAge)
  {
    setUsersList(function(prevUsersList)
      {
        const newUser = {userName: i_userName, userAge: i_userAge, id: Math.random().toString()}
         return [...prevUsersList,newUser];
      })  
  }

  return (
    <div>
      <AddNewUser
      onAddUser = {user_Added}/>
      <UsersList
      users = {usersList}/>
    </div>
  );
}

export default App;
