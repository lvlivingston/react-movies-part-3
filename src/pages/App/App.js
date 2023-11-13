import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ActorListPage from "../ActorListPage/ActorListPage";
import LoginPage from "../LoginPage/LoginPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import ActorDetailPage from "../ActorDetailPage/ActorDetailPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import NavBar from "../../components/NavBar/NavBar";
import { movies } from "../../data";

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ? (
              <>
                <NavBar user={user} />
                <Routes>
                  <Route path="/" element={<MoviesListPage movies={movies}/>} />
                  <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />} />
                  <Route path="/actors" element={<ActorListPage movies={movies}/>} />
                  <Route path="/actors/:actorName" element={<ActorDetailPage movies={movies} />} />
                </Routes>
              </>
            ) : (
              <Routes>
                <Route path="/" element={<LoginPage setUser={setUser} />} />
              </Routes>
      )}
    </main>
  );
}

export default App;