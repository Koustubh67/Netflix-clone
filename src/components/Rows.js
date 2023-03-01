import React, { useEffect, useState } from 'react'
import instance from '../axios' 
import YouTube from 'react-youtube';
import './rows.css'
import movieTrailer from 'movie-trailer';
const base_url='https://image.tmdb.org/t/p/original/'
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=5b294c4bb2d218d32a19330d4258c490&language=en-US
function Rows({title,fetchURL,largeRow}) {
  const [movies,setMovies]=useState([])
  const [trailerURL,settrailerURL]=useState('')
   
    useEffect(()=>{
        async function fetchData(){
            const data= await instance.get(fetchURL)
            console.log(data)
            setMovies(data.data.results);
            
            return data
        }
        fetchData()
    },[fetchURL])
      
    const opts={
      height:'500',
      width:"100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }
    const handleClick=(movie)=>{
      if (trailerURL){
        settrailerURL('')
      }else{
        movieTrailer(movie.title||movie.name||movie.original_name||"")
        .then((url)=>{
          const urlParam=new URLSearchParams(new URL(url).search);
          console.log(settrailerURL(urlParam.get('v')));
        }).catch((err)=> {return err})
      }
    }
  return (
    <div>
      <h1>{title}</h1>
      <div className='posters' >
        {movies.map((movie)=>
          <img key={movie.id} onClick={()=>handleClick(movie)} className={`poster ${largeRow&&'posters_large'}`}  src={`${base_url}${largeRow ?movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
        )}
      </div>
      {trailerURL&&<YouTube videoId={trailerURL} opts={opts}/>}
      
    </div>
    
    
  )
}

export default Rows
