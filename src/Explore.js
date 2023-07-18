import React, { useEffect, useState } from 'react'
import Album from './components/Album'
import { useNavigate } from 'react-router-dom'
import './Explore.css'
import ColorAlbum from './components/ColorAlbum'
import Collage from './components/Collage'
import background from '../src/assets/background.avif'
import image from '../src/assets/image.avif'
import wallpaper from '../src/assets/wallpaper.avif'
import abstract from '../src/assets/abstract.avif'

const Explore = () => {


  const [browse, setBRowse] = useState([
    {src: wallpaper, query:"wallpaper"},
    {src: image, query:"image"},
    {src:background, query:"background"},
    {src:abstract, query:"abstract"},
    
  ])

  const[albumArray, setAlbumArray]=useState([
    "Technology",
    "Music",
    "Health & Fitness",
    "Street Photography",
    "Nature",
    "Artificial INtelligence",
    "Sea",
    "Fashion",
    "Art & Craft",
    "Creative"
  ])

  const[colorArray, setColorArray]=useState([
    "violet",
    "Indigo",
    "Black",
    "Green",
    "Yellow",
    "Orange",
    "Red",
    "White",
    "Cyan",
    "Gray",
    "Brown"
  ])

  const[health, setHealth]=useState([
    "Healthy Lifestyle",
    "Healthy Food",
    "Hip & Healthy",
  ])

  const[sea, setSea]=useState([
    "The Sea",
    "Seascapes",
  ])

  const[fashion, setFashion]=useState([
    "Men",
    "Women",
    "Lifestyle"
  ])

  const[art, setArt]=useState([
    "Art",
    "Art & Craft",
    "Abstract Art",
    "Art & Museum"
  ])

  const[creative, setCreative]=useState([
    "National Creativity Day",
    "Creatives",
    "Creative Process",
    "Photoshop"
  ])

  const[photography, setPhotography]=useState([
    "Food Photography",
    "People Photography",
    "Cat Photography",
    "Mountain Photography",
    "Nature Photography"
  ])

  const latest = [
    "Space",
    "Ukraine",
    "Russia",
    "World",
    "Peace",
    "Travel",
    "Year 2022",
    "New Year"
  ]

  const recommended = [
    "Love",
    "Relation",
    "Body Positive",
    "Earth",
    "Friends and Family",
    "School",
    "College",
    "Education",
    "Work"
  ]

  const navigate = useNavigate()

  const requestData=(item)=>{
    navigate(`/results/?query=${item}`)
    console.log("clicked", item)
  }

  

  useEffect(()=>{

  }, [])

  return (
    <div className='exploreContainer'>

<Collage heading="Explore" caption="Discover the world of photography with our collections."/>

<div className='exploreWrapper'>
{
  browse.map(item=>{
    console.log("item", item)
    return(
      <div onClick={()=>requestData(item.query)} className='exploreAlbumContainer fooHeight parent'>
       <img className='fooHeight image' src={item.src}/>
       <h5 className='text'>{item.query}</h5> 
      </div>
    )
  })
}
</div>

<h4 className='heading'>Latest Topics</h4>

<div className='exploreWrapper photographyTopicsContainer'>
{
  latest.map(item=>{
    
    return(
      <div onClick={()=>requestData(item)} className='photographyTopicsWrapper'>
     { console.log("item", item)}
       <span className='photographyTopics'>{item}</span> 
      </div>
    )
  })
}
</div>
 
    
<h4 className='heading'>Popular Collections</h4>
   <div className='exploreWrapper'>
{
  albumArray.map(item=>{
    return(
      <div onClick={()=>requestData(item)} className='exploreAlbumContainer'>
        <Album albumName={item}/>
        {item}
      </div>
    )
  })
}
</div>

<h4 className='heading'>Photography Topics</h4>


<div className='exploreWrapper photographyTopicsContainer'>
{
  photography.map(item=>{
    console.log("item", item)
    return(
      <div onClick={()=>requestData(item)} className='photographyTopicsWrapper'>
       <span className='photographyTopics'>{item}</span> 
      </div>
    )
  })
}
</div>

<h4 className='heading colorAlbumHeading'> Search by shade:</h4>

<div className='colorAlbumContainer'>

  {
  colorArray.map(item=>{
    return(
          <ul onClick={()=>requestData(item)} className='colorAlbumList'><li><ColorAlbum colorName={item}/></li></ul>
    
    )
  })
}
</div>

<h4 className='heading'> Recommended Topics</h4>


<div className='exploreWrapper photographyTopicsContainer'>
{
  recommended.map(item=>{
    console.log("item", item)
    return(
      <div onClick={()=>requestData(item)} className='photographyTopicsWrapper'>
       <span className='photographyTopics'>{item}</span> 
      </div>
    )
  })
}
</div>

{/* 
<h4 className='heading'>Health & Lifestyle Collection</h4>
   <div className='exploreWrapper'>
{
  health.map(item=>{
    return(
      <div onClick={()=>requestData(item)} className='exploreAlbumContainer'>
        <Album albumName={item}/>
        {item}
      </div>
    )
  })
}
</div>

<h4 className='heading'>Sea Collection</h4>
   <div className='exploreWrapper'>
{
  sea.map(item=>{
    return(
      <div onClick={()=>requestData(item)} className='exploreAlbumContainer'>
        <Album albumName={item}/>
        {item}
      </div>
    )
  })
}
</div>

<h4 className='heading'>Fashion Collection</h4>
   <div className='exploreWrapper'>
{
  fashion.map(item=>{
    return(
      <div onClick={()=>requestData(item)} className='exploreAlbumContainer'>
        <Album albumName={item}/>
        {item}
      </div>
    )
  })
}
</div>

<h4 className='heading'>Art Collection</h4>
   <div className='exploreWrapper'>
{
  art.map(item=>{
    return(
      <div onClick={()=>requestData(item)} className='exploreAlbumContainer'>
        <Album albumName={item}/>
        {item}
      </div>
    )
  })
}
</div>

<h4 className='heading'>Creative Collection</h4>
   <div className='exploreWrapper'>
{
  creative.map(item=>{
    return(
      <div onClick={()=>requestData(item)} className='exploreAlbumContainer'>
        <Album albumName={item}/>
        {item}
      </div>
    )
  })
}
</div> */}
</div>
  )
}

export default Explore