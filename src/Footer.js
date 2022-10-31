import React from 'react'
import '../src/Footer.css'
import { useNavigate } from 'react-router-dom'
import facebook from '../src/assets/facebook.png'
import twitter from '../src/assets/twitter.png'
import instagram from '../src/assets/instagram.png'

const Footer = () => {

    const navigate = useNavigate()


    const pages = [
        "Explore", 
        "About", 
        "Community"
    ]

    const popular = [
        "Backgrounds", 
        "Free Images",
        "Happy Birthay Images",
        "Nature Photos",
        "Textures",
        "Black Backgrounds"
     ]

     const wallpaper = [
        "HD Wallpapers",
        "4K Wallpapers",
        "iPhone Wallpapers",
        "Cool Wallpapers",
        "Live Wallpapers",
        "PC Wallpapers",
        "Black Wallpapers",
        "iPad Wallpapers",
        "Desktop Wallpapers",
     ]

     const latestTopics = [
        "Diwali",
        "Ukraine",
        "Russia", 
        "Military",
        "Peace"
     ]

     const socialMedia = [
        facebook, instagram, twitter
     ]

     const getData=(p)=>{
        navigate(`/results/?query=${p}`)
        document.getElementById('resultsContainer')?.scrollIntoView({ behavior: 'smooth' })
      document.getElementById("resultsContainer").scroll(0,0)

     }

     
     

  return (
    <div>
    <div className='footerContainer'>
        <div className='footerWrapper'>
            <h5>Imagi</h5>
            <p>Beautiful, free images gifted by the world’s most generous community of photographers. Better than any royalty free or stock photos.</p>
            <ul className='listContainer'>
                {pages.map(p=> <li onClick={()=>window.location.href="/" + p} className='listItems'> {p}</li>)}
            </ul>
        </div>

        {/* <div>
            section2
        </div>

        <div>section 3</div>

        <div>section 4</div> */}
        <div className='footerWrapper'>
            <h5>Popular</h5>
            <p></p>
            <ul className='listContainer'>
                {popular.map(p=> <li onClick={()=>{getData(p)}} className='listItems'> {p}</li>)}
            </ul>
        </div>

        <div className='footerWrapper'>
            <h5>Wallpaper</h5>
            <p></p>
            <ul className='listContainer'>
                {wallpaper.map(p=> <li onClick={()=>{getData(p)}} className='listItems'> {p}</li>)}
            </ul>
        </div>

        <div className='footerWrapper'>
            <h5>Latest Topics</h5>
            <p></p>
            <ul className='listContainer'>
                {latestTopics.map(p=> <li onClick={()=>{getData(p)}} className='listItems'> {p}</li>)}
            </ul>
        </div>
</div>

        <div className='socialMedia'>
        <ul>
            {
                socialMedia.map(i=>
                <li><img src={i} alt="socialMedia" /></li>)
            }
        </ul>
        </div>
    </div>
  )
}

export default Footer