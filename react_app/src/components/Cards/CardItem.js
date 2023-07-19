import Card from 'react-bootstrap/Card';

import "./CardItem.scss"

export default function CardItem(props) {

  const card = props.card;
  const className = props.clicked ? "back" : "front"

  return (
    <Card bg="dark" text="light" className={className} onClick={props.click}>
    <Card.Body>
    { props.clicked ? card.back : card.front }
    </Card.Body>
    </Card>
  )
};