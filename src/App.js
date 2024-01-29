import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./index.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {

  return (
    <div className="app">
      <h1>MovieLand</h1>
    </div>

  );
};

export default App;