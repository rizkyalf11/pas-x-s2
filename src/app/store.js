import { configureStore } from '@reduxjs/toolkit'
import ProfileCardSlice from '../features/ProfileCard/ProfileCardSlice'

export const store = configureStore({
  reducer: {
    isShowCardProfile: ProfileCardSlice
  },
})