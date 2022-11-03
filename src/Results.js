import './Results.css'
import React, { useEffect, useState } from 'react'
import Requests from './Requests'
import Collection from './components/Collection'
import axios from 'axios';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Collage from './components/Collage';
import { FetchCollectionTitle, FetchImage, FetchImages } from './APICALLS';
import { useNavigate } from 'react-router-dom'
import close from '../src/assets/close.png'
import Album from './components/Album';
import loadingIcon from '../src/assets/loadingIcon.gif'
import DownloadOptions from './components/DownloadOptions';

const Results = (props) => {
  const[images, setImages] = useState([])
  const[imageQuery, setImageQuery] = useState()
  const [data, setData] = useState({})
  const[model, setModel]= useState(false)
  const[searchQuery,setSearchQuery]=useState("el")
  const query = new URLSearchParams(window.location.search);

  

  const latest = [
    "diwali",
    "ukraine",
    "russia",
    "world",
    "peace",
    "travel",
    "year 2022",
    "new year",
    "street photography",
    "health & fitness",
    "love",
    "friendship",
    "mental health",
    "body positive",
    "fashion",
    "dance",
    "nature",
    "natural",
    "food",
  ]


  const viewImage=(img)=>{
    setData(img)
    setModel(true)
    console.warn("image clicked",data)
  }

  const requestData=(item)=>{
    navigate(`/results/?query=${item}`)
    console.log("clicked", item)
  }


  let searchTerm = query.get("query");

  const navigate = useNavigate()
  const[page,setPage] = useState(1)
  const getData=(p)=>{
    navigate(`/results/?query=${p}`)

 }

 console.log("imageQuery", imageQuery)

  
  useEffect(()=>{
    const query = new URLSearchParams(window.location.search);
    let searchTerm = query.get("query");
    setImageQuery(searchTerm)
    
    const searchData = async(text)=>{
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          headers: {
            Authorization:
              "Client-ID 6IRnoQ2X1ZY2DtymImE34OwJGSiAn3tH72BYAVV1SXc"
          },
          params: {
            query: {text},
            per_page: 30,
            page:page
          }
        }
      );
      setImages(response.data.results)
      console.log("query",query.get("query"),response.data.results)
    }
    if(searchTerm){
      searchData(searchTerm)
    }
    
    
  },[page, searchTerm])

  const NextButton=()=>{
    setPage(page+1)
    setImages(null)
      document.getElementById("resultsContainer").scroll(0,0)
      document.getElementById('resultsContainer')?.scrollIntoView({ behavior: 'smooth' });
  }

  if(!images || !searchTerm) return <h5 style={{textAlign:"center", color:"gray", fontWeight:"600"}}>loading...</h5>
     
  if(!images || !searchTerm)  document.getElementById('resultsContainer')?.scrollIntoView({ behavior: 'smooth' });


    
return (
    <div id="resultsContainer" className='resultsContainer'>

{/* modal start */}

{/* <!-- Button trigger modal --> */}
{/* <img  class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" /> */}

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">{searchTerm}</h5>
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

<h2 style={{fontSize:"1.5rem"}} className='heading'>Popular Topics</h2>

<div style={{marginBottom:"2rem"}} className='exploreWrapper photographyTopicsContainer'>
{
  latest.map(item=>{
    return(
      <div onClick={()=>requestData(item)} className='photographyTopicsWrapper'>
       <span className='photographyTopics'>{item}</span> 
      </div>
    )
  })
}
</div>


{/* <div className={ model ? "model open" : "model"}>
<img className='imgContainer' alt='' src={data.regular} />
<img className='iconContainer' alt='' src={close} onClick={()=>{setModel(false)}} />
</div> */}



<div className='successContainer'>
<div className='successText'>
  <p>showing results for:  </p>
  <h5> {searchTerm}</h5>
  </div>
</div>
      
<div id="gallery" className='gallery'>
    { 
      images.map((i)=>{
         return(
          <img className='galleryWrapper' 
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

     
    </div>
    <div  style={{margin:"1rem", display:"flex", justifyContent:"center",}}>
    <button className='btn btn-dark' onClick={NextButton}> Next Page </button>
    </div>
</div>
  )
}

export default Results