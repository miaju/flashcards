import {useEffect, useState} from "react";

import CardItem from "./CardItem";
import Button from 'react-bootstrap/Button';

export default function CardList(props) {
  const [curCard, setCurCard] = useState(null)
  let cards = [];

  useEffect(() => {
    setCurCard(0);
  }, [])

  if (props.cards) {
    cards = props.cards.map((card) => {
      return(
        <CardItem
          card={card}
        />
      );
    });
  };

  function changeCard(action) {

    if (action === "prev" && curCard !== 0) {
      return setCurCard(curCard - 1);
    }

    if (action === "next" && curCard !== cards.length) {
      return setCurCard(curCard + 1);
    }

  }

  return (
    <>
    {cards[curCard]}
    <Button disabled={ curCard === 0} onClick={() => changeCard("prev")}>Prev</Button>
    <Button disabled={ curCard === cards.length - 1 } onClick={() => changeCard("next")}>Next</Button>
    </>
  );
};