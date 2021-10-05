import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";
import { AuthContextProvider } from "./Context/auth-context";

ReactDOM.render(
  <AuthContextProvider>
    <App5 />
  </AuthContextProvider>,
  document.getElementById("root")
);
