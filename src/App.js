import {useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  // Variable with your API Key
  const apiKey = "cae90f52";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    // Make fetch request and store the response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a JavaScript object
    const data = await response.json();
    // Set the Movie state to the received data
    setMovie(data);
  };

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}