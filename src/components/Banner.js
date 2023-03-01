import React, { useEffect, useState } from 'react'
import instance from '../axios'
import request from './request'
import './Banner.css'
function Banner() {
    const [movie,setMovie]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const data =await instance.get(request.fetchOriginals)
            setMovie(data.data.results[
                Math.floor(Math.random() * data.data.results.length)
            ]);
          
        return data
        }
        fetchData()
    },[])

  return (
    <header className='banner' style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,backgroundSize:"cover",backgroundPosition:"center center "}}>
      <div className="banner_contents">
        <h1 className='bannerTitle'>{movie.title||movie.name||movie.original_name}</h1>
        <div className="banner_buttons">
          <button className='bannerBtn'>PLAY</button>
          <button className='bannerBtn'>MY LIST</button>
        </div>
        <h1 className='overview'>{movie.overview}</h1>
      </div>
    </header>
  )
}

export default Banner
