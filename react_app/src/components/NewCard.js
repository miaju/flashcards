import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import CardItem from './CardItem';

export default function NewCard(props) {

  function submit() {
    
  }

  return(
    <Form>
      <Form.Group className="mb-3" controlId="newCard.front">
        <Form.Label>Flashcard front</Form.Label>
        <Form.Control as="textarea" rows={1} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="newCard.back">
        <Form.Label>Flashcard back</Form.Label>
        <Form.Control as="textarea" rows={1} />
      </Form.Group>
      <Button variant="primary" type='submit'>
        Submit
      </Button>
    </Form>
  ); 
};