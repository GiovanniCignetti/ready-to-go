import "./App.css";
import { useState } from "react";

import Switch from "./components/Switch.js";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <div className="container">
      <div className="div1">
        <Switch switch={switch1} setSwitch={setSwitch1} />
        <Switch switch={switch2} setSwitch={setSwitch2} />
        <Switch switch={switch3} setSwitch={setSwitch3} />
        <button
          className="reset"
          onClick={() => {
            setSwitch1(false);
            setSwitch2(false);
            setSwitch3(false);
          }}
        >
          RESET
        </button>
      </div>
      <div className={`div2 ${switch1 && switch2 && switch3 ? "go" : "noWay"}`}>
        {switch1 && switch2 && switch3 ? "GO !" : "NO WAY!"}
      </div>
    </div>
  );
}

export default App;
