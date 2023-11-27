import React from "react"
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import About from "./Components/About"
function App() {
  return (
    <div className="App">
    <Login /> 
      <Register />
      <About/>
    </div>
  );
}

export default App;
