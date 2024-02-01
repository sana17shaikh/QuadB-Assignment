import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Component/Home'
import Button from './Component/Button'
import Navbar from './Component/Navbar'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const api = await res.json();
      console.log(api)
      setData(api);
    };
  getMovies();
  },[]);
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path="/" element={data.map((item, index) => <Home key={index} item={item} index={index} />)} />
      <Route path="movie/:id" element={<Button data={data}/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
