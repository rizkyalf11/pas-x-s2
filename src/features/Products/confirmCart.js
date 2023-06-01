import { createSlice } from '@reduxjs/toolkit'

export const ConfirmCart = createSlice({
  name: 'conf card',
  initialState: {
    isConf: false,
    data: {}
  },
  reducers: {
    changeIsConf: (state) => {
      state.isConf = !state.isConf
    },
    addDataConf: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { changeIsConf, addDataConf } = ConfirmCart.actions
export default ConfirmCart.reducer