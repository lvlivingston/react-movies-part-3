import MovieCard from "../../components/MovieCard/MovieCard";

export default function MoviesListPage(props) {
  return (
    <div className="DivBackground">
      {
        props.movies.map(movie => {
          return <MovieCard key={movie.title} movie={movie} />
        })
      }
    </div>
  )
}