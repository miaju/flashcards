import { useState } from "react"
import Card from 'react-bootstrap/Card';

import "./CardItem.scss"

export default function CardItem(props) {
  const [clicked, setClicked] = useState(false);
  const click = () => { setClicked(!clicked) }
  const card = props.card;
  const className = clicked ? "back" : "front"

  return (
    <Card bg="dark" text="light" className={className} onClick={click}>
    <Card.Body>
    { clicked ? card.back : card.front }
    </Card.Body>
    </Card>
  )
};