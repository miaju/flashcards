import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import NewCard from './NewCard';

export default function NewCardList() {
  const [state, setState] = useState({
    numOfCards: 3,
    cards: {},
    err: false,
    showErr: false
  });

  function addCard() {
    setState({...state, numOfCards: state.numOfCards + 1})
  }

  const cards = []
  
  for (let i = 0; i < state.numOfCards; i++) {
    cards[i] = (<NewCard key={i} id={i} state={state} setState={setState}/>)
  }

  return(
    <div className="new-cards">
      <div className="form-error">
        {state.showErr && "Something went wrong. Please make sure that the inputs are non-empty and try again."}
      </div>
      <ul>
        {cards}
      </ul>
      <FontAwesomeIcon onClick={addCard} icon={faPlusCircle} />
      <Button onClick={() => console.log(state.cards, state.err)}>Submit</Button>
    </div>
  )
};