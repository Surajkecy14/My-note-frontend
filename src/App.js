import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './component/Navbar';
import Alert from "./component/Alert";
import Home from './component/Home';
import About from './component/About';
import Profile from './component/Profile';
import CreateAccount from './component/CreateAccount';
import LoginAccount from './component/LoginAccount';
import { useState } from "react";
const App = () => {
  const [alert, setAlert] = useState(null);

const showAlert = (msg, type = "success") => {
  setAlert({ msg, type });

  setTimeout(() => {
    setAlert(null);
  }, 3000); // hide alert after 3 seconds
};

  return (
   <>
  <Router>
   <Navbar/>
   <div  className="sticky-top"  style={{ height: "4px",}}>
  <Alert alert={alert} />
</div>
  <Routes>
    <Route path="/" element={<Home  alert={showAlert}/>} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/createAccount" element={<CreateAccount alert={showAlert} />} />
    <Route path="/loginAccount" element={<LoginAccount alert={showAlert} />} />
  </Routes>
</Router>
  
   </>
  )
}

export default App
