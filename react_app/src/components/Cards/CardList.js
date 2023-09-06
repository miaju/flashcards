import { useState } from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

import CardItem from "./CardItem";
import './CardList.scss';

export default function CardList({ curCards }) {
  const [state, setState] = useState({
    curIndex: 0,
    clicked: false,
    hint: false
  })
  const click = () => { setState({...state, clicked: !state.clicked}) }

  let cards = [];

  if (curCards) {
    cards = curCards.cards.map((card) => {
      return(
        <CardItem
          hint={state.hint}
          state={state}
          setState={setState}
          card={card}
          clicked={state.clicked}
          click={click}
        />
      );
    });
  };

  function changeCard(action) {
    if (action === "prev" && state.curIndex !== 0) {
      return setState({...state, curIndex: state.curIndex - 1, clicked: false, hint: false});
    }

    if (action === "next" && state.curIndex !== curCards.length) {
      return setState({...state, curIndex: state.curIndex + 1, clicked: false, hint: false});
    }

  }

  return (
    <div id='show-cards'>
      <h4 id='title'>{curCards.title}</h4>
      {cards[state.curIndex]}
      <div id="bottom-btns">
        <Button disabled={ state.curIndex === 0} onClick={() => changeCard("prev")}><FontAwesomeIcon icon={faArrowLeftLong}/></Button>
        <div>{state.curIndex + 1} / {curCards.cards.length}</div>
        <Button disabled={ state.curIndex === curCards.cards.length - 1 } onClick={() => changeCard("next")}><FontAwesomeIcon icon={faArrowRightLong}/></Button>
      </div>
      <h5 id="user">Created by: {curCards.user}</h5>
    </div>
  );
};