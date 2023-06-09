import {useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalFav from './ModalFav';
function FavList(){
    const [favMovies,setfavMovies ] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    async function getfavMovies(){
        let url =`${process.env.REACT_APP_SERVER_URL}/getAllMovies`;

        let response = await fetch(url,{
            method: 'GET',
        })

        let recivedData = await response.json();
        setfavMovies(recivedData)

       
    }

    async function handleDelete(id){
        let url =`${process.env.REACT_APP_SERVER_URL}/DELETE/${id}`;

        let response = await fetch(url,{

            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
        })
  

        if(response.status === 204){
            getfavMovies();
        }
    }

    async function handleUpdate(id){
        handleShow();
        let url =`${process.env.REACT_APP_SERVER_URL}/UPDATE/${id}`;

        await fetch(url,{

            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },

            
        })
        
    }

    useEffect(()=>{
        getfavMovies();

        console.log(favMovies)

    },[])

  
        const [comment, setComment] = useState("");
      
        function handleCommentUpdate(newComment) {
          setComment(newComment);
        }
    
// let fullpath='https://www.themoviedb.org/t/p/w220_and_h330_face'+props.poster_path;

    return(
        <>

        {
            favMovies && favMovies.map(movie=>{
                return(
                    <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={'https://www.themoviedb.org/t/p/w220_and_h330_face'+movie.poster_path} />
                    <Card.Body>
                      <Card.Title>{movie.title}</Card.Title>
                      <Card.Text>{movie.summary}</Card.Text>
                      <Button variant="primary" onClick={()=>handleDelete(movie.id)}> Delete </Button>
                      <Button variant="primary" onClick={()=>handleUpdate(movie.id)}> Update </Button>
                    </Card.Body>
                  </Card>
                )


            })
        }
        <ModalFav show={show} handleClose={handleClose}  handleCommentUpdate={handleCommentUpdate} comment={comment}/>
        </>
    )
}
 export default FavList;

