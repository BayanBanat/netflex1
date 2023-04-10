import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from 'react';

function ModalMovie(props) {
  console.log("99",props.movie.title);
  
  const commentRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();
    let userComment = commentRef.current.value;

    let newMovie = { ...props.movie, userComment }
    console.log(newMovie);

    props.commentHandler(newMovie, newMovie.id);

    let url = `${process.env.REACT_APP_SERVER_URL}/addMoveis`;

    let data = {
      title: props.movie.title,
      poster_path: props.fulPath,
      overview: props.movie.overview,
      comment: props.movie.comment

    }
    console.log("333",data);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const receivedData = await response.json();
    console.log(1111, receivedData)

    if (response.status === 201) {
      alert("successfully added to database")
    }

  }
  return (
    <Modal show={props.show} onHide={props.handleClose} >
      <Modal.Header closeButton>
        <Modal.Title>{props.movie.title}</Modal.Title>
      </Modal.Header>
      <img src={props.fulPath} alt={props.movie.title} />
      <Modal.Body>{props.movie.overview}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Add a comment</Form.Label>
            <Form.Control ref={commentRef} type="text" placeholder="Enter your comment " />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(e) => submitHandler(e)}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ModalMovie;
