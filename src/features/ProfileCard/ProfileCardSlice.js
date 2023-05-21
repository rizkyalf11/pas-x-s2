import { createSlice } from '@reduxjs/toolkit'

export const ProfileCardSlice = createSlice({
  name: 'profile card',
  initialState: {
    isShowCardProfile: false
  },
  reducers: {
    changeIsShow: (state) => {
      (state.isShowCardProfile) ? state.isShowCardProfile = false : state.isShowCardProfile = true 
    }
  }
})

export const { changeIsShow } = ProfileCardSlice.actions
export default ProfileCardSlice.reducer