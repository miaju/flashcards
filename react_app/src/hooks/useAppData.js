import { useState, useEffect } from "react";
//import axios from "axios";

const testCards = [
  {front: "front one", back: "back one"},
  {front: "front two", back: "back two"},
  {front: "front three", back: "back three"}
];

const testUser = {
  email: "mia@email.com",
  username: "miaju",
  userId: 1
}

export default function useAppData() {
  const [state, setState] = useState({
    user: testUser,
    curCards: testCards,
    showLogout: false,
    newCards: []
  });

  const updateLogout = show => setState({...state, showLogout: show});
  
  function updateNewCards(newCardsArr) {
    setState({...state, newCards: newCardsArr});
  }
   
  return {
    state,
    updateLogout,
  }
}