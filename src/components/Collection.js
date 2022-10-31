import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import './Collection.css'
import UnsplashImages from './UnsplashImages'
import close from '../assets/close.png'

const Collection = (props) => {
  const [data, setData] = useState({})
  const[model, setModel]= useState(false)

    const viewImage=(img)=>{
      setData(img)
      setModel(true)
      console.warn("image clicked",data)
    }

  return(
    <div id='collectionContainer'>

<div className={ model ? "model open" : "model"}>
<img className='imgContainer' alt='' src={data} />
<img className='iconContainer' alt='' src={close} onClick={()=>{setModel(false)}} />
</div>

    <ResponsiveMasonry className='collectionContainer' columnsCountBreakPoints={{350:1, 750:2, 900:3}}>
<Masonry>
{
       props.images.map((i)=>{
         return(
          <img className='imageWrapper' 
          key={i.id} 
          src={i.urls.thumb} 
          alt={i.alt_description} 
          style={{display:"block"}}
          onClick={()=>viewImage(i.urls.regular)}  
          />
         )
     })
    }
</Masonry>

    </ResponsiveMasonry>
    </div>
  )
}

export default Collection