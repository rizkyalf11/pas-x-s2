import { createSlice } from '@reduxjs/toolkit'

export const ConfirmCart = createSlice({
  name: 'conf card',
  initialState: {
    isConf: false,
    data: {},
    isConfPay: false,
    total: ''
  },
  reducers: {
    changeIsConf: (state) => {
      state.isConf = !state.isConf
    },
    addDataConf: (state, action) => {
      state.data = action.payload
    },
    changeIsConfPay: (state, action) => {
      state.total = action.payload
      state.isConfPay = !state.isConfPay
    },
  }
})

export const { changeIsConf, addDataConf, changeIsConfPay } = ConfirmCart.actions
export default ConfirmCart.reducer