import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Logout({show, logout}) {
  return (
      <Modal
      size="lg"
      centered
      show={show}
      onHide={() => logout(false)}
      
      >
        <Modal.Header closeButton>
          <Modal.Title>Wait!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to logout? You will have to login again to access your study sets and other data. </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => logout(false)}>Close</Button>
          <Button variant="danger" onClick={() => console.log("logout")}>Logout</Button>
        </Modal.Footer>
      </Modal>
  )
}