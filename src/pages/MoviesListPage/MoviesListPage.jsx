import MovieCard from "../../components/MovieCard/MovieCard";
// import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";

export default function MoviesListPage(props) {
  return (
    <div>
      {
        props.movies.map(movie => {
          return <MovieCard key={movie.title} movie={movie} />
        })
      }
    </div>
  )
}
