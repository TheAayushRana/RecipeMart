import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

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
                    {/* <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text> */}
                    <Button variant="primary" onClick={handleShow}>
                        Check Ingredients
                    </Button>
                    <Button className="mt-2 " href={itemUrl} variant="primary">
                        See Complete Recipe
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>

                            <Modal.Title>Here are Ingredients:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {ingredient.map((element) => {
                                return <li>{element}</li>
                            })}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <a href={itemUrl}>
                                <Button variant="primary" onClick={handleClose}>
                                    View in Detailed
                                </Button></a>
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
            </Card>
        </>
    );
}

    //   render(<Item />);

    // return <div>
    //     <div className="card mb-4" style={{ width: "18rem", height: "28rem" }}>
    //         <img src={img} className="card-img-top" alt="" />
    //         <div className="card-body">
    //             <h5 className="card-title">{name}</h5>
    //             <p className="card-text"></p>
    //             <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    //                 Check Ingredients{i}
    //             </button>
    //             <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //                 <div className="modal-dialog">
    //                     <div className="modal-content">
    //                         <div className="modal-header">
    //                             <h5 className="modal-title" id="exampleModalLabel">Here are Ingredients:</h5>
    //                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fas fa-times"></i></button>
    //                         </div>
    //                         <div className="modal-body" style={{textAlign:"left"}}>
    //                             {ingredient.map((element)=>{
    //                                 return <li>{element}</li>
    //                             })}
    //                         </div>
    //                         <div className="modal-footer">
    //                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //                             <a href={itemUrl}>
    //                             <button type="button" className="btn btn-primary">View in Detailed</button></a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>;

