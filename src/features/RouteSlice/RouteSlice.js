import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  route: '/',
  filter: false
}

const RouteSlice = createSlice({
  name: 'route slice',
  initialState,
  reducers: {
    changeRoute: (state, action) => {
      state.route = action.payload
    },
    changeFilter: (state) => {
      state.filter? state.filter = false : state.filter = true
      console.log(state.filter)
    }
  }
})

export const { changeRoute, changeFilter } = RouteSlice.actions
export default RouteSlice.reducer
