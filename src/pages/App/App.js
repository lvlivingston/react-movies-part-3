import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ActorListPage from "../ActorListPage/ActorListPage";
import LoginPage from "../LoginPage/LoginPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import MoviesListPage from "../MoviesListPage/MoviesListPage";
import NavBar from "../../components/NavBar/NavBar";

function App() {
  const [user, setUser] = useState({});
  
  return (
    <main className="App">
      {user ? (
              <>
                <NavBar user={user} />
                <Routes>
                  <Route path="/" element={<MoviesListPage />} />
                  <Route path="/movies/:movieName" element={<MovieDetailPage />} />
                  <Route path="/actors" element={<ActorListPage />} />
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
