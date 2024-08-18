import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import {Route,Routes, BrowserRouter} from 'react-router-dom'
import ReactC from './pages/ReactC'
import Node from './pages/Node'
import Express from './pages/Express'
import MongoDB from './pages/MongoDB'
import Footer from './Components/Footer'

const App = () => {
  return (
  
    
      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path=''  element={<div className='mainPage'><ReactC /> </div>} />
          <Route  path='/react' element={<div className='mainPage'><ReactC/></div>}/>
          <Route  path='/mongo' element={<div className='mainPage'><MongoDB/></div>}/>
          <Route  path='/express' element={<div className='mainPage'><Express/></div>}/>
          <Route  path='/node' element={<div className='mainPage'><Node/></div>}/>
          
        </Routes>
        <Footer />
      </BrowserRouter>

    
    
  
  )
}

export default App