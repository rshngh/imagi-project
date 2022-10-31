import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Request.css'

const Request = () => {
    const[images, setImages] = useState([])
   //const[count, setCount] = useState()
let count;

   
useEffect(()=>{
async function fetchImages(){
        const response =  await axios.get("https://api.unsplash.com/collections",{
          headers:{
              Authorization: "Client-ID 6IRnoQ2X1ZY2DtymImE34OwJGSiAn3tH72BYAVV1SXc" },
              params:{
                  query: "tech",
                  per_page: 100
              }  
            })
            setImages(response.data)
console.log("collection imaegs", images)
      }
      fetchImages()
    },[])

    const getImg=()=>{
      console.log("image clicked",)
    }

  return (
    <div style={{display:"flex", flexDirection:"column"}}>Request
   {

    images.map(i=>i.preview_photos.map(p=>{
        return(
            <div >
                <img 
                onClick={getImg}
                key={i.id} 
          src={i.urls.thumb} 
          alt={i.alt_description} 
          style={{display:"block"}}
              />
                {console.log(p.urls.thumb)}
            </div>
        )
    }))


   }


    </div>
  )
}

export default Request