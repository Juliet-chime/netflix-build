import React, { useEffect, useState } from 'react'

import axios from '../../axios/axios'
import './Row.css'
import requests from '../../axios/request'
import womanKing from '../../assest/video/womanKing.mp4'
import HoverVideoPlayer from 'react-hover-video-player';
import Loader from '../loader/Loader'
import { ColorRing } from 'react-loader-spinner'

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
<div style={{width:'200px',marginRight:'10px'}}>
      <HoverVideoPlayer
      videoSrc={womanKing}
      pausedOverlay={
        <img
          src={`${imgUrl}${isLargeRow ? movie?.poster_path: movie?.backdrop_path}`}
          alt={movie?.name || movie?.title} 
        className={`row_poster`}
        />
      }
      loadingOverlay={
        <div>
         <Loader loadComponent={ColorRing} height="30" width="30" visible={true} colors={['#fff', '#fff', '#fff', '#fff', '#fff']}/>
        </div>
      }
      muted={false}
      volume={0.1}
      controls
      style={{
        width: '100%',
      }}
    />
</div>
                {/* <img src={`${imgUrl}${isLargeRow ? movie?.poster_path: movie?.backdrop_path}`} alt={movie?.name || movie?.title} className={`row_poster ${isLargeRow && 'row_posterLarge'}`}/> */}
            </div>))}
        </div>
    </div>
  )
}

export default Row