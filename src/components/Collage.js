import React, { useEffect, useState } from 'react'
import { FetchCollections } from '../APICALLS'
import'../components/Collage.css'

const Collage = (props) => {

    const[images,setImages] = useState([])

useEffect(()=>{
    Collage()
  },[])
  
  async function Collage(){
  console.log("collage clicked")
  let x = FetchCollections("explore")
   await x.then(function(result){return setImages(result)})
     console.log("community album", images)
  }

  return (
    <div className='collage'>
    <div className='collageContainer maskLinear'>
    {
  images.map(i=>i.preview_photos.map(p=>{
    return <img key={p.id} src={p.urls.thumb} alt="communityCollage" /> 

    }
    )
)}
</div>
<div className='headingContainer'>
  <h1 className='heading'>{props.heading}</h1>
  <p>{props.caption}</p>
</div>
</div>
  )
}

export default Collage