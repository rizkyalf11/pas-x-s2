import { createSlice } from "@reduxjs/toolkit";

const dataLogin = localStorage.getItem('loginData') !== null ? JSON.parse(localStorage.getItem('loginData')) : []

const initialState = {
  loginData: dataLogin,
  isSignIn: false,
  message: '',
  username: '',
  email: '',
  msgLogin: ''
}

const LoginSlice = createSlice({
  name: 'login slice',
  initialState,
  reducers: {
    setIsSignIn: (state, action) => {
      state.isSignIn = action.payload
    },
    pushData: (state, action) => {
      const itemIndex = state.loginData.findIndex(item => item.email.toLowerCase() == action.payload.email.toLowerCase())
      if(itemIndex < 0) {
        state.message = ''
        state.loginData.push(action.payload)
        localStorage.setItem('loginData', JSON.stringify(state.loginData))
      } else {
        state.message = 'Email sudah terdaftar'
      }
    },
    login: (state, action) => {
      const itemIndex = state.loginData.findIndex(item => item.email.toLowerCase() == action.payload.email.toLowerCase())
      if(itemIndex >= 0) {
        if(state.loginData[itemIndex].password != action.payload.password) {
          state.msgLogin ='password salah'
        } else {
          state.msgLogin =''
          state.isSignIn = true
          state.username = state.loginData[itemIndex].username
          state.email = state.loginData[itemIndex].email
        }
      } else {
        state.msgLogin = 'email tidak terdaftar'
      }
    }
  }
})

export const { setIsSignIn, pushData, login } = LoginSlice.actions
export default LoginSlice.reducer
