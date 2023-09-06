import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons'

import "./NewCard.scss";

export default function NewCard({id, state, setState}) {
  const [card, setCard] = useState({
    front: '',
    back: '',
  });

  function updateCardFront(event) {
    setCard({...card, front: event.target.value});
    const cards = state.cards;
    cards[id] = card;
    setState({
      ...state,
      cards,
      showCardErr: false
    });
  }

  function updateCardBack(event) {
    setCard({...card, back: event.target.value});
    const cards = state.cards;
    cards[id] = card;
    setState({
      ...state,
      cards,
      showCardErr: false
    });
  }

  function del() {
    const tempCards = state.cards;
    const newCount = state.numOfCards -1 
    tempCards.splice(id, 1);
    setState({
      ...state,
      cards: tempCards,
      numOfCards: newCount
    })
  }

  function swap() {
    const temp = card.front;
    setCard({ 
      ...card,
      front: card.back,
      back: temp
    });
  }

  return(
    <Card id="new-card">
    <Card.Title>
      {id + 1}
      <FontAwesomeIcon id='delete' icon={faTrashCan} onClick={del}/>
    </Card.Title>
      <Form id="form">
        <Form.Control id="input" value={card.front} onChange={(event) => updateCardFront(event)} as="textarea" rows={1} placeholder="Enter term"/>
        <FontAwesomeIcon id="swap-icon" icon={faRightLeft} onClick={swap}/>
        <Form.Control id="input" value={card.back} onChange={(event) => updateCardBack(event)} as="textarea" rows={1} placeholder="Enter description"/>
      </Form>
    </Card>
      
  )
}