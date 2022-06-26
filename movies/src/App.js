import React, { useState } from 'react';
import Navbar from './components/layouts/Navbar';
import {MoviesSelected} from './components/MoviesSelected';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import Filter from './components/Filter';
import { Route, Routes } from 'react-router-dom';
import MoviesDescription from './components/MoviesDescription'

function App() {
  const [movie, setMovie]= useState(MoviesSelected);
  const[filters,setFilters]= useState('');
  const [rate, setRate]= useState(0);

const handleAddMovie=(NewMovie)=>{
  console.log(NewMovie);
    setMovie([...MoviesSelected,NewMovie])
    
  }
  

  return (
    <div className='App bg-dark'>
      <Routes>
      <Route path="/" element={
      <div>
      <Navbar />
      <Filter setFilters={setFilters} setRate={setRate} rate={rate}/>
      < MovieList MoviesSelected={movie.filter((el)=>el.name.toUpperCase().includes(filters.toUpperCase().trim()) && (el.rating == rate))}/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <AddMovie handleAddMovie={handleAddMovie}/>
      </div>
      </div>
      }/>
      <Route path="/MoviesDescription/:id" element={<MoviesDescription MoviesSelected={MoviesSelected}/>}/>
    
    </Routes>
    </div>
  
  );
}

export default App;
