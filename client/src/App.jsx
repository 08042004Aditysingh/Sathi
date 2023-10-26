import { useState } from "react";
import SignUp from "./components/LOGIN/register/Signup";
import Login from "./components/LOGIN/login/Login";
import Mlpage from "./components/Mlpage/Mlpage";
import Home from "./components/Home/Home";
import AboutUs from "./components/ABOUT/About"
import VC from "./components/vc/vc2"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/Mlpage" element={<Mlpage/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/vc" element={<VC/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;