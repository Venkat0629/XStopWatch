import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const [timer, setTimer] = useState(0);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const extraSecs = secs % 60;
    return `${mins}:${extraSecs < 10 ? "0" : ""}${extraSecs}`;
  };

  const toggleTime = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  const resetTime = () => {
    setToggle(false);
    setTimer(0);
  };

  useEffect(() => {
    let intervalId;
    if (toggle) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [toggle]);

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(timer)}</p>
      <button onClick={toggleTime}>{toggle ? "Stop" : "Start"}</button>
      <button onClick={resetTime}>Reset</button>
    </div>
  );
}

export default App;
