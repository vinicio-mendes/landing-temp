import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import 'aos/dist/aos.css'
import './css/style.css'

import AOS from 'aos'

// import Home from './pages/Home'
// import Features from './pages/Features'
// import Pricing from './pages/Pricing'
// import Blog from './pages/Blog'
// import BlogPost from './pages/BlogPost'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Help from './pages/Help'
// import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'
// import ResetPassword from './pages/ResetPassword'
import PageNotFound from './pages/PageNotFound'

function App() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]) // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<PageNotFound />} />
        <Route path="/features" element={<PageNotFound />} />
        <Route path="/pricing" element={<PageNotFound />} />
        <Route path="/blog" element={<PageNotFound />} />
        <Route path="/blog-post" element={<PageNotFound />} />
        <Route path="/about" element={<PageNotFound />} />
        <Route path="/contact" element={<PageNotFound />} />
        <Route path="/help" element={<PageNotFound />} />
        <Route path="/signin" element={<PageNotFound />} />
        <Route path="/signup" element={<PageNotFound />} />
        <Route path="/reset-password" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
