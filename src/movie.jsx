import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Movie = () => {
    const [title,setTitle]=useState()
    const [data,setData]=useState([''])

    const handleChange=(event)=>{
        setTitle(event.target.value)

    }
    const handleSubmit=async()=>{
        setTitle(title)
        let response=await axios.get(`https://www.omdbapi.com/?s=${title}&apikey=a5ef1268`)
        console.log(response.data.Search);
        setData(response.data.Search)

    }
  return (
    <div>
        <div className='one'>
        <input type="text" name="" onChange={handleChange} placeholder='enter title' id="" />
        <button onClick={handleSubmit}>search</button>
        </div>

<div>
    <div className='mainbox'></div>
    {data.map((item)=>(
        <>
        <div className='box'>
       <Link to={`/detail/${item.imdbID}`}> <img src={item.Poster} alt="" /></Link>
        <h2>{item.Title}</h2>
        </div>
        </>
    ))}
</div>
    
    </div>
  )
}
export default Movie