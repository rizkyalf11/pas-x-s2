import { useRef, useState } from 'react'

// FM
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

// RDX
import { useDispatch, useSelector } from 'react-redux'
import { changeIsShow } from '../features/ProfileCard/ProfileCardSlice'
import { generateFilter, resetFilter } from '../features/Products/ProductsSlice'
import { changeFilter } from '../features/RouteSlice/RouteSlice'

// Comp
import CardDetail from '../component/CardDetail'
import CategoryCard from '../component/CategoryCard'

// RHT
import { Toaster, toast } from 'react-hot-toast'
import BuyNow from '../component/BuyNow'
import { useNavigate } from 'react-router-dom'

const ImportFruits = () => {
	// RDX
	const dispatch = useDispatch()
	const impFruits = useSelector((state) => state.products.import)
	const { filter } = useSelector((state) => state.route)
	const { isShowCardProfile } = useSelector((state) => state.isShowCardProfile)
	const isBuyNow = useSelector((state) => state.products.isBuyNow.isShow)
	const navigate = useNavigate()


	const changeFilterAndCard = () => {
		if (isShowCardProfile) {
			dispatch(changeIsShow())
		}
	}

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [])

	// DetailCard
	const { detailCard } = useSelector((state) => state.isShowDetail)
	const { data } = useSelector((state) => state.isShowDetail)

	// Filter
	const max = useRef(null)
	const min = useRef(null)
	const maxCostum = useRef(null)
	const minCostum = useRef(null)
	const inpRate = useRef(null)

	const [jenisFilter, setJenisFilter] = useState({
		jenis: '',
		val: {
			value1: '',
			value2: '',
		},
	})
	const [isFilter, setIsFilter] = useState('')
	const [maxCostumValue, setMaxCustomValue] = useState(0)
	const [minCostumValue, setMinCustomValue] = useState(0)

	const hdlMax = () => {
		min.current.checked = false
		maxCostum.current.value = ''
		minCostum.current.value = ''
		inpRate.current.checked = false

		if (jenisFilter.jenis == '' || jenisFilter.jenis == 'min' || jenisFilter.jenis == 'inputCostum' || jenisFilter.jenis == 'rate') {
			setJenisFilter({ jenis: 'max' })
		} else if (jenisFilter.jenis == 'max') {
			setJenisFilter({ jenis: '', val: { value1: '', value2: '' } })
		}
	}

	const hdlMin = () => {
		max.current.checked = false
		maxCostum.current.value = ''
		minCostum.current.value = ''
		inpRate.current.checked = false

		if (jenisFilter.jenis == '' || jenisFilter.jenis == 'max' || jenisFilter.jenis == 'inputCostum' || jenisFilter.jenis == 'rate') {
			setJenisFilter({ jenis: 'min' })
		} else if (jenisFilter.jenis == 'min') {
			setJenisFilter({ jenis: '', val: { value1: '', value2: '' } })
		}
	}

	const hdlMaxCustom = () => {
		max.current.checked = false
		min.current.checked = false
		inpRate.current.checked = false

		setJenisFilter({ jenis: 'inputCostum', val: { value1: '', value2: '' } })
	}

	const hdlMinCustom = () => {
		max.current.checked = false
		min.current.checked = false
		inpRate.current.checked = false

		setJenisFilter({ jenis: 'inputCostum', val: { value1: '', value2: '' } })
	}

	const hdlInptRate = () => {
		max.current.checked = false
		min.current.checked = false
		maxCostum.current.value = ''
		minCostum.current.value = ''

		if (jenisFilter.jenis == '' || jenisFilter.jenis == 'max' || jenisFilter.jenis == 'min' || jenisFilter.jenis == 'inputCostum') {
			setJenisFilter({ jenis: 'rate' })
		} else if (jenisFilter.jenis == 'rate') {
			setJenisFilter({ jenis: '', val: { value1: '', value2: '' } })
		}
	}

	const hdlGenerateFilter = () => {
		if(jenisFilter.jenis != '') {
			if (jenisFilter.jenis == 'inputCostum') {
				if (maxCostumValue == 0 && minCostumValue == 0) {
					toast.error('Enter Value')
				} else {
					if(minCostumValue > maxCostumValue) {
						toast.error('Min harus lebih kecil dari Max')
					} else {
						dispatch(generateFilter({ jenis: jenisFilter.jenis, max: maxCostumValue, min: minCostumValue }))
						setIsFilter(jenisFilter.jenis)
						dispatch(changeFilter())
					}
				}
			} else {
				dispatch(generateFilter({ jenis: jenisFilter.jenis, max: maxCostumValue, min: minCostumValue }))
				setIsFilter(jenisFilter.jenis)
				dispatch(changeFilter())
			}
		} else {
			toast.error('Enter Value')
		}
	}

	const hdlResetFilter = () => {
		max.current.checked = false
		min.current.checked = false
		maxCostum.current.value = ''
		minCostum.current.value = ''
		inpRate.current.checked = false

		if (isFilter == 'max' || isFilter == 'min' || isFilter == 'inputCostum' || isFilter == 'rate') {
			setIsFilter('')
			setJenisFilter({ jenis: '', val: { value1: '', value2: '' } })
			dispatch(resetFilter())
		}
	}

	document.title = 'Fresh4U - Import Fruits'
	const { isSignIn } = useSelector(state => state.login)
	useEffect(() => {
		if(!isSignIn) {
			navigate('/signin')
		}
	}, [isSignIn, navigate])
	return (
		<>
			<AnimatePresence>{detailCard && <CardDetail product={data} />}</AnimatePresence>

			<AnimatePresence>
				{isBuyNow && <BuyNow />}
			</AnimatePresence>

			<div>
				<Toaster position="bottom-left" reverseOrder={false} />
			</div>

			<motion.main
				onClick={() => changeFilterAndCard()}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 0.7, ease: 'easeOut', type: 'tween' } }}
				exit={{ opacity: 0 }}
				className="min-h-[300vh] flex flex-row pt-[80px]"
				id="main"
			>
				<motion.aside
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5, ease: 'easeIn' } }}
					className={`fixed shadow-xl ${filter ? 'left-0' : '-left-80'} transition-all duration-300 md:shadow-none md:left-0 md:sticky w-80 h-[800px] top-[80px] bg-white dark:bg-darkBg px-16 pt-24 z-30`}
					id="filter-card"
				>
					<div className="font-quicksand text-lg font-medium text-HLig dark:text-HDark flex flex-col items-start gap-2">
						<div className="flex items-center gap-2">
							<input onClick={() => hdlMax()} ref={max} type="checkbox" name="" id="mx100" className="accent-navigator w-4 h-4 rounded-full" />
							<label className="select-none" htmlFor="mx100">
								Max. $ 20.00
							</label>
						</div>
						<div className="flex items-center gap-2">
							<input onClick={() => hdlMin()} ref={min} type="checkbox" name="" id="mn100" className="accent-navigator w-4 h-4 rounded-full" />
							<label className="select-none" htmlFor="mn100">
								Min. $ 20.00
							</label>
						</div>
						<div className="flex gap-2 items-center">
							<label htmlFor="mx" className="">
								Max. $
							</label>
							<input
								onChange={(e) => setMaxCustomValue(Number(e.target.value))}
								onClick={(e) => hdlMaxCustom(e)}
								ref={maxCostum}
								type="text"
								className="h-6 w-28 text-lg text-HLig px-2 font-semibold outline-none rounded-md"
								placeholder="Max Value"
								id="mx"
							/>
						</div>
						<div className="flex gap-2 items-center">
							<label htmlFor="mn" className="">
								Min. $
							</label>
							<input
								onChange={(e) => setMinCustomValue(Number(e.target.value))}
								onClick={(e) => hdlMinCustom(e)}
								ref={minCostum}
								type="text"
								className="h-6 w-28 text-lg text-HLig px-2 font-semibold outline-none rounded-md"
								placeholder="Min Value"
								id="mn"
							/>
						</div>
						<div className="flex items-center gap-2">
							<input onClick={() => hdlInptRate()} ref={inpRate} type="checkbox" name="" id="star" className="accent-navigator w-4 h-4 rounded-full" />
							<label htmlFor="star" className="flex select-none items-center">
								<svg className="w-[19px] mr-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_406_1869)">
										<path
											d="M1.3268 12.4003L4.8868 15.0003L3.5348 19.1873C3.31631 19.8367 3.31354 20.5393 3.52691 21.1904C3.74027 21.8415 4.15834 22.4062 4.7188 22.8003C5.26965 23.2071 5.93719 23.425 6.62195 23.4216C7.30671 23.4182 7.97204 23.1936 8.5188 22.7813L11.9998 20.2193L15.4818 22.7783C16.0317 23.1828 16.6956 23.4025 17.3782 23.4058C18.0607 23.4091 18.7268 23.1959 19.2806 22.7968C19.8343 22.3978 20.2473 21.8334 20.4601 21.1848C20.6729 20.5362 20.6745 19.8369 20.4648 19.1873L19.1128 15.0003L22.6728 12.4003C23.2219 11.9988 23.6302 11.4341 23.8391 10.7867C24.0481 10.1394 24.0472 9.44251 23.8365 8.79571C23.6258 8.14891 23.216 7.58525 22.6658 7.18523C22.1156 6.7852 21.4531 6.56929 20.7728 6.56832H16.3998L15.0728 2.43232C14.8641 1.78128 14.4541 1.21333 13.9018 0.810386C13.3495 0.407437 12.6835 0.190308 11.9998 0.190308C11.3161 0.190308 10.6501 0.407437 10.0978 0.810386C9.54553 1.21333 9.13548 1.78128 8.9268 2.43232L7.5998 6.56832H3.2308C2.55054 6.56929 1.88799 6.7852 1.33778 7.18523C0.787564 7.58525 0.377837 8.14891 0.167118 8.79571C-0.0436018 9.44251 -0.0445344 10.1394 0.164453 10.7867C0.37344 11.4341 0.781657 11.9988 1.3308 12.4003H1.3268Z"
											fill="#FFD706"
										/>
									</g>
									<defs>
										<clipPath id="clip0_406_1869">
											<rect width="24" height="24" fill="white" />
										</clipPath>
									</defs>
								</svg>
								4
							</label>
						</div>
						<div className="w-full flex flex-col gap-2 mt-2">
							<button onClick={() => hdlGenerateFilter()} className="w-full h-10 font-semibold rounded-lg text-white border-[2px] border-navigator hover:bg-transparent hover:text-navigator transition-all duration-300 bg-navigator">
								Generate filter
							</button>
							{isFilter != '' && (
								<button
									onClick={() => hdlResetFilter()}
									className="w-full h-10 font-semibold rounded-lg border-[2px] border-noHover text-noHover dark:border-HDark dark:text-HDark hover:bg-transparent hover:text-navigator hover:border-navigator transition-all duration-300 "
								>
									Reset filter
								</button>
							)}
						</div>
					</div>
				</motion.aside>
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5, ease: 'easeIn' } }} className="w-full md:w-[calc(100%-320px)]  ">
					<section className="mt-7 md:mt-14 px-2 sm:px-3 lg:pr-24 xl:pr-40">
						<h1 className=" text-3xl hpk:text-4xl font-quicksand font-bold dark:text-white">Import Fruits</h1>

						<div className="mt-7 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-3 md:gap-5  " id="card-wrapper">
							<AnimatePresence>
								{impFruits &&
									impFruits.map((product) => {
										return <CategoryCard key={product.id} product={product} />
									})}
							</AnimatePresence>
						</div>
					</section>
				</motion.div>
			</motion.main>
			<footer className="w-full bg-navigator dark:bg-darkNav">
				<div className="py-16 px-10 sm:px-20 lg:px-32">
					<div className="w-full flex flex-col md:flex-row justify-end sm:justify-center md:justify-between">
						<div className="md:hidden w-full mb-8 flex justify-center items-center">
							<img src="/img/logo.png" alt="logo" className="h-14" />
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
							<div className="hidden md:inline-block">
								<h5 className="text-HDark font-semibold ">Sale</h5>
								<ul className="text-HDark mt-3 text-sm">
									<li>Fresh Fruits</li>
									<li>Register 4U Agent</li>
								</ul>
							</div>
						</div>

						<div className="hidden md:flex md:gap-10 md:flex-row">
							<img src="/img/logo.png" alt="logo" className="h-14" />
							<div className=" text-HDark">
								<div className="flex flex-col items-end">
									<p>©2023 Fresh4U</p>
									<p>All Right Reserved</p>
								</div>
								<div className="flex-row gap-5 md:flex mt-8">
									<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
										<img className="w-[32px]" src="/img/facebook.png" alt="facebook" />
									</div>
									<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
										<img className="w-[32px]" src="/img/twitter.png" alt="facebook" />
									</div>
									<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
										<img className="w-[32px]" src="/img/instagram.png" alt="facebook" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full h-1 bg-black bg-opacity-25 mt-5"></div>
					<div className="mt-14 hidden w-full md:flex items-center justify-center gap-8 h-16">
						<div  className='h-16'>
							<img src="/img/tailwindcss.png" alt="tailwind" className="aspect-auto h-full"/>
						</div>
						<div  className='h-16'>
							<img src="/img/react.png" alt="react" className="aspect-auto h-full"/>
						</div>
						<div  className='h-16'>          
							<img src="/img/vitejs.png" alt="vite" className='h-full' />
						</div>
						<div  className='h-16'>
							<img src="/img/js.png" alt="js" className='h-full' />
						</div>
						<div  className='h-16'>
							<img src="/img/framer-motion.png" alt="framer motion" className='h-full' />
						</div>
						<div  className='h-16'>
							<img src="/img/react-router.png" alt="react router dom" className='h-full' />
						</div>
						<div  className='h-16'>
							<img src="/img/redux.png" alt="redux"  className='h-full'/>
						</div>
					</div>
					<div className="w-full flex items-center justify-center md:hidden">
						<div className="md:hidden flex-row gap-5 flex mt-8">
							<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
								<img className="w-[32px]" src="/img/facebook.png" alt="facebook" />
							</div>
							<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
								<img className="w-[32px]" src="/img/twitter.png" alt="facebook" />
							</div>
							<div className="h-12 aspect-square bg-black bg-opacity-50 rounded-full flex justify-center items-center">
								<img className="w-[32px]" src="/img/instagram.png" alt="facebook" />
							</div>
						</div>
					</div>
				</div>
				<div className="w-full py-3 bg-black bg-opacity-40 flex items-center flex-col sm:flex-row justify-center gap-4">
					<h5 className="text-HDark text-sm sm:text-base md:block hidden">We facilitate your payment through trusted gateaways</h5>
					<h5 className="text-HDark text-sm sm:text-base md:hidden">© 2023 Fresh4You</h5>
					<div className="hidden md:flex md:flex-row md:gap-1 md:items-center">
						<div>
							<img src="/img/visa.png" alt="visa" />
						</div>
						<div>
							<img src="/img/amex.png" alt="amex" />
						</div>
						<div>
							<img src="/img/cimb.png" alt="cimb" />
						</div>
						<div>
							<img src="/img/RuPay.png" alt="rupay" />
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default ImportFruits
