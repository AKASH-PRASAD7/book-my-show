import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
// Routing
import { Routes, Route } from 'react-router-dom';
//Pages
import HomePage from "./Pages/Home-Page";
import MoviePage from "./Pages/Movie-Page";
import Plays from "./Pages/Plays";

function App() {
  return (
    <Routes >
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<Plays />} />
    </Routes>
  );
}

export default App;
