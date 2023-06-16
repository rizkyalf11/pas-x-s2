import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { buyNow, changeIsBuyNow } from "../features/Products/ProductsSlice"
import { toast } from "react-hot-toast"
import { changeIsShowCard } from "../features/Products/isShowDetail"

const BuyNow = () => {
  const dispatch = useDispatch()
	const data = useSelector((state) => state.products.isBuyNow.data)

  const hdlBuyNow = (val) => {
    dispatch(buyNow(val))
    dispatch(changeIsBuyNow())
    dispatch(changeIsShowCard())
    toast.success(`Berhasil Beli - ${val.name}`, {
      duration: 900
    })
  }
	
  return (
		<div className="w-full h-screen bg-black/30 fixed top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 z-50 flex items-center justify-center">
			<motion.div initial={{ scale: 0.3 }} animate={{ scale: 1 }} transition={{ type: 'spring', damping: 8, stiffness: 100 }} className=" bg-white rounded-2xl flex flex-col items-center justify-center px-8 py-7 gap-5 ">
				<div className="bg-green-400/60 flex justify-center items-center w-[120px] p-4 rounded-full">
					<svg className=" cursor-pointer dark:fill-HDark self-end w-full h-full]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"
							stroke="#292D32"
							strokeWidth="1.5"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"
							stroke="#292D32"
							strokeWidth="1.5"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path d="M9 13.01H12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M9 9.01001H12" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M5.99561 13H6.00459" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M5.99561 9H6.00459" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
				<h1 className="text-2xl text-gray-700 ">Setujui Pembayaran</h1>
				<p className="text-center text-gray-500">apakah anda yakin akan membeli {data?.name}</p>
				<h1 className="font-semibold text-2xl text-green-700 my-3 ">Total: $ {data?.displayPrice}</h1>
				<div className="flex w-full gap-1">
					<button className={`w-1/2 bg-green-60 bg-green-500  hover:bg-green-600 transition-colors duration-150 rounded-sm text-white py-2`} onClick={() => hdlBuyNow(data)}>
						Beli Sekarang!
					</button>
					<button className={`w-1/2 bg-gray-500 hover:bg-gray-400 transition-colors duration-150 rounded-sm text-white py-2`} onClick={() => dispatch(changeIsBuyNow())}>
						Cancel
					</button>
				</div>
			</motion.div>
		</div>
	)
}

export default BuyNow
