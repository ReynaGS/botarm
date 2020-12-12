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

function App() {
  return (
    <div className="App">
      <StoreProvider> 
        <NavBar/>
        <div style={{ margin: "36px" }}>
        <SensorCardContainer /> 
        </div>
        <Footer/>
      </StoreProvider>
    </div>
  );
}

export default App;

      

