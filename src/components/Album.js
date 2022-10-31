import React, { useEffect, useState } from 'react'
import { FetchImages } from '../APICALLS'
import './Album.css'
import { useNavigate } from 'react-router-dom'

const Album = (albumName) => {
  console.log("albumNAme", albumName)
    const [images, setImages] = useState([])
    const navigate = useNavigate()

useEffect(()=>{
    let x = FetchImages(albumName, 4)
    x.then(function(result){return setImages(result)})
    console.log("albumname images", images)
},[])

    
  return (
    <div className='albumContainer'>
    {
        images.map(i=>{
            return(
                <div className='albumWrapper'>
                <img src={i.urls.thumb} alt={i.alt_desciption}></img>
                {console.log("i.index", i.index)}
                </div>
                )})
    }
    </div>
  )
}

export default Album