import React, { useState, useEffect } from "react";

import Login from "./Login/Login";
import Home from "./Home/Home";
import MainHeader from "./MainHeader/MainHeader";
import AuthContext from "../../Context/auth-context";
import { useContext } from "react/cjs/react.development";

function App5() {

  const context = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader/>
      <main>
        {!context.isLoggedIn && <Login/>}
        {context.isLoggedIn && <Home/>}
      </main>
    </React.Fragment>
  );
}

export default App5;
