import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import CardItem from './CardItem';

export default function NewCard(props) {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [clicked, setClicked] = useState(false);
  const [showErr, setShowErr] = useState(false);

  const click = () => { setClicked(!clicked) }

  function submit() {
    if (front === '' || back === '') {
      return setShowErr(true);
    }
    console.log(front, back);
  }

  return(
    <>
      <div className="form-error">
        {showErr && "Something went wrong. Please make sure that the inputs are non-empty and try again."}
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="newCard.front">
          <Form.Label>Flashcard front</Form.Label>
          <Form.Control value={front} onChange={(event) => {setFront(event.target.value); setShowErr(false)}} as="textarea" rows={1} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="newCard.back">
          <Form.Label>Flashcard back</Form.Label>
          <Form.Control value={back} onChange={(event) => {setBack(event.target.value); setShowErr(false)}} as="textarea" rows={1} />
        </Form.Group>
      </Form>
      <CardItem card={{front, back}} clicked={clicked} click={click}/>
      <Button variant="primary" onClick={submit}>
        Submit
      </Button>
    </>
  ); 
};