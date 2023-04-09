import MovieList from './MovieList';
import { useState, useEffect } from 'react';
function Home() {
    const [movies, setMovies] = useState([])

    async function getMovies() {
        const url =process.env.REACT_APP_SERVER_URL;
        const response = await fetch(`${url}/trending`);
        console.log(response);
        const MoviesData = await response.json();
        // console.log(MoviesData);
        // console.log("hi");
        setMovies(MoviesData);
    }

    useEffect(() => {
        getMovies();
    }, []);


    return (
        <>
            <MovieList movies={movies} />
        </>
    )
}
export default Home;
