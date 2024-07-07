import React from "react";
import { Modal, Button } from "react-bootstrap";

const CarModal: React.FC = () => {
  return (
    <Modal>
      <Modal.Header>
        <Modal.Title>a</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Price: </p>
        <p>a</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary"></Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CarModal;
