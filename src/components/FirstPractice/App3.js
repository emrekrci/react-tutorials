import { useState } from "react";

import AddUser from "./Users/AddUser";
import UserList from "./Users/UserList";

const App3 = (props) => {
    const [users, setUsers] = useState([]);

    const addUser = (uName, uAge) => {
      setUsers((prevUsers) => {
        return [...prevUsers, {name: uName , age: uAge, id: Math.random()}];
      })
    }
  return (
    <>
      <AddUser onAddUser={addUser}/>
      <UserList users={users}/>
    </>
  );
};

export default App3;
