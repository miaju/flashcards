import {useState} from "react";

import NewCard from './NewCard';

export default function NewCardList() {
  const [state, setState] = useState({
    numOfCards: 3,
    cards: {}
  });

  function updateCards(cards) {
    setState({...state, cards: cards});
  }

  const cards = []
  
  for (let i = 0; i < state.numOfCards; i++) {
    cards[i] = (<NewCard key={i}/>)
  }

  return(
    <div className="new-cards">
      <ul>
        {cards}
      </ul>
    </div>
  )
};