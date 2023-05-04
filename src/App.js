import "./App.css"
import { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import Home from "./Home";
import About from "./About";
import Header from "./components/Header";
import Explore from './Explore'
import Community from './Community'
import Blogs from './Blogs'
import Results from "./Results";
import Footer from "./Footer";
import Registration from "./Registration";
import Register from "./Register";
import Dashboard from "./Dashboard";



function App() {


  return (
  
    <div className="App">
    <Header />
    {/* <Routes>
      <Route path="/" component={Home}/> 
      <Route path="/about" component={About}/>
    </Routes> */}
    <Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route path='/about' element={< About  />}></Route>
    <Route path='/explore' element={< Explore />}></Route>
    <Route path='/community' element={< Community />}></Route>
    <Route path='/blogs' element={< Blogs />}></Route>
    <Route path="/results" element={<Results />}></Route>
    <Route path="/registration" element={<Registration />}></Route>
    <Route path="dashboard" element={<Dashboard />} ></Route>
    <Route path="/register" element={< Register />}></Route>
    
    </Routes>
    
    <Footer />
    </div>
 
  );
}

export default App;
