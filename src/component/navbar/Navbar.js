import React, { useEffect, useState } from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'

const Navbar = () => {

const [show, handleShow] = useState(false)

const transitionNavbar = () => {
    if(window.scrollY > 100){
        handleShow(true)
    } else {
        handleShow(false)
    }
}

useEffect(()=>{
window.addEventListener('scroll',transitionNavbar)
transitionNavbar()
return ()=>window.removeEventListener('scroll',transitionNavbar)
},[])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
        <div className='nav_content'>
<Link to='/'>
<img className='nav_logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='netflix'/></Link>
        <Link to='/profile'>
        <img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
        </Link>
        </div>
    </div>
  )
}

export default Navbar