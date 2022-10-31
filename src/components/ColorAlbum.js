import React, { useState } from 'react'
import './ColorAlbum.css'
import { useEffect } from 'react'
import { FetchImage } from '../APICALLS'

const ColorAlbum = (colorName) => {
  const[image,setImage]=useState([])
  useEffect(()=>{
    let x = FetchImage(colorName, 4)
    x.then(function(result){return setImage(result)})
    console.log("albumname images", image)
},[])
  return (
    <div className='colorAlbumContainerMain'>
   {
        image.map(i=>{
            return(
                <div className='colorAlbumWrapper'>
                <ul className='colorList'><li><img src={i.urls.thumb} alt={i.alt_desciption}></img>
                </li></ul></div>
                )})
    }
    </div>
  )
}

export default ColorAlbum