import React from "react";
import {  Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";

const App = () => {
  return <div className="app">
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
    </Routes>
    
  </div>;
};

export default App;
