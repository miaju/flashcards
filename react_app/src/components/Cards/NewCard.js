import { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function NewCard({id, state, setState}) {
  const [card, setCard] = useState({
    front: '',
    back: '',
  });

  function updateCardFront(event) {
    setCard({...card, front: event.target.value});
    const cards = {
      ...state.cards
    };
    cards[id] = card;
    setState({
      ...state,
      cards,
      err: (card.front === "" || card.back === "")
    });
    console.log(card);
  }

  function updateCardBack(event) {
    setCard({...card, back: event.target.value});
    const cards = {
      ...state.cards
    }
    cards[id] = card;
    setState({
      ...state,
      cards,
      err: (card.front === "" || card.back === "")
    });
  }

  return(
    <li>
      <Form>
        <Form.Group className="mb-3" controlId="newCard.front">
          <Form.Label>Flashcard front</Form.Label>
          <Form.Control value={card.front} onChange={(event) => updateCardFront(event)} as="textarea" rows={1} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="newCard.back">
          <Form.Label>Flashcard back</Form.Label>
          <Form.Control value={card.back} onChange={(event) => updateCardBack(event)} as="textarea" rows={1} />
        </Form.Group>
      </Form>
    </li>
  )
}