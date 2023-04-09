import Movie from "./Movie";
function MovieList(props){
    return(
        <>
        {
            props.movies.map(movie =>{
                return(
                    <Movie movie={movie}/>
                )
            })
        }
        </>
    )
}
export default MovieList;
