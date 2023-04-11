import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useRef } from "react";

function ModalFav(props) {
    const updtateComment = useRef();

    function submitHandler(e) {
        e.preventDefault();
        let newComment = updtateComment.current.value;
        props.handleCommentUpdate(newComment);
        alert("updated successfully !!!")
        
    }


    return (


        <Modal show={props.show} onHide={props.handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>Add a comment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Add a comment</Form.Label>
                        <Form.Control ref={updtateComment} type="text" placeholder="Enter your comment " />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={(e) => submitHandler(e)}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>






    )
}
export default ModalFav;