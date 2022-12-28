import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");

  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    // Handle empty responses here
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
      return;
    if (+enteredAge < 1) return;
    console.log({ enteredAge, enteredUsername });
    props.onAddUser({
      id: Math.random() * 100,
      age: +enteredAge,
      username: enteredUsername,
    });
    setEnteredAge("");
    setEnteredUsername("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          name="age"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
