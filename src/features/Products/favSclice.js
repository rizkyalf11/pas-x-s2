import { createSlice } from "@reduxjs/toolkit";

const FavSlice = createSlice({
  name: 'fav slice',
  initialState: {
    favData: [],
    stokFav: null
  },
  reducers: {
    addToFav: (state, action) => {
      const itemIndex = state.favData.findIndex(item => item.id === action.payload.id)
      
      if(itemIndex >= 0) {
        state.favData = state.favData.filter(item => item.id !== action.payload.id)
      } else {
        let cloneData = {...action.payload, isFav: true}
        state.favData.push(cloneData )
      }

    },
    minusStokFav: (state, action) => {
      const itemIndex = state.favData.findIndex(item => item.id === action.payload.product.id)
      if(itemIndex >= 0) {
        if(state.favData[itemIndex].stok > 0) {
          state.favData[itemIndex].stok = action.payload.stokDetail - 1
        }
      }
    },
    plusStokFav: (state, action) => {
      const itemIndex = state.favData.findIndex(item => item.id === action.payload.product.id)
      if(itemIndex >= 0) {
        if(state.favData[itemIndex].stok < state.favData[itemIndex].initialStok - 1 ) {
          state.favData[itemIndex].stok = action.payload.stokDetail + 1
        }
      }
    },
    refreshStokFav: (state, action) => {
      const itemIndex = state.favData.findIndex(item => item.id === action.payload.id)
      if(itemIndex >= 0) {
        state.favData[itemIndex].stok = action.payload.initialStok
      }
    }
  }
})

export const { addToFav, minusStokFav, plusStokFav, refreshStokFav } = FavSlice.actions
export default FavSlice.reducer