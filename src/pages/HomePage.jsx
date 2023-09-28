import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = (props) => {
    const nav = useNavigate();
    const {movies} = props;
  return (
    <div>
        {movies.map ((el, index) => (
            <div  key={index} >
            <p>title:{el.title} </p>
            <p>description:{el.description} </p>
            <p>rating:{el.rating} </p>
            <button onClick={()=> nav(`/movie/${el.id}`) } > More info </button>
            </div>
        ) )}
        
    </div>
  ) 
};

export default HomePage