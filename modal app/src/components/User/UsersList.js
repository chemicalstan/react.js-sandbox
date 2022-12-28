import React from "react";
import styles from "./UsersList.module.css";
import Card from "../UI/Card";

const UsersList = (props) => {
  let userItems = props.users.map((user) => (
    <li key={user.id}>
      {user.username}, {user.age} years old
    </li>
  ));
  if (userItems.length === 0) userItems = <p>No User Added</p>;

  console.log(userItems);
  return (
    <Card className={styles.users}>
      <ul>{userItems}</ul>
    </Card>
  );
};

export default UsersList;
