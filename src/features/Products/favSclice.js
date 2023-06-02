import { createSlice } from "@reduxjs/toolkit";

const FavSlice = createSlice({
  name: 'fav slice',
  initialState: {
    favData: [],
    backUpFav: [],
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
    },
    generateFilterFav: (state, action) => {
      if(action.payload.jenis == 'max') {
        if(state.backUpFav.length != 0) {
          state.favData = state.backUpFav
        } 
        state.backUpFav = state.favData

        state.favData = state.favData.filter(item => item.price <= 2000)
      } else if(action.payload.jenis == 'min') {
        if(state.backUpFav.length != 0) {
          state.favData = state.backUpFav
        } 
        state.backUpFav = state.favData
        
        state.favData = state.favData.filter(item => item.price >= 2000)
      } else if(action.payload.jenis == 'inputCostum') {
        if(state.backUpFav.length != 0) {
          state.favData = state.backUpFav
        } 
        state.backUpFav = state.favData

        if(action.payload.min == 0) {
          state.favData = state.favData.filter(item => item.price <= action.payload.max)
        } else if(action.payload.max == 0 ) {
          state.favData = state.favData.filter(item => item.price >= action.payload.min)
        } else {
          state.favData = state.favData.filter(item => item.price >= action.payload.min && item.price <= action.payload.max)
        }
      } else if(action.payload.jenis == 'rate') {
        if(state.backUpFav.length != 0) {
          state.favData = state.backUpFav
        } 
        state.backUpFav = state.favData

        state.favData = state.favData.filter(item => Number(item.rate.split('.')[0]) >= 4)
      }
    },
    resetFilterFav: (state) => {
      state.favData = state.backUpFav
      state.backUpFav = []
    },
  }
})

export const { addToFav, minusStokFav, plusStokFav, refreshStokFav, generateFilterFav, resetFilterFav } = FavSlice.actions
export default FavSlice.reducer