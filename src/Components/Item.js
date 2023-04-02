import React, { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { name, img, ingredient, itemUrl } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="card mb-4" style={{ width: "18rem", height: "30rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="success" onClick={handleShow}>
            Check Ingredients
          </Button>
          <Button className="mt-2 " href={itemUrl} variant="success">
            See Complete Recipe
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Here are Ingredients:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {ingredient.map((element, index) => {
                return <li key={index}>{element}</li>;
              })}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Link to={itemUrl} target="_blank" rel="noreferrer">
                <Button variant="success" onClick={handleClose}>
                  View in Detailed
                </Button>
              </Link>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </>
  );
}
