import { configureStore } from '@reduxjs/toolkit'
import ProfileCardSlice from '../features/ProfileCard/ProfileCardSlice'
import products from '../features/Products/ProductsSlice'
import cardDetail from '../features/Products/isShowDetail'
import route from '../features/RouteSlice/RouteSlice'
import cart from '../features/Products/cartSlice'

export const store = configureStore({
  reducer: {
    isShowCardProfile: ProfileCardSlice,
    products,
    isShowDetail: cardDetail,
    route,
    cart
  },
})