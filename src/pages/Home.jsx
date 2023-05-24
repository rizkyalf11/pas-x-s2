/* eslint-disable react/no-unknown-property */
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

// RDX
import { useDispatch, useSelector } from 'react-redux'
import { changeIsShow } from '../features/ProfileCard/ProfileCardSlice'
import CardDetail from '../component/CardDetail'
import { changeIsShowCard } from '../features/Products/isShowDetail'

// RRD
import { Link } from 'react-router-dom'

const Home = () => {
	const [isLoad, setIsLoad] = useState(false)
	window.addEventListener('load', () => {
		setTimeout(() => {
			setIsLoad(false)
		}, 2000)
	})

	// RDX
	const dispatch = useDispatch()
	const { products } = useSelector((state) => state.products)
	const { isShowCardProfile } = useSelector((state) => state.isShowCardProfile)
	const { detailCard } = useSelector((state) => state.isShowDetail)

	const [detailProd, setDetailProd] = useState({})
	const showCard = (product) => {
		if(!detailCard){
			setDetailProd(product)
			dispatch(changeIsShowCard())
		}
	}

	return (
		<>
			<AnimatePresence>
				{isLoad && (
					<motion.div exit={{ transition: { duration: 2 } }} className="w-full h-screen flex fixed top-0 z-40">
						<motion.h1 exit={{ fontSize: 0, transition: { ease: 'easeOut', type: 'tween' } }} className="text-white dark:text-[#02D05B] animate-pulse font-semibold fixed top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-5xl">
							Loading..
						</motion.h1>
						<motion.div exit={{ y: -800, transition: { delay: 0.2, ease: 'easeOut', duration: 0.5, type: 'tween' } }} className="flex-1 bg-navigator dark:bg-darkNav "></motion.div>
						<motion.div exit={{ y: -800, transition: { delay: 0.4, ease: 'easeOut', duration: 0.5, type: 'tween' } }} className="flex-1 bg-navigator dark:bg-darkNav "></motion.div>
						<motion.div exit={{ y: -800, transition: { delay: 0.6, ease: 'easeOut', duration: 0.5, type: 'tween' } }} className="flex-1 bg-navigator dark:bg-darkNav "></motion.div>
						<motion.div exit={{ y: -800, transition: { delay: 0.8, ease: 'easeOut', duration: 0.5, type: 'tween' } }} className="flex-1 bg-navigator dark:bg-darkNav "></motion.div>
						<motion.div exit={{ y: -800, transition: { delay: 1, ease: 'easeOut', duration: 0.5, type: 'tween' } }} className="flex-1 bg-navigator dark:bg-darkNav "></motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{detailCard && <CardDetail product={detailProd} />}
			</AnimatePresence>

			<main onClick={() => isShowCardProfile && dispatch(changeIsShow())} className="pt-[80px] lg:pt-32 mb-32" id="main">
				<section className="w-full px-0 lg:px-24 xl:px-40">
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

				<section className="select-none mt-8 hpk:mt-14 px-2 hpsk:px-3 lg:px-24 xl:px-40">
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

				<section className=" mt-7 md:mt-14 px-2 hpsk:px-3 lg:px-24 xl:px-40">
					<div className='flex w-full justify-between items-center'>
						<h1 className=" text-2xl hp:text-3xl md:text-4xl font-semibold dark:text-white">Product</h1>
						<Link to={'/'} className='underline underline-offset-2 text-black/60 dark:text-white/60'>see all</Link>
					</div>
					<div className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5 ">
						{products &&
							products.map((product, i) => (
								<div key={i} className="bg-white dark:bg-darkNav shadow-xl h-[250px] rounded-2xl relative flex transition-all duration-300 overflow-hidden group/parent overflow-y-hidden">
									<div className="absolute top-0 w-full h-[163px] md:h-[250px] bg-black z-10 hpk:group-hover/parent:h-[163px] transition-all duration-300 rounded-2xl overflow-hidden" onClick={() => showCard(product)}>
										<div className="w-full h-full p-8 md:p-3 bg-white flex items-center justify-center">
											<img src={product.image} alt={product.name} className='w-full ' />
										</div>
										<div className="absolute bg-black opacity-30 w-full h-full top-0 hpk:group-hover/parent:opacity-80 transition-all duration-300"></div>
										<div className="absolute top-0 w-full h-full flex justify-between items-end flex-row px-3 pb-2">
											<h3 className="max-w-[125px]  text-white text-base font-semibold">{product.name}</h3>
											<h3 className="w-[100px] justify-end  text-white text-sm font-semibold flex">$ {product.displayPrice}</h3>
										</div>
									</div>
									<div className="self-end px-2 flex flex-col w-full pb-2 gap-2">
										<div className=" flex items-center pl-1 gap-1">
											<svg className='w-[19px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<g clip-path="url(#clip0_406_1869)">
												<path d="M1.3268 12.4003L4.8868 15.0003L3.5348 19.1873C3.31631 19.8367 3.31354 20.5393 3.52691 21.1904C3.74027 21.8415 4.15834 22.4062 4.7188 22.8003C5.26965 23.2071 5.93719 23.425 6.62195 23.4216C7.30671 23.4182 7.97204 23.1936 8.5188 22.7813L11.9998 20.2193L15.4818 22.7783C16.0317 23.1828 16.6956 23.4025 17.3782 23.4058C18.0607 23.4091 18.7268 23.1959 19.2806 22.7968C19.8343 22.3978 20.2473 21.8334 20.4601 21.1848C20.6729 20.5362 20.6745 19.8369 20.4648 19.1873L19.1128 15.0003L22.6728 12.4003C23.2219 11.9988 23.6302 11.4341 23.8391 10.7867C24.0481 10.1394 24.0472 9.44251 23.8365 8.79571C23.6258 8.14891 23.216 7.58525 22.6658 7.18523C22.1156 6.7852 21.4531 6.56929 20.7728 6.56832H16.3998L15.0728 2.43232C14.8641 1.78128 14.4541 1.21333 13.9018 0.810386C13.3495 0.407437 12.6835 0.190308 11.9998 0.190308C11.3161 0.190308 10.6501 0.407437 10.0978 0.810386C9.54553 1.21333 9.13548 1.78128 8.9268 2.43232L7.5998 6.56832H3.2308C2.55054 6.56929 1.88799 6.7852 1.33778 7.18523C0.787564 7.58525 0.377837 8.14891 0.167118 8.79571C-0.0436018 9.44251 -0.0445344 10.1394 0.164453 10.7867C0.37344 11.4341 0.781657 11.9988 1.3308 12.4003H1.3268Z" fill="#FFD706"/>
												</g>
												<defs>
												<clipPath id="clip0_406_1869">
												<rect width="24" height="24" fill="white"/>
												</clipPath>
												</defs>
											</svg>
											<h2 className="  font-semibold text-xl dark:text-white">{product.rate}</h2>
										</div>
										<div className="flex gap-1 justify-between w-full">
											<div className="w-[40px] h-[38px] border-[2.5px] border-noHover dark:border-white rounded-xl flex justify-center items-center dark:hover:border-navigator hover:border-navigator group transition-colors duration-300 ">
												<svg className="fill-black/50 dark:fill-white w-[19px] group-hover:fill-navigator transition-colors duration-300 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_403_2975)">
														<path d="M17.5 1.9165C16.3739 1.93402 15.2724 2.24836 14.3067 2.82778C13.341 3.40719 12.5453 4.23117 12 5.2165C11.4546 4.23117 10.6589 3.40719 9.6932 2.82778C8.7275 2.24836 7.62601 1.93402 6.49996 1.9165C4.7049 1.99449 3.01366 2.77976 1.79574 4.10074C0.577818 5.42171 -0.0677922 7.17103 -4.17093e-05 8.9665C-4.17093e-05 13.5135 4.78596 18.4795 8.79996 21.8465C9.69618 22.5996 10.8293 23.0125 12 23.0125C13.1706 23.0125 14.3037 22.5996 15.2 21.8465C19.214 18.4795 24 13.5135 24 8.9665C24.0677 7.17103 23.4221 5.42171 22.2042 4.10074C20.9863 2.77976 19.295 1.99449 17.5 1.9165ZM13.915 20.3165C13.3789 20.7679 12.7007 21.0154 12 21.0154C11.2992 21.0154 10.621 20.7679 10.085 20.3165C4.94696 16.0055 1.99996 11.8695 1.99996 8.9665C1.9316 7.70122 2.36632 6.46023 3.20932 5.5142C4.05232 4.56817 5.23519 3.99385 6.49996 3.9165C7.76472 3.99385 8.9476 4.56817 9.7906 5.5142C10.6336 6.46023 11.0683 7.70122 11 8.9665C11 9.23172 11.1053 9.48607 11.2929 9.67361C11.4804 9.86115 11.7347 9.9665 12 9.9665C12.2652 9.9665 12.5195 9.86115 12.7071 9.67361C12.8946 9.48607 13 9.23172 13 8.9665C12.9316 7.70122 13.3663 6.46023 14.2093 5.5142C15.0523 4.56817 16.2352 3.99385 17.5 3.9165C18.7647 3.99385 19.9476 4.56817 20.7906 5.5142C21.6336 6.46023 22.0683 7.70122 22 8.9665C22 11.8695 19.053 16.0055 13.915 20.3125V20.3165Z" />
													</g>
													<defs>
														<clipPath id="clip0_403_2975">
															<rect width="24" height="24" fill="white" />
														</clipPath>
													</defs>
												</svg>
											</div>
											<div className="w-[130px] h-[38px] rounded-xl bg-navigator flex justify-center items-center gap-2 px-[5px] hover:bg-transparent border-[2.5px] border-navigator hover:border-navigator transition-all duration-300 group">
												<svg className="fill-white group-hover:fill-navigator w-[17px] transition-colors duration-300 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_403_3036)">
														<path d="M22.713 4.077C22.4317 3.73944 22.0796 3.46795 21.6815 3.28182C21.2835 3.09568 20.8494 2.99946 20.41 3H4.242L4.2 2.649C4.11405 1.91942 3.76338 1.24673 3.21449 0.758478C2.6656 0.270223 1.95663 0.000341793 1.222 0L1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2H1.222C1.46693 2.00003 1.70334 2.08996 1.88637 2.25272C2.06941 2.41547 2.18634 2.63975 2.215 2.883L3.591 14.583C3.73385 15.7998 4.31848 16.9218 5.23391 17.736C6.14934 18.5502 7.33185 19 8.557 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8946 18.5196 20 18.2652 20 18C20 17.7348 19.8946 17.4804 19.7071 17.2929C19.5196 17.1054 19.2652 17 19 17H8.557C7.93806 16.9983 7.3348 16.8051 6.82994 16.4471C6.32507 16.089 5.94331 15.5835 5.737 15H17.657C18.8293 15.0001 19.9643 14.5882 20.8638 13.8364C21.7633 13.0846 22.37 12.0407 22.578 10.887L23.363 6.533C23.4414 6.10101 23.4237 5.65707 23.3114 5.23264C23.1991 4.80821 22.9948 4.41368 22.713 4.077ZM21.4 6.178L20.614 10.532C20.4891 11.225 20.1245 11.852 19.5839 12.3032C19.0433 12.7544 18.3612 13.0011 17.657 13H5.419L4.478 5H20.41C20.5569 4.99912 20.7022 5.03062 20.8355 5.09226C20.9689 5.15389 21.087 5.24415 21.1815 5.35661C21.276 5.46907 21.3446 5.60097 21.3824 5.74294C21.4201 5.8849 21.4262 6.03344 21.4 6.178Z" />
														<path d="M7.00012 24.0006C8.10469 24.0006 9.00011 23.1052 9.00011 22.0006C9.00011 20.896 8.10469 20.0006 7.00012 20.0006C5.89555 20.0006 5.00012 20.896 5.00012 22.0006C5.00012 23.1052 5.89555 24.0006 7.00012 24.0006Z" />
														<path d="M17 24.0006C18.1046 24.0006 19 23.1052 19 22.0006C19 20.896 18.1046 20.0006 17 20.0006C15.8954 20.0006 15 20.896 15 22.0006C15 23.1052 15.8954 24.0006 17 24.0006Z" />
													</g>
													<defs>
														<clipPath id="clip0_403_3036">
															<rect width="24" height="24" />
														</clipPath>
													</defs>
												</svg>
												<h1 className="text-white text-[13px] min-[410px]:text-base font-medium  group-hover:text-navigator transition-colors duration-300">Add to Cart</h1>
											</div>
										</div>
									</div>
								</div>
							))}
					</div>
				</section>

				<section className="mt-14 md:mt-14 px-2 hpsk:px-3 lg:px-24 xl:px-40 flex flex-col md:flex-row">
					<div className="w-full md:w-2/4 px-4 py-7 order-2 md:order-1">
						<h1 className=" text-2xl hp:text-3xl md:text-4xl font-semibold dark:text-white">Why should fresh 4 you?</h1>
						<p className="  mt-7 text-lg lg:text-2xl text-TexLig dark:text-TexDark">Our goal is to be an easy and convenient grocery shopping platform while maintaining the quality of our service - helping our customers shop efficiently and have time to do other important things every day.</p>
						<button className="mt-7 h-[50px] w-[180px] border-[2.5px] border-navigator bg-navigator hover:bg-transparent rounded-xl flex justify-center items-center gap-2 dark:hover:border-navigator hover:border-navigator group transition-colors duration-300 ">
							
							<p className="text-white text-xl  font-bold group-hover:text-navigator transition-colors duration-300">Check it Out</p>
							
						</button>
					</div>
					<div className="w-full md:w-2/4 px-0 md:p-4 order-1 md:order-2">
						<img src="./src/assets/img/why.png" alt="" className="w-full" />
					</div>
				</section>

				<section className="mt-7 md:mt-14 px-2 hpsk:px-3 lg:px-24 xl:px-40">
					<h1 className=" text-2xl hp:text-3xl md:text-4xl font-semibold dark:text-white">Blog</h1>
					<div className="w-full flex flex-row mt-7 gap-3 md:gap-10">
						<div className="w-2/4 ">
							<img src="./src/assets/img/blog1.png" alt="" className="" />
							<h1 className=" text-lg md:text-2xl lg:text-4xl font-semibold dark:text-white mt-5">5 Benefits of Fruits for our bodies that you don't know about</h1>
						</div>
						<div className="w-2/4 ">
							<img src="./src/assets/img/blog2.png" alt="" className="" />
							<h1 className="  text-lg md:text-2xl lg:text-4xl font-semibold dark:text-white mt-5">These are 10 benefits of avocado for health</h1>
						</div>
					</div>

				</section>
			</main>

			<footer className="w-full bg-navigator">
				<div className="py-16 px-10 sm:px-20 lg:px-32">
					<div className="w-full flex flex-col md:flex-row justify-end sm:justify-center md:justify-between">
						<div className='md:hidden w-full mb-8 flex justify-center items-center'>
							<img src="./src/assets/img/logo.png" alt="logo" className="h-14"/>
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
							<img src="./src/assets/img/logo.png" alt="logo" className="h-14"/>
							<div className=" text-HDark">
								<div className="flex flex-col items-end">
									<p>©2023 Fresh4U</p>
									<p>All Right Reserved</p>
								</div>
								<div className="flex-row gap-5 md:flex mt-8">
									<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
										<img className='w-[32px]' src="./src/assets/img/facebook.png" alt="facebook" />
									</div>
									<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
										<img className='w-[32px]' src="./src/assets/img/twitter.png" alt="facebook" />
									</div>
									<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
										<img className='w-[32px]' src="./src/assets/img/instagram.png" alt="facebook" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full h-1 bg-black bg-opacity-25 mt-5"></div>
					<div className="mt-5 hidden w-full md:flex items-center justify-center gap-6">
						<div >
							<img src="./src/assets/img/tailwind.png" alt="tailwind" className="aspect-auto"/>
						</div>
						<div >
							<img src="./src/assets/img/react.png" alt="react" className="aspect-auto"/>
						</div>
						<div >          
							<img src="./src/assets/img/vitejs.png" alt="vite" />
						</div>
						<div >
							<img src="./src/assets/img/javascript-original.png" alt="js" />
						</div>
						<div >
							<img src="./src/assets/img/framer-motion.png" alt="framer motion" />
						</div>
						<div >
							<img src="./src/assets/img/react-router.png" alt="react router dom" />
						</div>
						<div >
							<img src="./src/assets/img/redux.png" alt="redux" />
						</div>
					</div>
					<div className='w-full flex items-center justify-center md:hidden'>

					<div className="md:hidden flex-row gap-5 flex mt-8">
						<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
							<img className='w-[32px]' src="./src/assets/img/facebook.png" alt="facebook" />
						</div>
						<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
							<img className='w-[32px]' src="./src/assets/img/twitter.png" alt="facebook" />
						</div>
						<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
							<img className='w-[32px]' src="./src/assets/img/instagram.png" alt="facebook" />
						</div>
					</div>
					</div>
					</div>
				<div className="w-full py-3 bg-black bg-opacity-40 flex items-center flex-col sm:flex-row justify-center gap-4">
					<h5 className="text-HDark text-sm sm:text-base md:block hidden">We facilitate your payment through trusted gateaways</h5>
					<h5 className="text-HDark text-sm sm:text-base md:hidden">© 2023 Fresh4You</h5>
					<div className="hidden md:flex md:flex-row md:gap-1 md:items-center">
						<div><img src="./src/assets/img/visa.png"  alt="visa"/></div>
						<div><img src="./src/assets/img/amex.png" alt="amex"/></div>
						<div><img src="./src/assets/img/cimb.png" alt="cimb"/></div>
						<div><img src="./src/assets/img/RuPay.png" alt="rupay"/></div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Home
