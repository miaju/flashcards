import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import NewCard from './NewCard';
import "./NewCardList.scss";

export default function NewCardList() {
  const [state, setState] = useState({
    numOfCards: 1,
    cards: [{front: "", back: ""}],
    showCardErr: false,
    showTitleErr: false,
    title: "",
    description: ""
  });

  function addCard() {
    const tempCards = state.cards;
    tempCards.push({front: "", back: ""})
    setState({...state, showCardErr: false, cards: tempCards, numOfCards: state.numOfCards + 1})
  }
  function renderCards(cards) {
    for (let i = 0; i < state.numOfCards; i++) {
      cards[i] = (<NewCard key={i} id={i} state={state} setState={setState}/>)
    }
  }
  const cards = []
  renderCards(cards);

  useEffect(() => {
    renderCards(cards)
  }, [state]);

  function checkCards() {
    // console.log(state.cards);
    for (let i of state.cards) {
      if (i.front === "" || i.back === "") {
        return false;
      }
    }
    return true;
  }

  function submit() {
    if (state.title === "") {
      return setState({...state, showTitleErr: true})
    } else if (!checkCards()){
      return setState({...state, showCardErr: true});
    } else {
      console.log(state)
    }
  };

  return(
    <div>
      <div id="top">
        <div id="info">
          <h3>Create a new study set</h3>
          <Button onClick={submit}>Create</Button>
        </div>
        <Form id="title-descrip">
          <Form.Control className="title" value={state.title} placeholder="Enter a title" onChange={(event) => setState({...state, showTitleErr: false,title: event.target.value})}/>
          <Form.Control value={state.description} placeholder="Add a description..." as="textarea" rows={3} onChange={(event) => setState({...state, description: event.target.value})}/>
        </Form>
      </div>
      {(state.showCardErr || state.showTitleErr) && <div className="form-error">
        <h6>Uh-Oh! Can't create new study set: 
        {state.showCardErr && " All terms and descriptions have to be non-empty."}
        {state.showTitleErr && " Title is required."}
        </h6>
      </div>}
      <ul id="new-cards">
        {cards}
        <Card id="add-new-card">
          <Card.Title>
            {state.numOfCards + 1}
            <div id="add" >
              <div id="add-text" onClick={addCard} >
                <FontAwesomeIcon icon={faPlus}/> Add new Card
              </div>
            </div>
          </Card.Title>
        </Card>
      </ul>
      <Button id="bottom-create-btn" onClick={submit}>Create</Button>
    </div>
  )
};