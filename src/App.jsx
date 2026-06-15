
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

import "./pages/head.css";

import './App.css'
import { HashRouter } from "react-router-dom";
import { NavLink, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/profile";
import Services from "./pages/Services";

function App() {

  return(
    <div>

    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Contact">Conatct</NavLink>

      <NavLink to="/Login"> Login </NavLink>
      <NavLink to="/Register" > Register</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/Profile"> Profile </NavLink>
      {/* <a href="/">Home</a>
      <a href="/About">About</a>
      <a href="/Contact">Contact</a> */}
    </nav>

      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/About" element={ <About />} />
        <Route path="/Contact" element={ <Contact />} /> 

        {/* <Route path="/Login" element={ <Login /> } /> */}
        <Route path="/Register" element={ <Register />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/Profile" element={ <Profile />} /> 


        <Route path="*" element={<h1>🚫 404 Error Found <br />Now you can see why the Login page is not working....<br /> <br />
          ❗ Read This First ❗ ↓↓ <br /> <br />
          The reason is that the Login component has not been added inside the Routes section in App.jsx <br />
          Go to the App.jsx file and make sure the Login route is included inside Routes. Once you add the route correctly, the Login page will be displayed and work as expected.</h1> } />
      </Routes>
      
      {/* < Home /> 
      < About /> 
      < Contact /> */}
    </div>
  )

}

export default App
