import React, { useEffect, useState } from 'react'
import searchIcon from '../assets/searchIcon.png'
import './InputBox.css'
import Results from '../Results';
import { useNavigate } from "react-router-dom";
import InputHandler from './InputHandler';

const InputBox = () => {
  
  useEffect(()=>{
    const query = new URLSearchParams(window.location.search);
  },[])

    const[searchText,setSearchText]= useState('')
    const navigate = useNavigate();

    const inputTextHandler=(e)=>{
      setSearchText(e.target.value)
      console.log("searchText", searchText) 
    }

    const onSearchSubmit=(e,text)=>{
      e.preventDefault();
      navigate(`/results/?query=${searchText}`);
      console.log("searchSubmitted", text )
    }

    useEffect(()=>{
    //  inputTextHandler()
    },[])


  return (
        <div className='searchBox'>
        <div className='inputWrapper'>
        <form onSubmit={onSearchSubmit}>
      <input 
      type='search' 
      placeholder="Search all images" 
      value={searchText}
      onChange={inputTextHandler}
      required
      />
      </form>
      <img className="searchIcons" alt="search" src={searchIcon}/>
      </div>
   
    </div>
  )
}

export default InputBox