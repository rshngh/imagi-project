import React, { useEffect, useState } from 'react';
import "./SearchSuggestions.css";
import architecture from "../assets/architecture.jpg"
import cars from "../assets/cars.jpg";
import technology from "../assets/technology.jpg";
import people from "../assets/people.jpg";
import threeD from "../assets/threeD.jpg";
import wallpaper from "../assets/wallpaper.jpg";
import leftArrow from "../assets/leftArrow.png"
import rightArrow from "../assets/rightArrow.png"
import Results from '../Results';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SearchSuggestions = () => {
  
  const navigate = useNavigate();

const [suggestionListItems, setSuggestionListItems]= 
useState([
  {id:1, src:technology, alt:"technology"}, 
  {id:2, src:architecture, alt:"architecture" },
  {id:3, src:cars, alt:"cars"},
  {id:4, src:people, alt:"people"},
  {id:5, src:wallpaper, alt:"wallpaper"},
  {id:6, src:threeD, alt:"3d"},
]  )

const[searchTerm, setSearchTerm] = useState()
const[images, setImages] = useState([]) 

useEffect(()=>{

}
,[searchTerm])

  async function listData(text){
    console.log(text)
      navigate(`/results/?query=${text}`);
    }
     
    
  return (
    <div className='searchSuggestionsContainer'>
    <ul className='suggestionListItems'>

    {
      suggestionListItems.map((item)=>{
        return(
          <div key={item.id} >
          <li onClick={()=>listData(item.alt)}><img src={item.src} alt={item.alt}/><h5>{item.alt} </h5></li>
       </div>
        )
      })
    }
    </ul>
      
    {/* <Results searchResults={images} /> */}

     </div>
  )
  
}

export default SearchSuggestions

