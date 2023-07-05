import {useEffect, useState} from "react";

import CardItem from "./CardItem";
import Button from 'react-bootstrap/Button';

export default function CardList(props) {
  const [curIndex, setCurIndex] = useState(null)
  let cards = [];

  useEffect(() => {
    setCurIndex(0);
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

    if (action === "prev" && curIndex !== 0) {
      return setCurIndex(curIndex - 1);
    }

    if (action === "next" && curIndex !== cards.length) {
      return setCurIndex(curIndex + 1);
    }

  }

  return (
    <>
    {cards[curIndex]}
    <Button disabled={ curIndex === 0} onClick={() => changeCard("prev")}>Prev</Button>
    <Button disabled={ curIndex === cards.length - 1 } onClick={() => changeCard("next")}>Next</Button>
    </>
  );
};