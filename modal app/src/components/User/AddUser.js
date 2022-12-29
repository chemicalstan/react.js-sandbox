import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const ageInputRef = useRef();
  const usernameInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    let enteredUsername = usernameInputRef.current.value;
    let enteredAge = ageInputRef.current.value;
    // Handle empty responses here
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return setError({
        title: "An Error Occured",
        message: "Username or Age Must Not Be Empty",
      });
    } else if (+enteredAge < 1) {
      return setError({
        title: "An Error Occured",
        message: "Age Must Be Greater Than 0",
      });
    }

    props.onAddUser({
      id: Math.random() * 100,
      age: +enteredAge,
      username: enteredUsername,
    });
    ageInputRef.current.value = "";
    usernameInputRef.current.value = "";
  };

  return (
    <>
      {error && (
        <ErrorModal
          onAcknowledge={() => {
            setError(null);
          }}
          {...error}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" ref={usernameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" name="age" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
