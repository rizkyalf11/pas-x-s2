import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeRoute } from '../features/RouteSlice/RouteSlice'
import { changePath } from '../features/Products/ProductsSlice'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { pushData } from '../features/Login/LoginSlice'

const SignUp = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { route } = useSelector((state) => state.route)
	const { message } = useSelector((state) => state.login)


	useEffect(() => {
		dispatch(changeRoute(location.pathname))
		dispatch(changePath(location.pathname))
	}, [dispatch, route])

  const name = useRef(null)
  const email = useRef(null)
  const pw = useRef(null)
	const [isCek, setIsCek] = useState(false)
  const [pwCor, setPwCor] = useState(false)
  const [emailCor, setEmailCor] = useState(false)
  const [msg, setMsg] = useState('')

	const checkPassword = (str) => {
		var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    setPwCor(re.test(str))
		return re.test(str)
	}

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    setEmailCor(re.test(email))
    return re.test(email);
  }

  const handleSubmit = () => {
    if(name.current.value == '' || email.current.value == '' || pw.current.value == '') {
      setMsg('Harap isi bidang')
    } else {
      if(pwCor && emailCor) {
        dispatch(pushData({
          username: name.current.value,
          email: email.current.value,
          password: pw.current.value 
        }))
        setMsg(false)
      } else {
        setMsg('Pastikan sesuai syarat')
      }
    }
  }

	return (
		<div className="w-full h-screen flex justify-center items-center">
			<div className="flex flex-col w-[480px] items-center px-5 py-10 ">
				<div className="">
					<img src="/img/logo.png" alt="" className="h-14" />
				</div>
				<div className="flex gap-14 mt-16">
					<div className="cursor-pointer" onClick={() => {
              navigate('/signin')}
            }>
						<p className="font-quicksand text-2xl font-bold border-b-2 py-1 transition-all duration-300  hover:border-b-navigator">Sign In</p>
					</div>
					<div className="cursor-pointer">
						<p className="font-quicksand text-2xl font-bold border-b-2 py-1 transition-all duration-300 border-b-navigator">Sign Up</p>
					</div>
				</div>
				<div className="w-full flex flex-col gap-6 mt-7">
          {msg != '' && (
            <p className='-mb-4 text-red-400'>{msg}</p>
          )}
          {message != '' && (
            <p className='-mb-4 text-red-400'>{message}</p>
          )}
					<input ref={name} type="text" name="" id="" className="text-2xl px-6 py-3 outline-none border-2 bg-input rounded-md w-full border-outline focus:border-black/40" placeholder="Enter your name" />
					<input ref={email} onChange={(e) => validateEmail(e.target.value)} type="text" name="" id="" className={`text-2xl px-6 py-3 outline-none border-2 bg-input rounded-md w-full border-outline focus:border-black/40 ${emailCor? 'focus:border-green-400' : 'focus:border-red-500/60'}`} placeholder="Enter your email" />
					<input ref={pw} onChange={(e) => checkPassword(e.target.value)} type="password" name="" id="" className={`text-2xl px-6 py-3 -mb-6 outline-none border-2 bg-input rounded-md w-full border-outline ${pwCor? 'focus:border-green-400' : 'focus:border-red-500/60'}`} placeholder="Enter your password" />
          <p className='text-black/50'>Harus ada huruf kapital, angka, spesial </p>
					<label htmlFor="remind" className=" font-quicksand flex items-center flex-row gap-2 text-noHover">
						<input onChange={(e) => setIsCek(e.target.checked)} type="checkbox" name="" id="remind" className="w-4 h-4 accent-navigator" />I agree to all Term. Privacy Policy and Fees
					</label>
				</div>
				<div className="w-full mt-16">
					{isCek ? (
						<button onClick={() => handleSubmit()} className="w-full py-3 bg-navigator border-2 border-navigator rounded-md text-2xl text-white font-quicksand font-semibold hover:bg-transparent hover:text-navigator transition-colors duration-300">Sign Up</button>
					) : (
						<button className="w-full py-3 bg-gray-300 border-2 border-gray-300 rounded-md text-2xl text-white font-quicksand font-semibol cursor-default">Sign Up</button>
					)}
				</div>
				<h1 className="font-quicksand text-noHover font-medium mt-2">
					Already have an account?{' '}
					<Link to="/signin" className="text-navigator">
						Sign In
					</Link>
				</h1>
			</div>
		</div>
	)
}

export default SignUp
