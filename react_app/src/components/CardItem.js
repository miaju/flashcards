import { useState } from "react"
import Card from 'react-bootstrap/Card';

export default function CardItem(props) {
  const [clicked, setClicked] = useState(false);
  const click = () => { setClicked(!clicked) }
  return (
    <Card onClick={click}>
    <Card.Body>
    { clicked ? props.back : props.front }
    </Card.Body>
      
    </Card>
  )
};