// SWP
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'

const Home = () => {
	return (
		<main className="pt-[80px] lg:pt-32 overflow-x-hidden" id="main">
			<section className="w-full px-0 lg:px-24 xl:px-40">
				<div className="w-full aspect-ress lg:aspect-rect group lg:rounded-3xl">
					<Swiper modules={[Autoplay, Pagination]} slidesPerView={1} spaceBetween={20} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} pagination={{clickable: true, dynamicBullets: true }} className="swiper-wrapper w-full">
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
		</main>
	)
}

export default Home
