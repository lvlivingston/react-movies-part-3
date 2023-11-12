function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  export default function ActorCard({ actor }) {
    let num = getRandomNumber(250, 400);
  
    return (
      <div>
        <div>
          <h1>{actor}</h1>
        </div>
      </div>
    );
  }