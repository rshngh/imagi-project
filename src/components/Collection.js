import React, { useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import './Collection.css'
import UnsplashImages from './UnsplashImages'
import close from '../assets/close.png'
import DownloadOptions from './DownloadOptions'

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

{/* <div className={ model ? "model open" : "model"}>
<img className='imgContainer' alt='' src={data} />
<img className='iconContainer' alt='' src={close} onClick={()=>{setModel(false)}} />
</div> */}

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <img className='' alt='' src={data.regular} />
      </div>
      <div class="modal-footer">
          <DownloadOptions imgurls={data}  />
      </div>
    </div>
  </div>
</div>

{/* modal end */}

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
          onClick={()=>viewImage(i.urls)}  
          data-toggle="modal" data-target="#exampleModalCenter"

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