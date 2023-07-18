import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
//import axios from "axios";

import NavBar from "./components/Navbar";
import CardList from "./components/CardList"
import Home from "./components/Home";
import NewCard from "./components/NewCard";

const testCards = [
  {front: "front one", back: "back one"},
  {front: "front two", back: "back two"},
  {front: "front three", back: "back three"}
];

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/test" element={<NewCard/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
