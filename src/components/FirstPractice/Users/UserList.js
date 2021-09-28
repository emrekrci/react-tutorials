import React from "react";
import Card from "../UI/Card";

import listStyle from "./UserList.module.css";

const UserList = (props) => {
  return (
      <Card className={listStyle.users}>
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} Years old)
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UserList;
