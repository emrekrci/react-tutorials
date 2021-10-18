import UsersContext from './components/ClassBasedExample/Context/user-context';
import UserFinder from './components/ClassBasedExample/UserFinder';


const DUMMY_USERS = [
    { id: "u1", name: "Max" },
    { id: "u2", name: "Manuel" },
    { id: "u3", name: "Julie" },
  ];

function App7() {

    const userContext = {
        users:DUMMY_USERS
    }
  return (
      <UsersContext.Provider value={userContext} >
          <UserFinder></UserFinder>
      </UsersContext.Provider>
  );
}

export default App7;
