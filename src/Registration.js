import React, { useState } from 'react';
import './Registration.css';
import firebase from './components/firebase';
import 'firebase/auth';
import { getAuth } from "firebase/auth";
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {auth} from '../src/components/firebase'
import { useNavigate } from 'react-router-dom';
import google from '../src/assets/google.png'
import Collage from './components/Collage';


const Registration = () => {
  const navigate = useNavigate();

  
  //sign in with google

  const googleProvider = new GoogleAuthProvider()

  const GoogleLogin = async()=>{
    try{
     const result = await signInWithPopup(auth, googleProvider)
console.log(result);
navigate('/dashboard')
    }
    catch(error){
      console.log(error);
    }
  }

  return (
    <div className='registrationContainer'>
    <Collage heading="Welcome" caption="Please login to continue"  />
    
    <button className='btn btn-outline-dark' style={{padding:"2rem"}}
    onClick={GoogleLogin}
    >
    sign in with google
    <img src={google} alt="googleIcon" style={{width:"31px", margin:"0 48px"}} />
    </button>

    </div>
  )
}

export default Registration