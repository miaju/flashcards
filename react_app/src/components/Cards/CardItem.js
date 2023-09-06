import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

import Card from 'react-bootstrap/Card';

import "./CardItem.scss"

export default function CardItem({clicked, click, card, hint, setState, state}) {
  const className = clicked ? "back" : "front"

  return (
    <Card bg="dark" text="light" className={className} >
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
          {clicked ? "Description" : "Term"}
          {hint ? (<div id="hint" onClick={() => setState({...state, hint: !state.hint})}>{card.back.slice(0,1)}------</div>) : (!clicked && <div id="hint" onClick={() => setState({...state, hint: !state.hint})}><FontAwesomeIcon icon={faLightbulb}/> Get a hint</div>)}
        </Card.Subtitle>
        <Card.Text onClick={() => {setState({...state, hint: false}); click()}}>
        { clicked ? card.back : card.front }
        </Card.Text>
      </Card.Body>
    </Card>
  )
};