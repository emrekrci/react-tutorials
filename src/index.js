// import { AuthContextProvider } from "./Context/auth-context";
// import App from "./components/ExpensesManager/App";
// import App2 from "./components/CourseGoals/App2";
// import App3 from "./components/FirstPractice/App3";
// import App4 from "./components/SideEffects/App4";
// import App5 from "./components/UseReducer/App5";
// import App7 from "./components/ClassBasedExample/App7";
// import App8 from "./components/SendingHttpRequest/App8";
// import App9 from "./components/CustomHooks/App9";
// import App10 from "./components/FormsAndUserInputs/App10";
//import App6 from "./components/FoodOrderApp/App6";
//import App11 from "./components/ReduxStudy/App11";
import "./index.css";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
//import store from './components/ReduxStudy/store/index'
import App12 from "./components/AdvancedRedux/App12";
import store from "./components/AdvancedRedux/store/index";

ReactDOM.render(
  // <AuthContextProvider>
  <Provider store={store} >
    <App12 />
  </Provider>,
  // </AuthContextProvider>
  document.getElementById("root")
);
