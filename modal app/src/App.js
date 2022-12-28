import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  console.log(users);

  const saveUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser onAddUser={saveUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
