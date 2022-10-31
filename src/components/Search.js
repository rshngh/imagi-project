import React, { useState } from 'react';
import './Search.css';
import searchIcon from '../assets/searchIcon.png'
import searchIconWhite from '../assets/searchIconWhite.png'
import SearchSuggestions from './SearchSuggestions';
import InputBox from './InputBox';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const[trending, setTrending]=useState([
    "diwali",
    "technology",
    "peace",
    "nature",
    "earth",
    "cars"
  ])

  const navigate = useNavigate()

 async function FetchImages(item){
navigate(`/results/?query=${item}`)
console.log("clicked on",item)
  }


  return (
    <div id="searchContainer" className='searchContainer'>

    <div className='fooSearchContainer'>
     
     <h1>Search for all the images you need.</h1>
     <p>Royalty-free images for personal and professional use.</p>

<InputBox />

<div className='suggestionsWrapper' >
    <span>trending: </span>
<ul className='suggestionsListWrapper'>
    {
      trending.map(item=>{
        return(
    <div  className='searchSuggestions onhover'>
     <li onClick={()=>FetchImages(item)}><img className='searchIconWhite' src={searchIconWhite} alt='search'/>  {item}
     </li></div>
         
        )
      })
    }
    </ul>
</div>
   {/* <SearchSuggestions /> */}
   
    </div>
    </div>
  )
}

export default Search