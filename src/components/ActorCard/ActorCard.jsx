import { Link } from "react-router-dom";

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  export default function ActorCard({ actor }) {
    let num = getRandomNumber(250, 400);
  
    return (
      <>
      <Link to={`/actors/${actor}`}>
        <div>
            <div>
            <h1>{actor}</h1>
            </div>
        </div>
      </Link>
      </>
    );
  }