import { useParams } from "react-router-dom";

export default function MovieDetailPage({movies}) {
  let { movieName } = useParams();
  let movie = movies.find(mov => mov.title === movieName)

  return (
    <div>
      <div>
        <h1>{movie.title}</h1>
        <h4>Release Date: {new Date(movie.release_date).toLocaleDateString()}</h4>
        <h3>Cast Members:</h3>
        <ul>
          {
            movie.cast.map(actor => {
              return <li key={actor}>{actor}</li>
            })
          }
        </ul>
      </div>
      <img src={`${movie.posterPath}`} alt=""/>
    </div>
  )
}