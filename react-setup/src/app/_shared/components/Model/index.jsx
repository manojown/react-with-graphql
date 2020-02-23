import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
function Example({ children, onClick, flag }) {
  const [show, setShow] = useState(flag);
  const handleClose = () => setShow(flag);
  const handleShow = () => setShow(!flag);
  console.log("model is called", flag);
  return (
    <>
      <div style={{ paddingBottom: "10px" }}>
        <Button variant="primary" onClick={handleShow}>
          Create Player
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
