import { configureStore } from '@reduxjs/toolkit'
import ProfileCardSlice from '../features/ProfileCard/ProfileCardSlice'
import products from '../features/Products/ProductsSlice'
import cardDetail from '../features/Products/isShowDetail'
import route from '../features/RouteSlice/RouteSlice'
import cart from '../features/Products/cartSlice'
import confirmCart from '../features/Products/confirmCart'
import favslice from '../features/Products/favSclice'

export const store = configureStore({
  reducer: {
    isShowCardProfile: ProfileCardSlice,
    products,
    isShowDetail: cardDetail,
    route,
    cart,
    confirmCart,
    favslice
  },
})