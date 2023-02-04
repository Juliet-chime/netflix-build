import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios/axios'
import requests from '../../axios/request'

const Banner = () => {

  const [movie, setMovie] = useState([])

  useEffect(()=>{
 async function fetchData() {
  const request = await axios.get(requests.fetchTrending)
  let random = Math.floor(Math.random()*request.data.results.length)
   setMovie(request.data.results[random]);
  return request;
 }
 fetchData()
  },[])

  console.log(movie,'ghjgs')

    const truncateText = (string,n) => {
      return string?.length > n ? string.substring(0,n-1) + '....': string;
    }

  return (
    <header 
       className='banner' style={{
        backgroundSize:'cover',
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition:"center center"
    }}>
        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.name || movie?.title}
            </h1>
            <div className="banner_button">
                <button className='banner_btn'>Play</button>
                <button className='banner_btn'>My List</button>
            </div>
            <h1 className="banner_description">{truncateText(movie?.overview,150)}</h1>
        </div>
        <div className="banner_fadebottom"/>
    </header>
  )
}

export default Banner