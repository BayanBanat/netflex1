import MovieList from './MovieList';
import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Cards from './Cards';
function Home() {
    const [movies, setMovies] = useState([])

    async function getMovies() {
        const url =process.env.REACT_APP_SERVER_URL;
        const response = await fetch(`${url}/trending`);
        console.log(response);
        const MoviesData = await response.json();
        console.log(MoviesData);
        // console.log("hi");
        setMovies(MoviesData);
    }

    function commentHandler(newMovie , id){
        movies.map(movie=>{
            if(movie.id === id){
                
                movie.comment = newMovie.userComment
                console.log(11111,movie)
                return movie;
            }else{
                return movie;
            }
        })
    }

    useEffect(() => {
        getMovies();
    }, []);


    return (
        <>
            <MovieList movies={movies} commentHandler={commentHandler} />
        </>
    )
}
export default Home;















