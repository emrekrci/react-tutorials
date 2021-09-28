import { useState } from "react";
import UserForm from "./components/FirstPractice/UserForm";
import UserList from "./components/FirstPractice/UserList";

const App3 = (props) => {
  const [userList, setUserList] = useState([{ username: "Emre", age: 27, id:1 }]);

  const addUserList = (user) => {
    setUserList((prevList) => {
      return [user, ...prevList];
    });

    console.log(userList);
  };

  const deleteUser = (userId) => {
    setUserList(prevList => {
        const updateList = prevList.filter(user => user.id !== userId);
        return updateList;
    })
  }

  return (
    <div>
      <UserForm onAddUser={addUserList} />
      <UserList userList={userList} deleteUser={deleteUser}/>
    </div>
  );
};

export default App3;
