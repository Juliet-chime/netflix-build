import React from 'react'
import {Navigate,useLocation} from "react-router-dom";


const ProtectedRoute = ({children}) => {

    let location = useLocation()

  const token =  localStorage.getItem('token')
    
    if (token){
      return children
    }

    return (<Navigate to='/login' state={{from:location}} replace/>)
  //   if(user?.accessToken === ''){
  //       return (<Navigate to='/login' state={{from:location}} replace/>)
  //   }
  // return children
}

export default ProtectedRoute