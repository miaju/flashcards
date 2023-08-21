import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
//import axios from "axios";

import NavBar from "./components/Navbar";
import Home from "./components/Home";
import { CardList, NewCard } from "./components/Cards/index"
import { Login, Logout, Profile } from "./components/User/index";

const testCards = [
  {front: "front one", back: "back one"},
  {front: "front two", back: "back two"},
  {front: "front three", back: "back three"}
];

const user = {
  email: "mia@email.com",
  username: "miaju",
  userId: 1
}

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<NewCard/>}/>
        <Route path="/cards" element={<CardList cards={testCards} />}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/login" element={<Login/>}/>    
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
