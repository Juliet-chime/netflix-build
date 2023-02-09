import React from 'react'
import './HomeScreen.css'
import Navbar from '../../component/navbar/Navbar'
import Banner from '../../component/banner/Banner'
import Row from '../../component/row/Row'
import requests from '../../axios/request'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <Navbar/>
      <Banner/>
      <Row 
      title='TRENDING'
      fetchurl={requests.fetchTrending}
       isLargeRow={true}
      />
        <Row 
      title='TOP RATED'
      fetchurl={requests.fetchTopRated}
      />
      <Row 
      title='POPULAR'
      fetchurl={requests.fetchPopuplar}
       isLargeRow={true}
      />
       <Row 
      title='UPCOMING'
      fetchurl={requests.fetchUpcoming}  
      /> 
      </div>
  )
}

export default HomeScreen