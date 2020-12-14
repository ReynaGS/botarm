import React , {useEffect, useHistory} from "react";
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
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { useStoreContext } from "./utils/GlobalState";
import axios from "axios";
import PrivateRoute from "./components/PrivateRoute";
import startPolling from "./utils/polling";
import Pusher from 'pusher-js';
import API from './utils/API'; 
import { SET_ACTUAL_SENSOR_STATUS, SET_SENSOR_CONFIGURATION } from "./utils/actions"




//https://pusher.com/tutorials/react-websockets
function App() {

  const [state, dispatch] = useStoreContext();
  // const { push } = useHistory();

  useEffect(() => {
    checkLogin();
    loadInitial()
    loadInitialSensorState()
    
    // Enable pusher logging - don't include this in production
     Pusher.logToConsole = false;

    var pusher = new Pusher('6ef349c7143e05ce7ff2', {
      cluster: 'us2'
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function (data) {
      console.log("este es")
      console.log(JSON.stringify(data));
    });
   // loadMessage();
     //startPolling(state, dispatch, 30000);
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
    //else {push("/login")}
  }
  async function loadInitial() {
    // console.log("hello from loadInitial")
    // console.log(state)
    const { data } = await API.getSensorConfig(state.email)
    // console.log(data)
    if(data != null){
    dispatch({
      action: SET_SENSOR_CONFIGURATION,
      sensorConfiguration: data

    });
    }
  }

  async function loadInitialSensorState() {
    console.log("hello from init sensor state")
    console.log(state)
    const { data } = await API.getSensor()
    console.log(data)
    if (data != null) {
      dispatch({
        action: SET_ACTUAL_SENSOR_STATUS,
        actualSensorState: data

      });
    }
  }


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

      

