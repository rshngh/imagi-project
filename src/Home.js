
import React from 'react'
import Header from './components/Header'
import Requests from './Requests'
import Search from './components/Search'
import Results from './Results'
import { useNavigate } from 'react-router-dom'


const Home = (props) => {

  const navigate = useNavigate()
  const requestData=(item)=>{
    navigate(`/results/?query=${item}`)
    console.log("clicked", item)
  }
  const latest = [
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

  return (
    <div className="App">
    <Search />

<div style={{marginTop:"2rem"}}>
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
    </div>
    <Requests imgurl="/random"/>
    

    </div>
  )
}

export default Home