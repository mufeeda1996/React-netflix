import React, { useEffect, useState } from 'react'
import "./Banner.css"
import {API_KEY,imageUrl} from "../../constance/constance"
import axios from "../../axios";


function Banner() {
const [movie,setMovie]=useState("")

 useEffect(() => {
   axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
   console.log(response.data.results[1])
   setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)])
   })

 },[])

 
 
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'
    >  
         <div className='content'>
            <h1 className='tittle'> {movie?.title || movie.name || movie?.original_name}</h1>
               <div className='banner-buttons'>
                 <button className='button' ><i class="fa-sharp fa-solid fa-play" />Play</button>
                 <button className='button' >< i class="fa-solid fa-circle-info" /> More Info</button>
                 <h1 className='description'>{movie ? movie.overview : ""}</h1></div>
              </div>
             
       <div className='shade_bottom'>
        
       </div>
    </div>
  )
}

export default Banner