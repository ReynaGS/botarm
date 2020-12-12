import React from "react";
import logo from './logo.svg';
import { StoreProvider } from "./utils/GlobalState";
import DisplaySensorState from "./components/DisplaySensorState"
import './App.css';
import ReadSensorTest from "./components/ReadSensorTest";
import NavBar from "./components/NavBar";
import './app.sass';
import Footer from "./components/Footer";
import SensorCard from "./components/SensorCard";
import SensorCardContainer from "./components/SensorCardContainer"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import History from "./pages/History";
import Signup from "./pages/Signup";
import SensorSetting from "./pages/SensorSetting"; 

function App() {
  return (
    <div className="App">
      <StoreProvider> 
        <NavBar/>
        {/* <Home/> */}
        {/* <Login/> */}
        {/* <History/> */}
        {/* <Signup/> */}
        <SensorSetting/>
        <Footer/>
      </StoreProvider>
    </div>
  );
}

export default App;

      

