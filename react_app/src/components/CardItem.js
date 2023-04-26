import { useState } from "react"
import Card from 'react-bootstrap/Card';

export default function CardItem(props) {
  const [clicked, setClicked] = useState(false);
  const click = () => { setClicked(!clicked) }
  return (
    <Card onClick={click}>
      hello
    </Card>
  )
};