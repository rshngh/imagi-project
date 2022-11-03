import { saveAs } from 'file-saver';
import React, { useState } from 'react'
import './DownloadOptions.css'

const DownloadOptions = (props) => {

    const [downloading, setDownloading] = useState(false)

    //raw full regular small thumb

    const downloadImage=(imgSize)=>{
        switch (imgSize) {
            case "raw":
                saveAs(props.imgurls.regular, 'image.jpg')
                break;

                case "full":
                    saveAs(props.imgurls.small, 'image.jpg')
                    break;
            
                case "regular":
                    saveAs(props.imgurls.thumb, 'image.jpg')
                    break;
        
            default:
                saveAs(props.imgurls.small, 'image.jpg')
                break;
        }
    console.warn(props.imgurls);

    setDownloading(true)
    
setTimeout(() => {
    setDownloading(false)
}, 2000);    

  
    // console.warn("download image clicked")
    // saveAs(props.imgurls, 'image.jpg')
}


  return (
    <div className='dowloadOptionsContainer'>

<div class="btn-group">

  <button type="button" class="btn btn-dark"
  onClick={()=>downloadImage("small")}
  >Download</button>

  <button type="button" class="btn btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" onClick={()=>downloadImage("raw")} href="#">Raw</a>
    <a class="dropdown-item" onClick={()=>downloadImage("regular")} href="#">Regular</a>
    <a class="dropdown-item" onClick={()=>downloadImage("full")} href="#">Full</a>
  </div>
</div>
{
downloading && <h6>downloading...</h6>
}

</div>
  )
}

export default DownloadOptions