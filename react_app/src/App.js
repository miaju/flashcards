import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
//import axios from "axios";

import NavBar from "./components/Navbar";
import CardItem from './components/CardItem';
import Home from "./components/Home";

function App() {

  const testCard = {front: "front", back: "back"};

  return (
    <div className="App">
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/test" element={<CardItem card={testCard}/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
