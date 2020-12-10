import React from "react";
import logo from './logo.svg';
import { StoreProvider } from "./utils/GlobalState";
import DisplaySensorState from "./components/DisplaySensorState"
import './App.css';
import ReadSensorTest from "./components/ReadSensorTest";

function App() {
  return (
    <div className="App">
      <StoreProvider> 
        <div>
          TAMO EN VIVO!
          <DisplaySensorState/>
          <ReadSensorTest/>
      </div>
      </StoreProvider>
    </div>
  );
}

export default App;
