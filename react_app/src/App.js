import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
//import axios from "axios";

import useAppData from "./hooks/useAppData";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import { CardList, NewCard } from "./components/Cards/index"
import { Login, Logout, Profile } from "./components/User/index";


export default function App() {
  const {
    state,
    updateLogout
  } = useAppData();

  return (
    <div className="App">
    <BrowserRouter>
      <NavBar logout={updateLogout} user={state.user}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<NewCard/>}/>
        <Route path="/cards" element={<CardList cards={state.curCards} />}/>
        <Route path="/profile" element={<Profile user={state.user} logout={updateLogout} show={state.showLogout}/>}/>
        <Route path="/login" element={<Login/>}/>    
      </Routes>
    </BrowserRouter>
    {state.showLogout && <Logout show={state.showLogout} logout={updateLogout}/>}
    </div>
  );
}
