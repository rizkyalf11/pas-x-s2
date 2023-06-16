/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'

// RDX
import { minusStokFav, plusStokFav } from "../features/Products/favSclice"
import { changeIsCheck, minusCart, plusCart } from "../features/Products/cartSlice"
import { minusProduct, plusProduct } from "../features/Products/ProductsSlice"
import { addDataConf, changeIsConf } from "../features/Products/confirmCart"
import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'

const CartCard = ({product}) => {
  const dispatch = useDispatch()

  const hdlKlik = (val) => {
    dispatch(changeIsConf())
    dispatch(addDataConf(val))
  }

  const hdlMinus = (prod) => {
    dispatch(minusCart(prod))
    dispatch(plusProduct(prod))
    dispatch(plusStokFav({product: prod, stokDetail: prod.stok}))
  }
  
  const hdlPlus = (prod) => {
    dispatch(plusCart(prod))
    dispatch(minusProduct(prod))
    dispatch(minusStokFav({product: prod, stokDetail: prod.stok}))
  }

  const check = useRef(null)
  useEffect(() => {
    check.current.checked = product.isCheck
  }, [check, product.isCheck])

	return (
		<motion.div
			exit={{ x: -1000, opacity: 0 }}
			transition={{ ease: 'easeOut', delay: 0.3 }}
			layout
			key={product.id}
			className="w-full h-fit gap-5 p-5 font-quicksand dark:bg-transparent flex hpk:flex-row flex-col justify-between items-start hpk:items-center border-b-2 border-b-noHover border-opacity-20"
		>
			<div className="h-full flex items-center gap-3">
				<input onChange={(e) => dispatch(changeIsCheck({product, isCheckCart: e.target.checked}))} ref={check} type="checkbox" name="" className="h-5 w-5 rounded-2xl accent-navigator" />

				<div className="h-20 hpk:h-[100px] bg-white aspect-square dark:bg-transparent border border-black/5 rounded-md flex items-center justify-center overflow-hidden">
					<img src={product.image} alt={product.name} className="w-full" />
				</div>
				<div className="">
					<h3 className="text-lg font-bold dark:text-HDark">{product.name}</h3>
					<p className="text-base text-noHover font-medium">Stok : {product.stok}</p>
					<p className="text-base text-noHover font-medium">{product.category}</p>
				</div>
			</div>
			<div className="flex flex-row justify-between hpk:justify-end items-center gap-4 w-full hpk:w-auto hpk:gap-8 self-end">
				<svg onClick={() => hdlKlik(product)} className="fill-noHover cursor-pointer dark:fill-HDark self-end" width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0_403_3137)">
						<path d="M20.9999 4H17.8999C17.6678 2.87141 17.0537 1.85735 16.1611 1.12872C15.2686 0.40009 14.1521 0.00145452 12.9999 0L10.9999 0C9.84767 0.00145452 8.7312 0.40009 7.83863 1.12872C6.94606 1.85735 6.33197 2.87141 6.09988 4H2.99988C2.73466 4 2.48031 4.10536 2.29277 4.29289C2.10523 4.48043 1.99988 4.73478 1.99988 5C1.99988 5.26522 2.10523 5.51957 2.29277 5.70711C2.48031 5.89464 2.73466 6 2.99988 6H3.99988V19C4.00147 20.3256 4.52876 21.5964 5.4661 22.5338C6.40344 23.4711 7.67428 23.9984 8.99988 24H14.9999C16.3255 23.9984 17.5963 23.4711 18.5337 22.5338C19.471 21.5964 19.9983 20.3256 19.9999 19V6H20.9999C21.2651 6 21.5194 5.89464 21.707 5.70711C21.8945 5.51957 21.9999 5.26522 21.9999 5C21.9999 4.73478 21.8945 4.48043 21.707 4.29289C21.5194 4.10536 21.2651 4 20.9999 4ZM10.9999 2H12.9999C13.6202 2.00076 14.225 2.19338 14.7315 2.55144C15.238 2.90951 15.6213 3.41549 15.8289 4H8.17088C8.37846 3.41549 8.76178 2.90951 9.26826 2.55144C9.77475 2.19338 10.3796 2.00076 10.9999 2ZM17.9999 19C17.9999 19.7956 17.6838 20.5587 17.1212 21.1213C16.5586 21.6839 15.7955 22 14.9999 22H8.99988C8.20423 22 7.44117 21.6839 6.87856 21.1213C6.31595 20.5587 5.99988 19.7956 5.99988 19V6H17.9999V19Z" />
						<path d="M10 17.9994C10.2652 17.9994 10.5196 17.894 10.7071 17.7065C10.8946 17.5189 11 17.2646 11 16.9994V10.9994C11 10.7342 10.8946 10.4798 10.7071 10.2923C10.5196 10.1047 10.2652 9.99939 10 9.99939C9.73478 9.99939 9.48043 10.1047 9.29289 10.2923C9.10536 10.4798 9 10.7342 9 10.9994V16.9994C9 17.2646 9.10536 17.5189 9.29289 17.7065C9.48043 17.894 9.73478 17.9994 10 17.9994Z" />
						<path d="M13.9999 17.9994C14.2651 17.9994 14.5195 17.894 14.707 17.7065C14.8945 17.5189 14.9999 17.2646 14.9999 16.9994V10.9994C14.9999 10.7342 14.8945 10.4798 14.707 10.2923C14.5195 10.1047 14.2651 9.99939 13.9999 9.99939C13.7347 9.99939 13.4803 10.1047 13.2928 10.2923C13.1052 10.4798 12.9999 10.7342 12.9999 10.9994V16.9994C12.9999 17.2646 13.1052 17.5189 13.2928 17.7065C13.4803 17.894 13.7347 17.9994 13.9999 17.9994Z" />
					</g>
					<defs>
						<clipPath id="clip0_403_3137">
							<rect width="26" height="26" fill="white" />
						</clipPath>
					</defs>
				</svg>
				<div className="flex select-none flex-row hpk:flex-col items-center gap-6 hpk:gap-4">
					<h3 className="text-lg font-bold dark:text-HDark">$ {product.displayPrice}</h3>
					<div className="flex flex-row justify-between gap-4 items-center px-1 border-2 border-noHover rounded-full w-[118px] ">
						<svg onClick={() => hdlMinus(product)} className="fill-navigator cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17 10.9997H7C6.44772 10.9997 6 11.4474 6 11.9997C6 12.552 6.44772 12.9997 7 12.9997H17C17.5523 12.9997 18 12.552 18 11.9997C18 11.4474 17.5523 10.9997 17 10.9997Z" />
						</svg>
						<p className="text-xl text-noHover font-medium dark:text-HDark">{product.cartQuantity}</p>
						<svg onClick={() => hdlPlus(product)} className="fill-navigator cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" />
						</svg>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default CartCard
