import { createSlice } from '@reduxjs/toolkit'

export const DetailCard = createSlice({
  name: 'profile card',
  initialState: {
    detailCard: false,
    data: {}
  },
  reducers: {
    changeIsShowCard: (state) => {
      (state.detailCard) ? state.detailCard = false : state.detailCard = true 
    },
    openCard: (state, actions) => {
      state.data = actions.payload
      if(!state.detailCard) state.detailCard = true
    }
  }
})

export const { changeIsShowCard, openCard } = DetailCard.actions
export default DetailCard.reducer