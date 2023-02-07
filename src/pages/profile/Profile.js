import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import './profile.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/userSlice'
import { auth } from '../../firebase'

const Profile = () => {

    const user = useSelector(selectUser)
  return (
    <div className='profile_screen'>
        <Navbar/>
        <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen_info'>
<img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
<div className='profileScreen_details'>
<h2>{user?.email}</h2>
<div className='profileScreen_plans'>
    <h3>Plans (Current Plan: premium)</h3>
    <p>Renewal Date: 04/03/2021</p>

    <div className='profileScreen_planOption'>
        <div className='profileScreen_standard'>
            <h4>Netflix Standard</h4>
            <p>1080p</p>
        </div>
        <button className='subscribe'>Subscribe</button>
    </div>

    <div className='profileScreen_planOption'>
        <div className='profileScreen_standard'>
            <h4>Netflix Standard</h4>
            <p>1080p</p>
        </div>
        <button className='subscribe'>Subscribe</button>
    </div>

    <div className='profileScreen_planOption'>
        <div className='profileScreen_standard'>
            <h4>Netflix Standard</h4>
            <p>1080p</p>
        </div>
        <button className='subscribe' style={{background:'gray'}}>Current Package</button>
    </div>
    <button className='profileScreen_signout' onClick={()=>auth.signOut()}>Sign Out</button>
</div>
        </div>
        </div>
        
        </div>
    </div>
  )
}

export default Profile