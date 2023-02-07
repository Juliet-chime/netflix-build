import React from 'react'
import { useSelector } from 'react-redux';
import {Navigate,useLocation} from "react-router-dom";
import { selectUser } from '../../features/user/userSlice';

const ProtectedRoute = ({children}) => {

  const user = useSelector(selectUser)

    let location = useLocation()
    
    if (user){
      return children
    }

    return (<Navigate to='/login' state={{from:location}} replace/>)
  //   if(user?.accessToken === ''){
  //       return (<Navigate to='/login' state={{from:location}} replace/>)
  //   }
  // return children
}

export default ProtectedRoute