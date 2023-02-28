import React, { useState,useEffect } from 'react'
import "./row.css"
import {imageUrl} from "../../constance/constance"
import axios from "../../axios";


function Row(props) {
const [movies,setMovies]=useState([])


 useEffect(() => {
 axios.get(props.url).then(response=>{
 setMovies(response.data.results)
 }).catch(error=>{
   
 })
 
},[])

  return (
    <div>
      <div className='row'>
       <h2>{props.title}</h2>
      <div className='posters'>
      {movies.map((obj)=>{ 
        return(
        <div>
        <img  className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
        <h6 >{obj? obj.title : ""}</h6>
      
       </div>
      
      )})}
      </div>
    </div>
    </div>
  )
}

export default Row