import { useState } from "react"
import Card from 'react-bootstrap/Card';

export default function CardItem(props) {
  const [clicked, setClicked] = useState(false);
  const click = () => { setClicked(!clicked) }
  const card = props.card;
  return (
    <Card onClick={click}>
    <Card.Body>
    { clicked ? card.back : card.front }
    </Card.Body>
      
    </Card>
  )
};