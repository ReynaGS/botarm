import React from "react";
import logo from './logo.svg';
import { StoreProvider } from "./utils/GlobalState";
import DisplaySensorState from "./components/DisplaySensorState"
import './App.css';
import ReadSensorTest from "./components/ReadSensorTest";
import NavBar from "./components/NavBar";
import './app.sass';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <StoreProvider> 
        <NavBar/>
        <div>
          <h1 className="title is-5 has-text-danger-dark" > TAMO EN VIVO! </h1>
          <DisplaySensorState/>
          <ReadSensorTest/>
      </div>
      <Footer/>
      </StoreProvider>
    </div>
  );
}

export default App;
