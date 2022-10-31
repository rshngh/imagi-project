import React, { useEffect, useState } from 'react'
import './Community.css'
import forCreators from '../src/assets/forCreators.jpg'
import bythecreators3 from '../src/assets/bythecreators3.jpg'
import { FetchCollections } from './APICALLS'
import Collage from './components/Collage'
import bythecreators2 from './assets/bythecreators2.jpg'
import poweredbyou from './assets/poweredbyou.jpg'
import photographersLeftImg from '../src/assets/photographersLeftImg.png'
import photographersRightImg from '../src/assets/photographersRightImg.png'
import logoImagi from '../src/assets/logoImagi.png'


const Community = () => {

  
  return (
    <div className='communityContainer'>
<Collage heading="Community" 
caption="Imagi is a platform powered by an amazing community that has gifted hundreds of thousands of their own photos to fuel creativity around the world."/>

    <div className='collageContainer maskLinear'>

</div>

  {/* for the creators */}

<div className='creatorsWrapper'>
<div className='creatorsTitle'>
<h2> for the creators</h2>
<p>
Creating websites for work, need images for your blog or working on a college project. Our images are free to use for both professional and personal uses.
</p>
</div>
<img src={forCreators} />
</div>

{/*  by the creators */}
<div className='creatorsWrapper'>
<img src={bythecreators3} />
<div className='creatorsTitle'>
<h2> by the creators</h2>
<p>
24000+ photographers sharing their work with you so you don't have to worry about the images and you can fully focus on your work.
</p>
</div>
</div>


<div className='ptImages'>
<img className='leftImg' src={photographersLeftImg} />


<div className='logoContainer'>
  
  <img src={logoImagi} className="logo" alt='imagiLogo' />
  <p>Imagi is a platform fuelled by a community who give their work for free in support of the creatives everywhere. Without them, none of this would be possible.</p>

<button className='btn btn-dark' onClick={()=>{window.location.href = "/explore";}} > Explore </button>

</div>

<img className='rightImg' src={photographersRightImg} />

</div>

{/* <div className='poweredbyouYouContainer'>
<h2> Powered by</h2>

<div className='maskImg maskText'>
  <h1> YOU </h1>
</div>
  <p>Imagi is a platform fuelled by a community who give their work for free in support of the creatives everywhere. Without them, none of this would be possible.</p>

</div> */}

    </div>
  )
}

export default Community