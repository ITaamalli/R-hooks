import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddMovie = (props) => {
        const nav = useNavigate();
        const { movies, setmovies} = props;
        const [id, setid] = useState ("");
        const [title, settitle] = useState ("");
        const [description, setdescription] = useState ("");
        const [Url, setUrl] = useState ("");
        const [rating, setrating] = useState ("");
    
    const handlesubmit= (e) => {
        e.preventDefault();
        setmovies([...movies, {
            id: id,
            title: title,
            description: description,
            Url: Url,
            rating: rating,
        }]);
        nav ("/");
    }
    
  return (
    <div>
        <form onSubmit={handlesubmit} >
            <div>
                <label>id</label>
                <input type='number' onChange={ (e)=> setid(e.target.value)} />
            </div>
            <div>
                <label>title</label>
                <input type='text' onChange={ (e)=> settitle(e.target.value)}/>
            </div>
            <div>
                <label>description</label>
                <input type='text' onChange={ (e)=> setdescription(e.target.value)}/>
            </div>
            <div>
                <label>Url</label>
                <input type='text'onChange={ (e)=> setUrl(e.target.value)}/>
            </div>
            <div>
                <label>rating</label>
                <input type='number' onChange={ (e)=> setrating(e.target.value)}/>
            </div>
            <input type='submit'/>
        </form>
    </div>)
  
}

export default AddMovie