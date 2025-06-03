import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter,Route,Routes, Link } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import Navbar from './Navbar'
import Nonveg from './Nonveg'
import './nav.css'
import Veg from './Veg'
import './App.css'

function App() {
  const cart=useSelector((state)=>state.cart);
  const totalItems=cart.reduce((sum,item)=>sum+item.quantity,0);
  

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <nav style={{display:"flex",gap:"20px",padding:"10px"}}>
        <Link to="/">myshop</Link>
        <Link to="/">nonveg</Link>
        <Link to="/">veg</Link>
        <Link to="/cart">cart({totalItems})</Link>
      </nav>
      
        <Route path ="/Nonveg" element ={<Nonveg/>}></Route>
        
        <Route path ="/Veg" element ={<Veg/>}></Route>
        {/* Your route components go here */}
      </Routes>
   
    
      
      </BrowserRouter>
    </>
   
  )
   
  
}

export default App
