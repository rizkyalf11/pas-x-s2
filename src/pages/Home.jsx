import { useState } from 'react'

// FM
import { AnimatePresence, motion } from 'framer-motion'

// SWP
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'

const Home = () => {
	const [isLoad, setIsLoad] = useState(true)
	window.addEventListener('load', () => {
		setTimeout(() => {
			setIsLoad(false)
		}, 2000)
	})

	return (
		<>
			<AnimatePresence>
				{isLoad && (
					<motion.div exit={{ transition: { duration: 2 } }} className="w-full h-screen flex fixed top-0 z-40">
						<motion.h1 exit={{fontSize: 0, transition: { ease: 'easeOut',  type: 'tween' }}} className='text-white animate-pulse font-semibold fixed top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-5xl'>Loading..</motion.h1>
						<motion.div exit={{ y: -800, transition: { delay: 0.2, ease: 'easeOut', duration: 0.5, type: 'tween' } }} className="flex-1 bg-navigator "></motion.div>
						<motion.div exit={{ y: -800, transition: { delay: 0.4, ease: 'easeOut', duration: 0.5, type: 'tween' } }} className="flex-1 bg-navigator "></motion.div>
						<motion.div exit={{ y: -800, transition: { delay: 0.6, ease: 'easeOut', duration: 0.5, type: 'tween' } }} className="flex-1 bg-navigator "></motion.div>
						<motion.div exit={{ y: -800, transition: { delay: 0.8, ease: 'easeOut', duration: 0.5, type: 'tween' } }} className="flex-1 bg-navigator "></motion.div>
						<motion.div exit={{ y: -800, transition: { delay: 1, ease: 'easeOut', duration: 0.5, type: 'tween' } }} className="flex-1 bg-navigator "></motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<main className="pt-[80px] lg:pt-32 overflow-x-hidden" id="main">
				<section className="w-full px-0 lg:px-24 xl:px-40">
					<div className="swiper w-full aspect-ress lg:aspect-rect group lg:rounded-3xl">
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
								<img src="./src/assets/img/banner1.png" alt="banner" className="w-full h-full object-cover object-left-bottom" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="./src/assets/img/banner2.png" alt="banner" className="w-full h-full object-cover object-left-bottom" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="./src/assets/img/banner3.png" alt="banner" className="w-full h-full object-cover object-left-bottom" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="./src/assets/img/banner4.png" alt="banner" className="w-full h-full object-cover object-left-bottom" />
							</SwiperSlide>
							<SwiperSlide>
								<img src="./src/assets/img/banner6.png" alt="banner" className="w-full h-full object-cover object-center" />
							</SwiperSlide>
						</Swiper>
					</div>
				</section>

				<section className="select-none mt-8 hpk:mt-14 px-5 hpsk:px-10 lg:px-24 xl:px-40">
					<h1 className="text-2xl hp:text-3xl md:text-4xl font-semibold dark:text-white">Category</h1>
					<div className="mt-4 sm:mt-7 swiper swiper2">
						<Swiper
							direction="horizontal"
							modules={[Pagination]}
							spaceBetween={30}
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
								},
								1705: {
									slidesPerView: 5,
								},
							}}
						>
							<SwiperSlide className="w-[180px] h-[100px] hpk:h-[200px] swiper-slide rounded-xl overflow-hidden transition-all duration-300 relative group">
								<img loading="eager" src="./src/assets/img/category1.jpg" alt="category" className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-125" />
								<div className="absolute w-full h-full bg-black top-0 opacity-50 transition-all duration-1000 group-hover:opacity-10 "></div>
								<h3 className=" absolute w-full h-full top-0 text-white flex justify-center items-center font-semibold transition-transform duration-300 p-3 ">Local fruits</h3>
							</SwiperSlide>
							<SwiperSlide className="w-[180px] h-[100px] hpk:h-[200px] swiper-slide rounded-xl overflow-hidden transition-all duration-1000 relative group">
								<img loading="eager" src="./src/assets/img/category2.jpg" alt="category" className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-125" />
								<div className="absolute w-full h-full bg-black top-0 opacity-50 transition-all duration-1000 group-hover:opacity-10 "></div>
								<h3 className=" absolute w-full h-full top-0 text-white flex justify-center items-center font-semibold transition-transform duration-300 p-3 ">Import fruits</h3>
							</SwiperSlide>
							<SwiperSlide className="w-[180px] h-[100px] hpk:h-[200px] swiper-slide rounded-xl overflow-hidden transition-all duration-1000 relative group">
								<img loading="eager" src="./src/assets/img/category3.jpeg" alt="category" className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-125" />
								<div className="absolute w-full h-full bg-black top-0 opacity-50 transition-all duration-1000 group-hover:opacity-10 "></div>
								<h3 className=" absolute w-full h-full top-0 text-white flex justify-center items-center font-semibold transition-transform duration-300 p-3 ">Vegetables</h3>
							</SwiperSlide>
							<SwiperSlide className="w-[180px] h-[100px] hpk:h-[200px] swiper-slide rounded-xl overflow-hidden transition-all duration-1000 relative group">
								<img loading="eager" src="./src/assets/img/category4.jpg" alt="category" className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-125" />
								<div className="absolute w-full h-full bg-black top-0 opacity-50 transition-all duration-10 00 group-hover:opacity-10 "></div>
								<h3 className=" absolute w-full h-full top-0 text-white flex justify-center items-center font-semibold transition-transform duration-300 p-3 ">Beverages</h3>
							</SwiperSlide>
						</Swiper>
					</div>
				</section>
			</main>
		</>
	)
}

export default Home
