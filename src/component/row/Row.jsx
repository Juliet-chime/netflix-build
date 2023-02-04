import React, { useEffect, useState } from 'react'

import axios from '../../axios/axios'
import './Row.css'
import requests from '../../axios/request'

const Row = ({title,fetchurl,isLargeRow = false}) => {

    const [movies,setMovies] = useState([])

    const imgUrl = 'https://image.tmdb.org/t/p/original/'

    console.log(fetchurl)

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchurl);
            console.log(request)
             setMovies(request.data.results);
            return request;
           }
           fetchData();
    },[fetchurl])

    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchLatest);
            console.log(request,'sdfghjkjhgfd')
            //  setMovies(request.data.results);
            return request;
           }
           fetchData();
    },[])

    console.log(movies,'roww')

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='movie_holder'>
            {movies.map((movie,index)=>
            ((isLargeRow && movie?.poster_path)|| (!isLargeRow && movie?.backdrop_path)) && ( <div key={index}>
                <img src={`${imgUrl}${isLargeRow ? movie?.poster_path: movie?.backdrop_path}`} alt={movie?.name || movie?.title} className={`row_poster ${isLargeRow && 'row_posterLarge'}`}/>
            </div>))}
        </div>
    </div>
  )
}

export default Row