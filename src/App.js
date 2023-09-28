import './App.css';
import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AddMovie from './pages/AddMovie';
import Movie from './pages/Movie';

const App = () => {
  const [movies, setmovies] = 
    useState([
      {id:0, 
        title:"first movie", 
      description:"this is the first movie",
      Url:"https://www.youtube.com/watch?v=SLfhMt5OUPI&ab_channel=WebDevSimplified", 
      rating:1},

      {id:1, 
        title:"second movie", 
      description:"this is the second movie",
      Url:"https://www.youtube.com/watch?v=SLfhMt5OUPI&ab_channel=WebDevSimplified", 
      rating:2},

      {id:2, 
        title:"third movie", 
      description:"this is the third movie",
      Url:"https://www.youtube.com/watch?v=SLfhMt5OUPI&ab_channel=WebDevSimplified", 
      rating:3},
    ]);
  return (
    <div>
      <Routes>
        <Route path="/"element={<HomePage movies={movies} />} />;
        <Route path="/add"element={<AddMovie movies={movies} setmovies={setmovies}/>} />;
        <Route path="/movie/:id"element={<Movie movies={movies} setmovies={setmovies} />} />;
      </Routes>
    </div>
  );

};

export default App;
