import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalMovie from "./ModalMovie";
import {useState} from 'react';

function Movie(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let fulPath='https://www.themoviedb.org/t/p/w220_and_h330_face'+props.movie.poster_path;

    return(
      <>
       <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={fulPath} />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Button variant="primary" onClick={handleShow}>show details</Button>
        </Card.Body>
      </Card>

      <ModalMovie show={show}  handleClose={handleClose} movieData = {props.movie} fulPath={fulPath}/>
      </>
    )
    }
    
    export default Movie;