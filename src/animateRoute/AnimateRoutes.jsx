// RRD
import { Routes, Route, useLocation } from 'react-router-dom'

// Pages
import Home from '../pages/Home'
import AllProducts from '../pages/AllProducts'
import Beverages from '../pages/Beverages'
import Vegetables from '../pages/Vegetables'
import ImportFruits from '../pages/ImportFruits'
import LocalFruits from '../pages/LocalFruits'
import Cart from '../pages/Cart'
import Wishlist from '../pages/Wishlist'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'

const AnimateRoutes = () => {
  const location = useLocation()
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='/all-products' element={<AllProducts />} />
      <Route path='/local-fruits' element={<LocalFruits />} />
      <Route path='/import-fruits' element={<ImportFruits />} />
      <Route path='/vegetables' element={<Vegetables />} />
      <Route path='/beverages' element={<Beverages />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
    </Routes>
  )
}

export default AnimateRoutes