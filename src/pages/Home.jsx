/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react'

// FM
import { AnimatePresence, motion } from 'framer-motion'

// SWP
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'

// RDX
import { useDispatch, useSelector } from 'react-redux'
import { changeIsShow } from '../features/ProfileCard/ProfileCardSlice'

// RRD
import { Link, useNavigate } from 'react-router-dom'

// RHT
import { Toaster } from 'react-hot-toast'

// COMP
import CardProduct from '../component/CardProduct'
import CardDetail from '../component/CardDetail'

const Home = () => { 
	// RDX
	const dispatch = useDispatch()
	const  productsLimit  = useSelector((state) => state.products.productsLimit)
	const { isShowCardProfile } = useSelector((state) => state.isShowCardProfile)
	const { detailCard } = useSelector((state) => state.isShowDetail)
	const { data } = useSelector((state) => state.isShowDetail)

	const navigate = useNavigate()

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}, [])

	document.title = 'Fresh4U'
	return (
		<>
			<div>
				<Toaster position='bottom-left' reverseOrder={false} />
			</div>

			<AnimatePresence>
				{detailCard && <CardDetail product={data} />}
			</AnimatePresence>

			<motion.main
				initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: .7, ease: 'easeOut', type: 'tween'}}}
				exit={{opacity: 0}}
			onClick={() => isShowCardProfile && dispatch(changeIsShow())} className="pt-[80px] lg:pt-32 mb-32" id="main">
				<motion.section
					initial={{opacity: 0}}
					animate={{opacity: 1, transition: {delay: .2, duration: .5, ease: 'easeIn'}}}
				className="w-full px-0 lg:px-24 xl:px-40">
					<div className="swiper w-full aspect-ress lg:aspect-rect group lg:rounded-3xl h-[140px] hp:h-[170px] sm:h-[190px] md:h-[250px] ">
						<Swiper
							modules={[Autoplay, Pagination]}
							slidesPerView={1}
							spaceBetween={20}
							loop={true}
							autoplay={{ delay: 2500, disableOnInteraction: false }}
							pagination={{ clickable: true, dynamicBullets: true }}
							className="swiper-wrapper w-full"
						>
							<SwiperSlide>
								<img src='/img/banner1.webp' alt="banner" className="w-full h-full object-cover object-left-bottom" />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/banner2.webp' alt="banner" className="w-full h-full object-cover object-left-bottom" />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/banner3.webp' alt="banner" className="w-full h-full object-cover object-left-bottom" />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/banner4.webp' alt="banner" className="w-full h-full object-cover object-left-bottom" />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/banner5.webp' alt="banner" className="w-full h-full object-cover object-center" />
							</SwiperSlide>
						</Swiper>
					</div>
				</motion.section>

				<motion.section
					initial={{opacity: 0}}
					animate={{opacity: 1, transition: {delay: .5, duration: .5, ease: 'easeIn'}}}
				className="select-none mt-8 hpk:mt-14 px-2 hpsk:px-3 lg:px-24 xl:px-40">
					<h1 className="text-2xl hp:text-3xl md:text-4xl font-bold dark:text-white">Category</h1>
					<div className="mt-4 sm:mt-7 swiper swiper2">
						<Swiper
							direction="horizontal"
							modules={[Pagination]}
							spaceBetween={10}
							freeMode={true}
							pagination={{ el: null, clickable: true }}
							breakpoints={{
								0: {
									slidesPerView: 1.3,
									spaceBetween: 15,
								},
								372: {
									slidesPerView: 1.9,
								},
								520: {
									slidesPerView: 2.5,
								},
								1317: {
									slidesPerView: 4,
								}

							}}
						>
							<SwiperSlide onClick={() => navigate('/local-fruits')} className="w-[180px] h-[100px] hpk:h-[140px] swiper-slide rounded-xl overflow-hidden transition-all duration-300 relative group">
								<img loading="eager" src="/img/category1.webp" alt="category" className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-125" />
								<div className="absolute w-full h-full bg-black top-0 opacity-50 transition-all duration-1000 group-hover:opacity-10 "></div>
								<h3 className=" absolute w-full h-full top-0 text-white flex justify-center items-center font-semibold transition-transform duration-300 p-3 ">Local fruits</h3>
							</SwiperSlide>
							<SwiperSlide onClick={() => navigate('/import-fruits')} className="w-[180px] h-[100px] hpk:h-[140px] swiper-slide rounded-xl overflow-hidden transition-all duration-1000 relative group">
								<img loading="eager" src="/img/category2.webp" alt="category" className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-125" />
								<div className="absolute w-full h-full bg-black top-0 opacity-50 transition-all duration-1000 group-hover:opacity-10 "></div>
								<h3 className=" absolute w-full h-full top-0 text-white flex justify-center items-center font-semibold transition-transform duration-300 p-3 ">Import fruits</h3>
							</SwiperSlide>
							<SwiperSlide onClick={() => navigate('/vegetables')} className="w-[180px] h-[100px] hpk:h-[140px] swiper-slide rounded-xl overflow-hidden transition-all duration-1000 relative group">
								<img loading="eager" src="/img/category3.webp" alt="category" className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-125" />
								<div className="absolute w-full h-full bg-black top-0 opacity-50 transition-all duration-1000 group-hover:opacity-10 "></div>
								<h3 className=" absolute w-full h-full top-0 text-white flex justify-center items-center font-semibold transition-transform duration-300 p-3 ">Vegetables</h3>
							</SwiperSlide>
							<SwiperSlide onClick={() => navigate('/beverages')} className="w-[180px] h-[100px] hpk:h-[140px] swiper-slide rounded-xl overflow-hidden transition-all duration-1000 relative group">
								<img loading="eager" src="/img/category4.webp" alt="category" className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-125" />
								<div className="absolute w-full h-full bg-black top-0 opacity-50 transition-all duration-10 00 group-hover:opacity-10 "></div>
								<h3 className=" absolute w-full h-full top-0 text-white flex justify-center items-center font-semibold transition-transform duration-300 p-3 ">Beverages</h3>
							</SwiperSlide>
						</Swiper>
					</div>
				</motion.section>

				<motion.section
					initial={{opacity: 0}}
					animate={{opacity: 1, transition: {delay: .8, duration: .5, ease: 'easeIn'}}}
					className=" mt-7 md:mt-14 px-2 hpsk:px-3 lg:px-24 xl:px-40">
					<div className='flex w-full justify-between items-center'>
						<h1 className=" text-2xl hp:text-3xl md:text-4xl font-bold dark:text-white">Product</h1>
						<Link to={'/all-products'} className='underline underline-offset-2 text-black/60 dark:text-white/60'>See all</Link>
					</div>
					<div className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5 ">
						{productsLimit &&
							productsLimit.map((product, i) => {
								return <CardProduct key={i} product={product} />
							})}
					</div>
				</motion.section>

				<motion.section
					initial={{opacity: 0}}
					animate={{opacity: 1, transition: {delay: 1.1, duration: .5, ease: 'easeIn'}}}
					className="mt-14 md:mt-14 px-2 hpsk:px-3 lg:px-24 xl:px-40 flex flex-col md:flex-row">
					<div className="w-full md:w-2/4 px-0 md:px-4 py-7 order-2 md:order-1">
						<h1 className=" text-2xl hp:text-3xl md:text-4xl font-bold dark:text-white">Why should fresh 4 you?</h1>
						<p className="  mt-7 text-lg lg:text-2xl text-TexLig dark:text-TexDark text-justify">Our goal is to be an easy and convenient grocery shopping platform while maintaining the quality of our service - helping our customers shop efficiently and have time to do other important things every day.</p>
						<button className="mt-7 h-[40px] w-[120px] hp:h-[50px] hp:w-[180px] border-[2.5px] border-navigator bg-navigator hover:bg-transparent rounded-xl flex justify-center items-center gap-2 dark:hover:border-navigator hover:border-navigator group transition-colors duration-300 ">
							<p className="text-white text-sm hp:text-xl  font-bold group-hover:text-navigator transition-colors duration-300">Check it Out</p>
						</button>
					</div>
					<div className="w-full md:w-2/4 px-0 md:p-4 order-1 md:order-2 flex items-center justify-center">
						<img src="img/why.webp" alt="" className="w-full" />
					</div>
				</motion.section>

				<motion.section
					initial={{opacity: 0}}
					animate={{opacity: 1, transition: {delay: 1.4, duration: .5, ease: 'easeIn'}}}
					className="mt-7 md:mt-14 px-2 hpsk:px-3 lg:px-24 xl:px-40">
					<h1 className=" text-2xl hp:text-3xl md:text-4xl font-bold dark:text-white">Blog</h1>
					<div className="w-full flex flex-row mt-7 gap-3 md:gap-10">
						<div className="w-2/4 cursor-pointer" onClick={() => window.open('https://en.wikipedia.org/wiki/Fruit#:~:text=Various%20culinary%20fruits%20provide%20significant,simply%20eating%20and%20chewing%20them.', '_blank')}>
							<img src="/img/blog1.webp" alt="" className="" />
							<h1 className=" text-lg md:text-2xl lg:text-4xl dark:text-white mt-2 text-justify">5 Benefits of Fruits for our bodies that you don't know about</h1>
						</div>
						<div className="w-2/4 cursor-pointer" onClick={() => window.open('https://en.wikipedia.org/wiki/Avocado', '_blank')}>
							<img src="/img/blog2.webp" alt="" className="" />
							<h1 className="  text-lg md:text-2xl lg:text-4xl  dark:text-white mt-2 text-justify">These are 10 benefits of avocado for health</h1>
						</div>
					</div>

				</motion.section>
			</motion.main>

			<footer className="w-full bg-navigator">
				<div className="py-16 px-10 sm:px-20 lg:px-32">
					<div className="w-full flex flex-col md:flex-row justify-end sm:justify-center md:justify-between">
						<div className='md:hidden w-full mb-8 flex justify-center items-center'>
							<img src="/img/logo.png" alt="logo" className="h-14"/>
						</div>
						<div className=" flex flex-row justify-center gap-[100px] hpsk:gap-[200px] md:flex md:flex-row md:gap-10 lg:gap-16 ">
							<div className="">
								<h5 className="text-HDark font-semibold ">Site Links</h5>
								<ul className="text-HDark mt-3 text-sm">
									<li>About us</li>
									<li>Blog</li>
									<li>Promotions</li>
									<li>Partners</li>
								</ul>
							</div>
							<div className="">
								<h5 className="text-HDark font-semibold">Support</h5>
								<ul className="text-HDark mt-3 text-sm">
									<li>Contact us</li>
									<li>FAQs</li>
								</ul>
							</div>
							<div className='hidden md:inline-block'>
								<h5 className="text-HDark font-semibold ">Sale</h5>
								<ul className="text-HDark mt-3 text-sm">
									<li>Fresh Fruits</li>
									<li>Register 4U Agent</li>
								</ul>
							</div>
						</div>
						
						<div className="hidden md:flex md:gap-10 md:flex-row">
							<img src="/img/logo.png" alt="logo" className="h-14"/>
							<div className=" text-HDark">
								<div className="flex flex-col items-end">
									<p>©2023 Fresh4U</p>
									<p>All Right Reserved</p>
								</div>
								<div className="flex-row gap-5 md:flex mt-8">
									<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
										<img className='w-[32px]' src="/img/facebook.png" alt="facebook" />
									</div>
									<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
										<img className='w-[32px]' src="/img/twitter.png" alt="facebook" />
									</div>
									<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
										<img className='w-[32px]' src="/img/instagram.png" alt="facebook" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full h-1 bg-black bg-opacity-25 mt-5"></div>
					<div className="mt-5 hidden w-full md:flex items-center justify-center gap-6">
						<div >
							<img src="/img/tailwind.png" alt="tailwind" className="aspect-auto"/>
						</div>
						<div >
							<img src="/img/react.png" alt="react" className="aspect-auto"/>
						</div>
						<div >          
							<img src="/img/vitejs.png" alt="vite" />
						</div>
						<div >
							<img src="/img/javascript-original.png" alt="js" />
						</div>
						<div >
							<img src="/img/framer-motion.png" alt="framer motion" />
						</div>
						<div >
							<img src="/img/react-router.png" alt="react router dom" />
						</div>
						<div >
							<img src="/img/redux.png" alt="redux" />
						</div>
					</div>
					<div className='w-full flex items-center justify-center md:hidden'>

					<div className="md:hidden flex-row gap-5 flex mt-8">
						<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
							<img className='w-[32px]' src="/img/facebook.png" alt="facebook" />
						</div>
						<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
							<img className='w-[32px]' src="/img/twitter.png" alt="facebook" />
						</div>
						<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
							<img className='w-[32px]' src="/img/instagram.png" alt="facebook" />
						</div>
					</div>
					</div>
					</div>
				<div className="w-full py-3 bg-black bg-opacity-40 flex items-center flex-col sm:flex-row justify-center gap-4">
					<h5 className="text-HDark text-sm sm:text-base md:block hidden">We facilitate your payment through trusted gateaways</h5>
					<h5 className="text-HDark text-sm sm:text-base md:hidden">© 2023 Fresh4You</h5>
					<div className="hidden md:flex md:flex-row md:gap-1 md:items-center">
						<div><img src="/img/visa.png"  alt="visa"/></div>
						<div><img src="/img/amex.png" alt="amex"/></div>
						<div><img src="/img/cimb.png" alt="cimb"/></div>
						<div><img src="/img/RuPay.png" alt="rupay"/></div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Home
