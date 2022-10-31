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

const Results = (props) => {
  const[images, setImages] = useState([])
  const[imageQuery, setImageQuery] = useState()
  const[loading, setLoading] = useState(false)
  const query = new URLSearchParams(window.location.search);
  const [data, setData] = useState({})
  const[model, setModel]= useState(false)
  const[albumArray, setAlbumArray]=useState([])
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



//   useEffect(()=>{
//     const query = new URLSearchParams(window.location.search);

//     let searchTerm = query.get("query");

//     let x = FetchImages(searchTerm,15)
//     x.then(function(result){return setImage(result)})
//     console.log("showing results image", image)
// },[])


// useEffect(()=>{
//   const query = new URLSearchParams(window.location.search);

//   let searchTerm = query.get("query");

//   let x = FetchCollectionTitle(searchTerm, 2)
//   x.then(function(result){return setAlbumArray(result)})
//   console.log("showing results image", albumArray)
// },[])

    
return (
    <div id="resultsContainer" className='resultsContainer'>

<h2 style={{fontSize:"1.5rem"}} className='heading'>Popular Topics</h2>

<div style={{marginBottom:"2rem"}} className='exploreWrapper photographyTopicsContainer'>
{
  latest.map(item=>{
    console.log("item", item)
    return(
      <div onClick={()=>requestData(item)} className='photographyTopicsWrapper'>
       <span className='photographyTopics'>{item}</span> 
      </div>
    )
  })
}
</div>


{/* album */}

{/* <h2 className='heading'>Popular Collections</h2>
   <div className='exploreWrapper'>


{
  albumArray.map(i=>i.preview_photos.map(p=>{
    return(
      <div onClick={()=>requestData(p)} className='exploreAlbumContainer'>
      <Album albumName={p}/>
      {p.alt_description}

    </div>)


    }
    )
)}
</div> */}

{/* album end */}

<div className={ model ? "model open" : "model"}>
<img className='imgContainer' alt='' src={data} />
<img className='iconContainer' alt='' src={close} onClick={()=>{setModel(false)}} />
</div>


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
          onClick={()=>viewImage(i.urls.regular)}  
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