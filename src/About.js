import React from 'react'
import '../src/'
import Collage from './components/Collage'
import aboutCollage from '../src/assets/aboutCollage.jpg'
import aboutContent1 from '../src/assets/aboutContent1.avif'
import aboutContent2 from '../src/assets/aboutContent2.avif'
import aboutContent3 from '../src/assets/aboutContent3.avif'
import aboutWorking2 from '../src/assets/aboutWorking2.jpg'
import './About.css'
import CollageTilted from './components/CollageTilted'


const About = () => {
  return (
    <div className='aboutContainer'>
      <Collage heading="About" caption="Imagi is internet’s source of freely usable images." />
     
      <div className='aboutWrapper'>
<div className='aboutTitle'>
<h2> Photos for everyone</h2>
<p>
Over 3 million free high-resolution images brought to you by the world’s most generous community of photographers.
</p>
<button className='btn btn-dark' onClick={()=>{window.location.href = "/explore";}} > Explore </button>
</div>
<img src={aboutCollage} />
</div>

<div className='aboutContent_container'>
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
</div>


<div className='aboutWorkingContainer'>
<img src={aboutWorking2} />  
<div className='aboutTitle aboutWorkingContainerTitle'>
<h2> Make something awesome </h2>
<p>
No more pain in finding great, usable imagery. Download images from Imagi to create presentations, artwork, mockups, and more.
</p>
<button className='btn btn-dark' onClick={()=>{window.location.href = "/explore";}} > Explore </button>
</div>
</div>

<div>
  
  </div>

  <div className='poweredbyouYouContainer'>
<h2> Powered by</h2>

<div className='maskImg maskText'>
  <h1> YOU </h1>
</div>
<p>"We’re the place where creators meet their audience, where individuals become a community and where anyone can become a source for creativity. So whether you’re new to photography or consider yourself a pro—your images are welcome here."</p>

</div>



    </div>
  )
}

export default About