import React , {useEffect} from "react";
// import logo from './logo.svg';
// import { StoreProvider } from "./utils/GlobalState";
// import DisplaySensorState from "./components/DisplaySensorState"
import './App.css';
// import ReadSensorTest from "./components/ReadSensorTest";
import NavBar from "./components/NavBar";
//import './app.sass';
import 'bulma/css/bulma.css'
import Footer from "./components/Footer";
// import SensorCard from "./components/SensorCard";
// import SensorCardContainer from "./components/SensorCardContainer"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import History from "./pages/History";
import Signup from "./pages/Signup";
import SensorSetting from "./pages/SensorSetting"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStoreContext } from "./utils/GlobalState";
import axios from "axios";
import PrivateRoute from "./components/PrivateRoute";


function App() {

  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    checkLogin();
   // loadMessage();
  }, [state.apiToken])

  const checkLogin = () => {
    // get the user from local storage
    const user = JSON.parse(localStorage.getItem("user"));
    // is there a user?
    if (user) {
      // put that user in the state
      dispatch({
        action: "LOGIN",
        email: user.email,
        apiToken: user.token
      });
    }
  }

  // const loadMessage = () => {
  //   axios.get("/api/welcome", {
  //     headers: {
  //       Authorization: `Bearer ${state.apiToken}`
  //     }
  //   }).then(({ data }) => {
  //     const { message } = data;
  //     dispatch({ type: "GET_MESSAGE", message })
  //   })
  // }




  return (
    <Router>
    <div className="App">
     
        <NavBar/>
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/settings" component={SensorSetting} />
            <Route exact path="/history" component={History} />
            <Route exact path="/logout" component={Login} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        <Footer/>
      
    </div>
    </Router>
  );
}

export default App;

      

