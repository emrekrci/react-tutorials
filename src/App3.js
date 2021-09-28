import { useState } from "react";

import AddUser from "./components/FirstPractice/Users/AddUser";
import UserList from "./components/FirstPractice/Users/UserList";

const App3 = (props) => {
    const [users, setUsers] = useState([]);

    const addUser = (uName, uAge) => {
      setUsers((prevUsers) => {
        return [...prevUsers, {name: uName , age: uAge, id: Math.random()}];
      })
    }
  return (
    <div>
      <AddUser onAddUser={addUser}/>
      <UserList users={users}/>
    </div>
  );
};

export default App3;
