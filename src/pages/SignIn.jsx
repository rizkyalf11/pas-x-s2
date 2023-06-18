import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeRoute } from '../features/RouteSlice/RouteSlice'
import { changePath } from '../features/Products/ProductsSlice'
import { useEffect, useState } from 'react'
import { login } from '../features/Login/LoginSlice'

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
	const { route } = useSelector((state) => state.route)
	const { msgLogin } = useSelector((state) => state.login)

  useEffect(() => {
		dispatch(changeRoute(location.pathname))
		dispatch(changePath(location.pathname))
	}, [dispatch, route])

  const [emailUser, setEmailUser] = useState('')
  const [pw, setPw] = useState('')

  const hdlSubmit = () => {
    dispatch(login({
      email: emailUser,
      password: pw
    }))
  }

  const logged = () => {
    if(msgLogin == '') {
      navigate('/')
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col w-[480px] items-center px-5 py-10 ">
      <div className="">
        <img src="/img/logo.png" alt="" className="h-14" />
      </div>
      <div className="flex gap-14 mt-16">
        <div className="cursor-pointer">
          <p className="font-quicksand text-2xl font-bold border-b-2 py-1 transition-all duration-300 border-b-navigator">Sign In</p>
        </div>
        <div className="cursor-pointer" onClick={() => {
            navigate('/signup')
          }}>
          <p className="font-quicksand text-2xl font-bold border-b-2 py-1 transition-all duration-300  hover:border-b-navigator">Sign Up</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-6 mt-7">
        {msgLogin != '' && (
            <p className='-mb-4 text-red-400'>{msgLogin}</p>
        )}
        
        <input onChange={(e) => setEmailUser(e.target.value)} type="text" name="" id="" className="text-2xl px-6 py-3 outline-none border-2 bg-input rounded-md w-full border-outline" placeholder="Email" />
        <input onChange={(e) => setPw(e.target.value)} type="password" name="" id="" className="text-2xl px-6 py-3 outline-none border-2 bg-input rounded-md w-full border-outline" placeholder="Password" />
      </div>
      {emailUser !== '' && pw !== '' ? (
        <div onClick={() => {
            hdlSubmit()
            logged()
            logged()
          }} 
          className="w-full mt-16">
          <button className="w-full py-3 bg-navigator border-2 border-navigator rounded-md text-2xl text-white font-quicksand font-semibold hover:bg-transparent hover:text-navigator transition-colors duration-300">Sign In</button>
        </div>
      ) : (
        <div className="w-full mt-16">
          <button className="w-full py-3 bg-gray-300 border-2 border-gray-300 rounded-md text-2xl text-white font-quicksand font-semibold ">Sign In</button>
        </div>
      )}
      <h1 className="font-quicksand text-noHover font-medium mt-2 cursor-pointer">Forgot your password?</h1>
    </div>
    </div>
  )
}

export default SignIn