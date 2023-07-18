import userEvent from '@testing-library/user-event'
import React from 'react'
import {auth} from '../src/components/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
import Collage from './components/Collage';
import '../src/Dashboard.css'

const Dashboard = () => {
    const[user,loading] = useAuthState(auth)
    const navigate = useNavigate();
    
    if(loading) return <h5>loading</h5>
    if(!user) navigate('/registration')

    if(user)
  return (
    
    <div className='dashboardContainer'> 
    <Collage heading="" caption=""  />

<div className='cardWrapper userProfile'>
    <div class="card" style={{width:" 18rem", alignItems:"center"}}>
  <img src={user.photoURL} class="card-img-top" style={{  marginTop:"1rem", width:"100px", height:"100px", borderRadius:"100%"}} alt="avatar" />
  <div class="card-body">
    <h5 class="card-title">Welcome {user.displayName}</h5>
    <p class="card-text"></p>
    <button className='btn btn-dark'
      onClick={()=>auth.signOut()} >sign out</button>
  </div>
</div>
    </div>
    <div className='welcomeMsg'>
    <p style={{lineHeight:"3rem"}}>more features coming soon...</p>
    </div>
    
    </div>
  
    )
}

export default Dashboard