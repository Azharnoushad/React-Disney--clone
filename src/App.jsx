import React from "react";
import {  Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return <div className="app">
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route  path="/home" element={<Home/>} ></Route>
    </Routes>
    
  </div>;
};

export default App;
