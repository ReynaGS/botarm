import React from "react";
import logo from './logo.svg';
import { StoreProvider } from "./utils/GlobalState";
import DisplaySensorState from "./components/DisplaySensorState"
import './App.css';
import ReadSensorTest from "./components/ReadSensorTest";
import NavBar from "./components/NavBar";
//import './app.sass';
import 'bulma/css/bulma.css'
import Footer from "./components/Footer";
import SensorCard from "./components/SensorCard";
import SensorCardContainer from "./components/SensorCardContainer"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import History from "./pages/History";
import Signup from "./pages/Signup";
import SensorSetting from "./pages/SensorSetting"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <StoreProvider> 
        <NavBar/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/settings" component={SensorSetting} />
            <Route exact path="/history" component={History} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        <Footer/>
      </StoreProvider>
    </div>
    </Router>
  );
}

export default App;

      

