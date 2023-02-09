import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './pages/homeScreen/HomeScreen';
import {Route,Routes} from "react-router-dom";
import ProtectedRoute from './component/protectedRoute/ProtectedRoute';
import Signin from './pages/signin/Signin';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './features/user/userSlice';
import Profile from './pages/profile/Profile';
import VideoTest from './component/VideoTest';


function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
  const unsubscribe =  auth.onAuthStateChanged((user)=>{
    if(user){
      dispatch(login(user))
    } else{
      dispatch(logout())
    }
    });

    return unsubscribe;
      },[dispatch])
  return (
    <div className="app">
      <Routes>
      <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <HomeScreen/>
            </ProtectedRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile/>
            </ProtectedRoute>
          }
        />
        <Route path='/login' element={<Signin/>}/>
        {/* <Route path='/test' element={<VideoTest/>}/> */}
      </Routes>
   
    </div>
  );
}

export default App;
