import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import './UnsplashImages.css'

const UnsplashImages = (props) => {
  
  return (
  <div className='unsplashImagesContainer'>
  <img src={props.imgData} alt={props.alt_description} id={props.key}/>
   {/* <div class='imgBox'>
    <img src={props.imgData} alt={props.alt_description} id={props.key}/>
  </div> */}
  </div>
  )
}

export default UnsplashImages