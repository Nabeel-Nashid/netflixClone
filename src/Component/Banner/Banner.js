import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from "../../constant/constants"
import "./Banner.css";
import axios from "../../axios"
function Banner() {
    const[movie, setMovie]=useState()
    console.log("movies",movie);
  useEffect(()=>{
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((respond)=>{
        console.log(respond.data.results[0]);
        setMovie(respond.data.results[3]);
      })
  },[])
  return (
    <div className='banner'
          style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
      <div className='content'>
        <h1 className='title'>{movie?.title}</h1>
        <div className='banner_button'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie?.overview}</h1>
      </div>

      <div className="fade_bottom">

      </div>
    </div>
  )
  }

export default Banner
