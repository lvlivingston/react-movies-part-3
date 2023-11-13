import { useParams } from "react-router-dom";

export default function ActorDetailPage({ movies }) {
    const { actorName } = useParams();

    const actorMovies = movies.filter((movie) => movie.cast.includes(actorName));

    return (
      <div>
        <h2>Movies featuring {actorName}</h2>
        <ul>
          {actorMovies.map((movie) => (
            <li key={movie.title}>{movie.title}</li>
          ))}
        </ul>
      </div>
    );
}