import React,{useEffect} from 'react'
import Navbar from './Pages/Navbar/Navbar'
import Challenges from './Pages/reusableComponent/Challenges'
import Solution from './Pages/Solutions/Solution'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Pages/Footer'
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home/Home'

const App = () => {
  const location = useLocation()


  useEffect(()=>{
    window.scrollTo({top: 0, behavior:'smooth'})
  },[location])


  return (
    <div className='w-full h-screen pt-16 sm:pt-24 '>
      <Navbar/>
      <ToastContainer />
      {/* <div className='w-full max-w-[75rem] mx-auto'>
      <Challenges/>
      </div> */}
      {/* <Solution/> */}
      <Outlet/>
      
      <Footer/>
    </div>
  )
}

export default App