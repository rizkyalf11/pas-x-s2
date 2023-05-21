import { useEffect, useState } from 'react'

// FM
import { AnimatePresence, motion } from 'framer-motion'

// HDLS
import { Switch } from '@headlessui/react'

// img
import logo from '../assets/img/logo.png'
import cart from '../assets/img/cart.svg'
import heart from '../assets/img/heart.svg'
import search from '../assets/img/search.svg'
import person from '../assets/img/person.jpg'

//RDX
import { useSelector, useDispatch } from 'react-redux'
import { changeIsShow } from '../features/ProfileCard/ProfileCardSlice'

const Navbar = () => {
	const dispatch = useDispatch()
	const { isShowCardProfile } = useSelector(state => state.isShowCardProfile)

	const cardVariants = {
		hidden: {
			opacity: 0,
			x: 300,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.6, ease: 'easeOut', type: 'spring' },
		},
		exit: {
			opacity: 0,
			x: 300,
			transition: { duration: 0.6, ease: 'easeIn', type: 'spring' },
		},
	}

	const userTheme = localStorage.getItem('theme')
	const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

	const themeCheck = () => {
		if (userTheme == 'dark' || (!userTheme && systemTheme)) {
			document.documentElement.classList.add('dark')
			setEnabled(true)
		} else {
			setEnabled(false)
		}
	}

	const ChangeDark = () => {
		if(!enabled) {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}

	const [enabled, setEnabled] = useState(false)
	
	useEffect(() => {
		if(systemTheme) setEnabled(true);
		themeCheck()
	}, [systemTheme])

	return (
		<header className="h-[80px] bg-navigator dark:bg-darkNav flex flex-row items-center justify-between gap-1 hpsk:gap-3 hpk:gap-0 px-2 hpsk:px-4 hpk:px-10 lg:px-20 xl:px-40 fixed inset-x-0 top-0 shadow-xl z-30 ">
			<img src={logo} alt="" className="h-[55px] hidden lg:block" />
			<div className="relative flex items-center h-[50px] ">
				<label htmlFor="search" className="absolute left-3 top-1/2 -translate-y-1/2 ">
					<img src={search} alt="Search" className="w-[18px]" />
				</label>
				<input
					type="search"
					name=""
					id="search"
					placeholder="Cari buah apa?"
					className="h-[35px] hpsk:h-[40px] rounded-full w-[98%] hpk:w-full xl:w-[580px] text-base hpsk:text-lg pl-[50px] outline outline-white focus:outline-[3px] focus:outline-[#8b8b8b] pr-[15px] hpk:pr-[30px] transition duration-300 hover:ring-4 hover:ring-green-600"
				/>
			</div>
			<div className=" flex flex-row items-center gap-3 hp:gap-4">
				<img src={heart} alt="Wishlist" className="w-[28px] md:w-[32px] cursor-pointer" />
				<img src={cart} alt="Cart" className="w-[28px] md:w-[32px] cursor-pointer" />
				<div className=" flex flex-row gap-2 items-center cursor-pointer" id="profile">
					<h1 className=" text-white text-xl md:text-2xl font-poppins font-normal hidden sm:block">Person</h1>
					<img onClick={() => dispatch(changeIsShow())} className="w-[45px] aspect-square object-cover rounded-full lg:w-[50px]" src={person} alt="You" />
				</div>
			</div>

			<AnimatePresence>
				{isShowCardProfile && (
					<motion.div
						variants={cardVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="absolute flex flex-col gap-2 w-[280px] h-[320px] md:w-[340px] md:h-[340px] rounded-3xl border border-black/5 bg-white dark:bg-darkNav shadow-xl right-2 top-28 py-4 px-4"
						id="profileDetail"
					>
						<div className="flex items-center gap-3 mb-2">
							<img src={person} alt="You" className="aspect-square w-[100px] object-cover rounded-full" />
							<div className=" flex flex-col font-poppins">
								<h1 className="  text-xl md:text-2xl font-medium dark:text-white">person</h1>
								<h2 className=" font-light text-[10px] md:text-sm text-[#8b8b8b]">mondokskuy19@gmail.com</h2>
							</div>
						</div>
						<hr />
						<div className=" flex flex-col gap-3 ml-5 mt-2">
							<div className=" text-[#8b8b8b] dark:text-white dark:hover:text-navigator hover:text-navigator flex flex-row items-center gap-4 group">
								<svg className="fill-[#8b8b8b] group-hover:fill-green-400" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g>
										<path d="M17.5 1.9165C16.3739 1.93402 15.2724 2.24836 14.3067 2.82778C13.341 3.40719 12.5453 4.23117 12 5.2165C11.4546 4.23117 10.6589 3.40719 9.6932 2.82778C8.7275 2.24836 7.62601 1.93402 6.49996 1.9165C4.7049 1.99449 3.01366 2.77976 1.79574 4.10074C0.577818 5.42171 -0.0677922 7.17103 -4.17093e-05 8.9665C-4.17093e-05 13.5135 4.78596 18.4795 8.79996 21.8465C9.69618 22.5996 10.8293 23.0125 12 23.0125C13.1706 23.0125 14.3037 22.5996 15.2 21.8465C19.214 18.4795 24 13.5135 24 8.9665C24.0677 7.17103 23.4221 5.42171 22.2042 4.10074C20.9863 2.77976 19.295 1.99449 17.5 1.9165Z" />
									</g>
									<defs>
										<clipPath id="clip0_406_1997">
											<rect width="24" height="24" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<h3 className="font-bold cursor-pointer select-none text-base md:text-xl transition-all duration-150">Wishlist</h3>
							</div>
							<div className="text-[#8b8b8b] dark:text-white dark:hover:text-navigator hover:text-navigator group flex flex-row items-center gap-4">
								<svg className="fill-[#8b8b8b] group-hover:fill-green-400" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<g>
										<path d="M22.713 4.077C22.4317 3.73944 22.0796 3.46795 21.6815 3.28182C21.2835 3.09568 20.8494 2.99946 20.41 3H4.242L4.2 2.649C4.11405 1.91942 3.76338 1.24673 3.21449 0.758478C2.6656 0.270223 1.95663 0.000341793 1.222 0L1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H1.222C1.46693 2.00003 1.70334 2.08996 1.88637 2.25272C2.06941 2.41547 2.18634 2.63975 2.215 2.883L3.591 14.583C3.73385 15.7998 4.31848 16.9218 5.23391 17.736C6.14934 18.5502 7.33185 19 8.557 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8946 18.5196 20 18.2652 20 18C20 17.7348 19.8946 17.4804 19.7071 17.2929C19.5196 17.1054 19.2652 17 19 17H8.557C7.93806 16.9983 7.3348 16.8051 6.82994 16.4471C6.32507 16.089 5.94331 15.5835 5.737 15H17.657C18.8293 15.0001 19.9643 14.5882 20.8638 13.8364C21.7633 13.0846 22.37 12.0407 22.578 10.887L23.363 6.533C23.4414 6.10101 23.4237 5.65707 23.3114 5.23264C23.1991 4.80821 22.9948 4.41368 22.713 4.077Z" />
										<path d="M6.99994 24.0006C8.1045 24.0006 8.99993 23.1052 8.99993 22.0006C8.99993 20.896 8.1045 20.0006 6.99994 20.0006C5.89537 20.0006 4.99994 20.896 4.99994 22.0006C4.99994 23.1052 5.89537 24.0006 6.99994 24.0006Z" />
										<path d="M17 24.0006C18.1046 24.0006 19 23.1052 19 22.0006C19 20.896 18.1046 20.0006 17 20.0006C15.8954 20.0006 15 20.896 15 22.0006C15 23.1052 15.8954 24.0006 17 24.0006Z" />
									</g>
									<defs>
										<clipPath id="clip0_406_1913">
											<rect width="24" height="24" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<h3 className="font-bold cursor-pointer select-none text-base md:text-xl transition-all duration-150">Cart</h3>
							</div>
							<div className="text-[#8b8b8b] dark:text-white dark:hover:text-navigator hover:text-navigator group  flex flex-row items-center gap-4">
								<svg className="fill-[#8b8b8b] group-hover:fill-green-400" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 12C15.3137 12 18 9.31371 18 6C18 2.68629 15.3137 0 12 0C8.68629 0 6 2.68629 6 6C6 9.31371 8.68629 12 12 12Z" />
									<path d="M12 13.9991C7.03172 14.0046 3.00553 18.0308 3 22.9991C3 23.5514 3.4477 23.9991 3.99998 23.9991H20C20.5522 23.9991 21 23.5514 21 22.9991C20.9945 18.0308 16.9683 14.0046 12 13.9991Z" />
								</svg>
								<h3 className="font-bold cursor-pointer select-none text-base md:text-xl transition-all duration-150">About Creator</h3>
							</div>
						</div>
						<hr className="my-2" />
						<div className="ml-4 flex gap-2 items-center">
							<Switch onClick={() => ChangeDark()} checked={enabled} onChange={setEnabled} className={`${enabled ? 'bg-navigator' : 'bg-gray-200'} relative inline-flex h-6 w-11 items-center rounded-full`}>
								<span className="sr-only">Enable notifications</span>
								<span className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition`} />
							</Switch>
							<h3 className='text-black dark:text-white'>Dark Mode</h3>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	)
}

export default Navbar
