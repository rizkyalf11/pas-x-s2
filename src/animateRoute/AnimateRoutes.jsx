// RRD
import { Routes, Route, useLocation } from 'react-router-dom'

// Pages
import Home from '../pages/Home'
import AllProducts from '../pages/AllProducts'

const AnimateRoutes = () => {
  const location = useLocation()
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='/all-products' element={<AllProducts />} />
    </Routes>
  )
}

export default AnimateRoutes