import { useParams } from "react-router-dom";
import "./MovieDetailPage.css";

export default function MovieDetailPage({ movies }) {
  const { movieName } = useParams();
  const movie = movies.find(mov => mov.title === movieName)

  return (
    <>
      <div className="DivBackground Flex">
        <div className="Text">
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
        <img src={`${movie.posterPath}`} alt="" className="Photo"/>
      </div>
    </>
  )
}