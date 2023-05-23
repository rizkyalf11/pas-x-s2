import { createSlice } from '@reduxjs/toolkit'

export const DetailCard = createSlice({
  name: 'profile card',
  initialState: {
    detailCard: false
  },
  reducers: {
    changeIsShowCard: (state) => {
      (state.detailCard) ? state.detailCard = false : state.detailCard = true 
    }
  }
})

export const { changeIsShowCard } = DetailCard.actions
export default DetailCard.reducer