import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
//import axios from "axios";

import NavBar from "./components/Navbar";
import CardItem from './components/CardItem';
import CardList from "./components/CardList"
import Home from "./components/Home";

function App() {

  const testCards = [
    {front: "front one", back: "back one"},
    {front: "front two", back: "back two"}
  ];

  return (
    <div className="App">
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/test" element={<CardList cards={testCards}/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
