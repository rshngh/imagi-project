import React, { useEffect, useState } from 'react'
import './Header.css'
import logoImagi from '../assets/logoImagi.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import { Link } from 'react-router-dom'
import InputBox from './InputBox'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const Header = () => {
  const location = useLocation()
  
  const[searchText,setSearchText]= useState('')
  const navigate = useNavigate();
  const[user,loading] = useAuthState(auth)
  
    const inputTextHandler=(e)=>{
      setSearchText(e.target.value)
      console.log("searchText", searchText) 
    }



    const onSearchSubmit=(e,text)=>{
      e.preventDefault();
      navigate(`/results/?query=${searchText}`);
      console.log("searchSubmitted", text )
    }
 
const activeStyle = {
  color:"#343a40", backgroundColor:"whitesmoke", borderRadius:"5px", 
}

useEffect(()=>{document.getElementById('searchContainer')?.scrollIntoView({ behavior: 'smooth' })})

  return (
    <header id="headerContainer" className='headerContainer container-fluid'>

<nav class="navbar navbar-expand-lg navbar-light" >

<div onClick={document.getElementById('searchContainer')?.scrollIntoView({ behavior: 'smooth' })}>
  <Link to="/" class="navbar-brand imagiLogo maskedLogo" href="home"> <img src={logoImagi} alt="logo"></img> </Link>
  </div>

  {/* <div className='divider'></div> */}


<form onSubmit={onSearchSubmit} 
class="d-flex" role="search">
      <input class="form-control me-2" 
      type="search" 
      placeholder="search all images" 
      aria-label="Search"
      value={searchText}
      onChange={inputTextHandler}
      required
       />
      <button class="btn btn-dark" type="submit">Search</button>
    </form>

 

  <div className='divider'></div>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div className='navbar-fullWidth'>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">

        <li class="nav-item">
          <a
          style={ location.pathname === "/" ? activeStyle : {}}
           class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a 
          style={ location.pathname === "/explore" ? activeStyle : {}}
          class="nav-link" href="/explore">Explore</a>
        </li>
        <li class="nav-item">
          <a 
          style={ location.pathname === "/about" ? activeStyle : {}}
          class="nav-link"  href="/about">About</a>
        </li>
        <li class="nav-item">
          <a 
           style={ location.pathname === "/community" ? activeStyle : {}}
          class="nav-link" href="/community">Community</a>
        </li>
      </ul>
      </div>

        <div className='divider'></div>

{!user &&   
(
    <div className='navbar-fullWidth'>
    <div className='login_signup'>
    <button className='btn btn-dark' onClick={()=>{window.location.href = "/registration";}} > Login / Sign up</button>
    </div>
    </div>
)
}

{user &&(
  <div className='navbar-fullWidth' style={{textAlign:"center", margin:"0 10px"}}>
    {/* <Link href='/' ></Link> */}
    <img style={{width:"30px", height:"30px", borderRadius:"100%"}} onClick={()=>{window.location.href = "/dashboard";}} src={user.photoURL} alt="" />
  <p style={{margin:"0", padding:"0"}}>{user.displayName}</p>
  </div>
)}



{/* off-canvas */}



</nav>

<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
 
  <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-smallWidth">
  <li class="nav-item">
          <a
          style={ location.pathname === "/" ? activeStyle : {}}
           class="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a 
          style={ location.pathname === "/explore" ? activeStyle : {}}
          class="nav-link" href="/explore">Explore</a>
        </li>
        <li class="nav-item">
          <a 
          style={ location.pathname === "/about" ? activeStyle : {}}
          class="nav-link"  href="/about">About</a>
        </li>
        <li class="nav-item">
          <a 
           style={ location.pathname === "/community" ? activeStyle : {}}
          class="nav-link" href="/community">Community</a>
        </li>
      </ul>
 

      {!user &&   
(
  <div className='login_signup navbar-smallWidth'>
    <button className='btn btn-dark' onClick={()=>{window.location.href = "/registration";}} > Login / Sign up</button>
   
      </div>  
)
}

{user &&(
  <div className='login_signup navbar-smallWidth' style={{textAlign:"center", margin:"0 10px"}}>
    {/* <Link href='/' ></Link> */}
    <img style={{width:"30px", height:"30px", borderRadius:"100%"}} onClick={()=>{window.location.href = "/dashboard";}} src={user.photoURL} alt="" />
  <p style={{margin:"0", padding:"0"}}>{user.displayName}</p>
  </div>
)}

   
    {/* <div className='login_signup navbar-smallWidth'>
    <button className='btn btn-dark' onClick={()=>{window.location.href = "/registration";}} > Login / Sign up</button>
   
      </div>    */}
  </div>
  
    </header>
  )
}

export default Header