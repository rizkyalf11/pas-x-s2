// RDX
import { useDispatch, useSelector } from 'react-redux'
import { changeIsShowCard } from '../features/Products/isShowDetail'

// FM
import { motion } from 'framer-motion'

// eslint-disable-next-line react/prop-types
const CardDetail = ({ product }) => {
	const dataProd = product

	// RDX
	const  { detailCard }  = useSelector((state) => state.isShowDetail)
	const disptach  = useDispatch()

	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1, transition:{ease: 'easeOut', type: 'spring', duration: .8}}}
			exit={{opacity: 0, transition:{ease: 'easeOut', type: 'spring', duration: .8, delay: .1}}}
		className="fixed bg-black inset-0 bg-opacity-70 z-50">
			<svg className='fill-white absolute top-8 right-8 w-[30px] md:w-[50px] cursor-pointer z-50 bg-black/50 p-2 rounded-full' onClick={() => detailCard && disptach(changeIsShowCard())} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clipPath="url(#clip0_403_3045)">
				<path d="M23.7072 0.293153C23.5196 0.105682 23.2653 0.000366211 23.0002 0.000366211C22.735 0.000366211 22.4807 0.105682 22.2932 0.293153L12.0002 10.5862L1.70715 0.293153C1.51963 0.105682 1.26532 0.000366211 1.00015 0.000366211C0.734988 0.000366211 0.48068 0.105682 0.293153 0.293153C0.105682 0.48068 0.000366211 0.734988 0.000366211 1.00015C0.000366211 1.26532 0.105682 1.51963 0.293153 1.70715L10.5862 12.0002L0.293153 22.2932C0.105682 22.4807 0.000366211 22.735 0.000366211 23.0002C0.000366211 23.2653 0.105682 23.5196 0.293153 23.7072C0.48068 23.8946 0.734988 23.9999 1.00015 23.9999C1.26532 23.9999 1.51963 23.8946 1.70715 23.7072L12.0002 13.4142L22.2932 23.7072C22.4807 23.8946 22.735 23.9999 23.0002 23.9999C23.2653 23.9999 23.5196 23.8946 23.7072 23.7072C23.8946 23.5196 23.9999 23.2653 23.9999 23.0002C23.9999 22.735 23.8946 22.4807 23.7072 22.2932L13.4142 12.0002L23.7072 1.70715C23.8946 1.51963 23.9999 1.26532 23.9999 1.00015C23.9999 0.734988 23.8946 0.48068 23.7072 0.293153Z"/>
				</g>
				<defs>
				<clipPath id="clip0_403_3045">
				<rect width="24" height="24" fill="white"/>
				</clipPath>
				</defs>
			</svg>

			<motion.div
			className="absolute flex inset-y-2 inset-x-2 md:inset-y-24 lg:inset-x-20 2xl:inset-x-44 bg-white dark:bg-darkNav rounded-2xl flex-col md:flex-row ">
				<div className="w-full h-2/6 md:w-2/5 md:h-full aspect-square rounded-2xl overflow-hidden relative">
					<div className="w-full h-full bg-white flex items-center justify-center p-12">
						<img src={dataProd.image} alt={dataProd.name} className='w-full' />
					</div>
					<div className="absolute w-full h-full top-0 bg-black bg-opacity-10"></div>
				</div>
				<div className="w-full h-4/6 md:w-3/5 md:h-full  p-4 md:p-6 flex flex-col justify-between ">
					<h1 className=" font-bold text-3xl md:text-5xl dark:text-white">{dataProd.name}</h1>

					<div className=" h-[75%] mt-4 overflow-y-auto scrollbar-thin scrollbar-thumb-navigator">
						<div className=" w-full h-auto box-border">
							<h3 className=" font-bold text-xl text-HLig leading-10 dark:text-HDark">
								Price : <span className="text-TexLig font-medium dark:text-TexDark">$ {dataProd.displayPrice}</span>
							</h3>
							<h3 className=" font-bold text-xl text-HLig leading-10 dark:text-HDark">
								Stock : <span className="text-TexLig font-medium dark:text-TexDark">{dataProd.stok}</span>
							</h3>
							<div className=" flex items-center gap-2 my-1">
								<svg className='w-[19px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_406_1869)">
									<path d="M1.3268 12.4003L4.8868 15.0003L3.5348 19.1873C3.31631 19.8367 3.31354 20.5393 3.52691 21.1904C3.74027 21.8415 4.15834 22.4062 4.7188 22.8003C5.26965 23.2071 5.93719 23.425 6.62195 23.4216C7.30671 23.4182 7.97204 23.1936 8.5188 22.7813L11.9998 20.2193L15.4818 22.7783C16.0317 23.1828 16.6956 23.4025 17.3782 23.4058C18.0607 23.4091 18.7268 23.1959 19.2806 22.7968C19.8343 22.3978 20.2473 21.8334 20.4601 21.1848C20.6729 20.5362 20.6745 19.8369 20.4648 19.1873L19.1128 15.0003L22.6728 12.4003C23.2219 11.9988 23.6302 11.4341 23.8391 10.7867C24.0481 10.1394 24.0472 9.44251 23.8365 8.79571C23.6258 8.14891 23.216 7.58525 22.6658 7.18523C22.1156 6.7852 21.4531 6.56929 20.7728 6.56832H16.3998L15.0728 2.43232C14.8641 1.78128 14.4541 1.21333 13.9018 0.810386C13.3495 0.407437 12.6835 0.190308 11.9998 0.190308C11.3161 0.190308 10.6501 0.407437 10.0978 0.810386C9.54553 1.21333 9.13548 1.78128 8.9268 2.43232L7.5998 6.56832H3.2308C2.55054 6.56929 1.88799 6.7852 1.33778 7.18523C0.787564 7.58525 0.377837 8.14891 0.167118 8.79571C-0.0436018 9.44251 -0.0445344 10.1394 0.164453 10.7867C0.37344 11.4341 0.781657 11.9988 1.3308 12.4003H1.3268Z" fill="#FFD706"/>
									</g>
									<defs>
									<clipPath id="clip0_406_1869">
									<rect width="24" height="24" fill="white"/>
									</clipPath>
									</defs>
								</svg>
								<h2 className="  font-medium text-2xl dark:text-HDark text-TexLig">
									{dataProd.rate}
								</h2>
							</div>

							<div className="lg:max-w-[80%]">
								<h3 className=" font-bold text-xl text-HLig leading-10 dark:text-HDark">Details :</h3>
								<p className="text-justify pr-2  text-TexLig dark:text-TexDark" data>
									{dataProd.deskripsi}
								</p>
							</div>
						</div>
					</div>

					<div className="w-full flex justify-between gap-3 items-center">
						<div className="flex gap-3 flex-row">
							<button className="h-[50px] w-[60px] sm:w-[170px] border-[2.5px] border-noHover dark:border-white rounded-xl flex justify-center items-center gap-2 dark:hover:border-navigator hover:border-navigator group transition-colors duration-300 ">
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
								<p className="text-noHover dark:text-white text-2xl  font-bold group-hover:text-navigator transition-colors duration-300 hidden sm:block">Wishlist</p>
							</button>
							<button className="h-[50px] w-[180px] border-[2.5px] border-navigator bg-navigator hover:bg-transparent rounded-xl flex justify-center items-center gap-2 dark:hover:border-navigator hover:border-navigator group transition-colors duration-300 ">
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
								<p className="text-white text-xl  font-bold group-hover:text-navigator transition-colors duration-300">Add to cart</p>
							</button>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	)
}

export default CardDetail
