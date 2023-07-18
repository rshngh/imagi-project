import React from 'react'
import '../src/'
import Collage from './components/Collage'
import './About.css'
import CollageTilted from './components/CollageTilted'
import forCreators from '../src/assets/forCreators.jpg'
import bythecreators3 from '../src/assets/bythecreators3.jpg'


const About = () => {
  return (
    <div className='aboutContainer'>
      <Collage heading="About Us" caption="Helping you create better." />
     
      {/* <div className='aboutWrapper'>
<div className='aboutTitle'>
<h2> High quality images at your fingertips</h2>
<p>
Imagi provides high quality stock images. We have a huge library of images and we constantly update it.</p>
<button className='btn btn-dark' onClick={()=>{window.location.href = "/explore";}} > Explore </button>
</div>
<img src={aboutCollage} />
</div> */}

{/* <div className='aboutContent_container'>
 <div className='aboutContent_wrapper'>
  <img src={aboutContent1} />
  <h6>Over three million curated photos</h6>
  <p>We hand-select every photo and accept only the best, so that no matter what you need—you’ll find exactly what you’re looking for on Imagi.</p>
  </div>

  <div className='aboutContent_wrapper'>
  <img src={aboutContent2} />
  <h6>A community of 293,995 photographers</h6>
  <p>Unsplash is home to a growing community of photographers—from hobbyists, professionals, emerging brands and everyone in between.</p>
  </div>

  <div className='aboutContent_wrapper'>
  <img src={aboutContent3} />
  <h6>For all your professional and peronal needs</h6>
  <p>Creating a website for your work or working on a college project, we got you covered.</p>
  </div>
</div> */}


  {/* for the creators */}

  <div style={{marginTop:"5rem"}} className='creatorsWrapper'>
<div className='creatorsTitle'>
<h2> For the Creators</h2>
<p>
Creating websites for work, need images for your blog or working on a college project. Our images are free to use for both professional and personal usage.
</p>
<button style={{margin:"1rem"}} className='btn btn-dark' onClick={()=>{window.location.href = "/explore";}} > Explore </button>

</div>
<img alt="forCreators" src={forCreators} />
</div>

{/*  by the creators */}
<div className='creatorsWrapper'>
<img alt="byCreators" src={bythecreators3} />
<div className='creatorsTitle'>
<h2> By the Creators</h2>
<p>
24000+ photographers sharing their work with you so you don't have to worry about the images and you can fully focus on your work.
</p>
<button className='btn btn-dark' onClick={()=>{window.location.href = "/explore";}} > Explore </button>

</div>
</div>

{/* <div className='aboutWorkingContainer'>
<img src={aboutWorking2} />  
<div className='aboutTitle aboutWorkingContainerTitle'>
<h2> Make something awesome </h2>
<p>
No more pain in finding great, usable imagery. Download images from Imagi to create presentations, artwork, mockups, and more.
</p>
<button className='btn btn-dark' onClick={()=>{window.location.href = "/explore";}} > Explore </button>
</div>
</div> */}

<div>
  
  </div>

  <div style={{marginTop:"5rem"}} className='poweredbyouYouContainer'>
<h2> Powered by</h2>

<div className='maskImg maskText'>
  <h1> YOU </h1>
</div>
<p>"Imagi is a community supported by our creators, supported by You."</p>

</div>



    </div>
  )
}

export default About