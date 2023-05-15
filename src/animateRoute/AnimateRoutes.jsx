// RRD
import { Routes, Route, useLocation } from 'react-router-dom'

// Pages
import Home from '../pages/Home'

const AnimateRoutes = () => {
  const location = useLocation()
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default AnimateRoutes