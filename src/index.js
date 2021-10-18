import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";
import { AuthContextProvider } from "./Context/auth-context";
import App6 from "./App6";
import App7 from "./App7";
import App8 from "./components/SendingHttpRequest/App8";
import App9 from "./components/CustomHooks/App9";
import App10 from "./components/FormsAndUserInputs/App10";

ReactDOM.render(
  // <AuthContextProvider>
    <App10 />,
  // </AuthContextProvider>
  document.getElementById("root")
);
