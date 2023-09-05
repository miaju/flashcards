import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function NewCard() {
  const [state, setState] = useState({
    front: '',
    back: '',
    err: false
  });

  return(
    <li>
      <div className="form-error">
        {state.showErr && "Something went wrong. Please make sure that the inputs are non-empty and try again."}
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="newCard.front">
          <Form.Label>Flashcard front</Form.Label>
          <Form.Control value={state.front} onChange={(event) => {setState({...state, front: event.target.value, err: false})}} as="textarea" rows={1} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="newCard.back">
          <Form.Label>Flashcard back</Form.Label>
          <Form.Control value={state.back} onChange={(event) => {setState({...state, back: event.target.value, err: false})}} as="textarea" rows={1} />
        </Form.Group>
      </Form>
    </li>
  )
}