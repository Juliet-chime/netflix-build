import React, { useState } from 'react'
import './signin.css'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom'; 
import Loader from '../../component/loader/Loader';
import { ColorRing } from  'react-loader-spinner'

const Signin = () => {

    const navigate =  useNavigate()

    const [signin, setSignin] = useState(false)
    const [loading,setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const register = (e) => {
           e.preventDefault()
           setLoading(true)
           createUserWithEmailAndPassword(auth,email,password).then((authUser)=>{
            if(authUser){
                setEmail(false)
                navigate('/')
            }
          
           }).catch((e)=>{
            setLoading(false)
            alert(e)
           })
    }

    const signInUser = (e) => {
        e.preventDefault()
        setLoading(true)
        signInWithEmailAndPassword(auth,email,password).then((authUser)=>{
            if(authUser){
                setLoading(false)
                navigate('/')
            }
           }).catch((e)=>{
            setLoading(false)
            alert(e)
           })
 }

  return (
    <div className='loginScreen'>
        <div className='loginScreen_bg'>
            <img className='loginScreen_logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='logo'/>
            <button className='loginScreen_btn' onClick={signInUser}>Sign In</button>
            <div className='loginScreen_gradient'/>
        </div>
        <div className='loginScreen_body'>
            {
                signin ?
                <div className='signupScreen'>
                    <h1>Sign In</h1>
<form>
<input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
<input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
<button type='submit' onClick={signInUser}>
    {loading?<Loader loadComponent={ColorRing} height="30" width="30" visible={true} colors={['#fff', '#333', '#fff', '#333', '#fff']}/>:' Sign In'}
   
    </button>
<h4>
    <span className='signupScreen_gray'>New to Netflix? </span>
 <span className='signupScreen_link' onClick={register}>Sign Up Now.</span></h4>
</form>
                </div> :<>
                <h1>Unlimited films,TV programs and more.</h1> 
                <h2>Watch anywhere. Cancel at any time</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                <div className='loginScreen_input'>
                    <form>
                        <input type='email' placeholder='Email Address'/>
                        <button className='loginScreen_getStarted' onClick={()=>setSignin(true)}>GET STARTED</button>
                    </form>
                </div>
                </>
            }
        </div>
        
    </div>
  )
}

export default Signin