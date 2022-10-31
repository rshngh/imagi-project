
import React from 'react'
import Header from './components/Header'
import Requests from './Requests'
import Search from './components/Search'

const Home = (props) => {
  return (
    <div className="App">
    <Search />
    <Requests imgurl="/random"/>

    </div>
  )
}

export default Home