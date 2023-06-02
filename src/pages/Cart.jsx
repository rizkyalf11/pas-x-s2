import { useState, useEffect } from "react"

// FM
import { AnimatePresence, motion } from "framer-motion"

// RDX
import { useDispatch, useSelector } from 'react-redux'
import { minusCart, plusCart } from "../features/Products/cartSlice"
import { minusProduct, plusProduct } from "../features/Products/ProductsSlice"
import { addDataConf, changeIsConf, changeIsConfPay } from "../features/Products/confirmCart"
import { changeIsShow } from "../features/ProfileCard/ProfileCardSlice"
import { minusStokFav, plusStokFav } from "../features/Products/favSclice"

// Comp
import ConfirmCart from "../component/ConfirmCart"
import ConfirmPayment from "../component/ConfirmPayment"

// RHT
import { Toaster } from "react-hot-toast"

const Cart = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector(state => state.cart)
  const { totalCartAmount } = useSelector(state => state.cart)
	const { totalCartQuantity } = useSelector(state => state.cart)
	const { isShowCardProfile } = useSelector((state) => state.isShowCardProfile)
  const { isConf } = useSelector(state => state.confirmCart)
  const { isConfPay } = useSelector(state => state.confirmCart)
  const [payIsOpen, setPayIsOpen] = useState(false)

  useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}, [])

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


  const hdlKlik = (val) => {
    dispatch(changeIsConf())
    dispatch(addDataConf(val))
  }

  const changeFilterAndCard = () => {
		if (isShowCardProfile) {
			dispatch(changeIsShow())
		}
	}

	document.title = 'Fresh4U - Cart'
  return (
    <>
      {isConf && (
        <ConfirmCart />
      )}

      {
        isConfPay && (
          <ConfirmPayment />
        )
      }

      <Toaster position="top-center" reverseOrder={false} />

      <motion.main
          onClick={() => changeFilterAndCard()}
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: {duration: .7, ease: 'easeOut', type: 'tween'}}}
          exit={{opacity: 0}}
          className="flex min-h-[300vh] dark:bg-darkBg bg-[#fffffe] pt-24 xl:pt-24 px-3 xl:px-28 justify-between " id="main">
          <div  className="w-full md:w-[calc(100%-420px)] h-fit ">
            <AnimatePresence>
          {cartItems && cartItems.map(product => (
              <motion.div exit={{x: -1000, opacity: 0}} transition={{ease: 'easeOut', delay: .3}} layout  key={product.id} className="w-full h-fit gap-5 p-5 font-quicksand dark:bg-transparent flex hpk:flex-row flex-col justify-between items-start hpk:items-center border-b-2 border-b-noHover border-opacity-20">
                <div className="h-full flex items-center gap-3">
                  <div className="h-20 hpk:h-[100px] aspect-square dark:bg-transparent border border-black/5 rounded-md flex items-center justify-center overflow-hidden">
                    <img src={product.image} alt={product.name} className='w-full' />
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
                    <rect width="26" height="26" fill="white"/>
                    </clipPath>
                    </defs>
                  </svg>
                  <div className="flex select-none flex-row hpk:flex-col items-center gap-6 hpk:gap-4">
                    <h3 className="text-lg font-bold dark:text-HDark">$ {product.displayPrice}</h3>
                    <div className="flex flex-row justify-between gap-4 items-center px-1 border-2 border-noHover rounded-full w-[118px] ">
                      <svg onClick={() => hdlMinus(product)} className="fill-navigator cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 10.9997H7C6.44772 10.9997 6 11.4474 6 11.9997C6 12.552 6.44772 12.9997 7 12.9997H17C17.5523 12.9997 18 12.552 18 11.9997C18 11.4474 17.5523 10.9997 17 10.9997Z"/>
                      </svg>
                      <p className="text-xl text-noHover font-medium dark:text-HDark">{product.cartQuantity}</p>
                      <svg onClick={() => hdlPlus(product)} className="fill-navigator cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
              ))}
            </AnimatePresence>
            </div>
        <aside className={`hpk:w-[380px] w-full fixed md:sticky h-full  ${payIsOpen? 'top-24 hpsk:top-20' : 'top-[calc(100vh-60px)]'}  right-0 hpk:right-3 md:top-24  rounded-xl overflow-hidden shadow-xl transition-all duration-300`} id="aside">
          <header onClick={() => setPayIsOpen(!payIsOpen)} className="px-6 py-4 bg-navigator dark:bg-darkNav font-quicksand font-semibold text-HDark dark:text-navigator text-xl flex items-center gap-3" id="checkout">Checkout
            {payIsOpen? (
              <svg className="md:hidden fill-white dark:fill-navigator" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7099 8.20998C18.6169 8.11625 18.5063 8.04186 18.3845 7.99109C18.2626 7.94032 18.1319 7.91418 17.9999 7.91418C17.8679 7.91418 17.7372 7.94032 17.6153 7.99109C17.4934 8.04186 17.3828 8.11625 17.2899 8.20998L12.7099 12.79C12.6169 12.8837 12.5063 12.9581 12.3845 13.0089C12.2626 13.0596 12.1319 13.0858 11.9999 13.0858C11.8679 13.0858 11.7372 13.0596 11.6153 13.0089C11.4934 12.9581 11.3828 12.8837 11.2899 12.79L6.70988 8.20998C6.61691 8.11625 6.50631 8.04186 6.38445 7.99109C6.26259 7.94032 6.13189 7.91418 5.99988 7.91418C5.86787 7.91418 5.73716 7.94032 5.6153 7.99109C5.49344 8.04186 5.38284 8.11625 5.28988 8.20998C5.10363 8.39734 4.99908 8.6508 4.99908 8.91498C4.99908 9.17917 5.10363 9.43262 5.28988 9.61998L9.87988 14.21C10.4424 14.7718 11.2049 15.0873 11.9999 15.0873C12.7949 15.0873 13.5574 14.7718 14.1199 14.21L18.7099 9.61998C18.8961 9.43262 19.0007 9.17917 19.0007 8.91498C19.0007 8.6508 18.8961 8.39734 18.7099 8.20998Z"/>
              </svg>              
            ) : (
              <svg className="md:hidden fill-white dark:fill-navigator" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9998 15.4999C17.8682 15.5007 17.7377 15.4755 17.6159 15.4257C17.494 15.3759 17.3832 15.3026 17.2898 15.2099L12.7098 10.6199C12.6168 10.5262 12.5062 10.4518 12.3844 10.401C12.2625 10.3503 12.1318 10.3241 11.9998 10.3241C11.8678 10.3241 11.7371 10.3503 11.6152 10.401C11.4934 10.4518 11.3828 10.5262 11.2898 10.6199L6.70979 15.2099C6.52149 15.3982 6.26609 15.504 5.99979 15.504C5.73349 15.504 5.47809 15.3982 5.28979 15.2099C5.10149 15.0216 4.9957 14.7662 4.9957 14.4999C4.9957 14.3681 5.02167 14.2375 5.07213 14.1157C5.12259 13.9939 5.19655 13.8832 5.28979 13.7899L9.87979 9.20994C10.4497 8.66237 11.2094 8.35657 11.9998 8.35657C12.7901 8.35657 13.5498 8.66237 14.1198 9.20994L18.7098 13.7899C18.8035 13.8829 18.8779 13.9935 18.9287 14.1154C18.9794 14.2372 19.0056 14.3679 19.0056 14.4999C19.0056 14.6319 18.9794 14.7626 18.9287 14.8845C18.8779 15.0064 18.8035 15.117 18.7098 15.2099C18.6163 15.3026 18.5055 15.3759 18.3837 15.4257C18.2619 15.4755 18.1314 15.5007 17.9998 15.4999Z" />
              </svg>
            )}
          </header>
          <div className="px-4 py-4 bg-white dark:bg-darkBg flex flex-col gap-5">
            <h1 className="font-quicksand text-HLig font-bold text-2xl dark:text-HDark ">Total Cost : $ {totalCartAmount == '' ? 0 : totalCartAmount}</h1>
            <div className="h-0.5 bg-opacity-50 w-full bg-noHover dark:bg-darkNav rounded-full"></div>
            <div className="py-3 px-6 w-full bg-noHover dark:bg-darkNav bg-opacity-10 flex justify-between rounded-lg">
              <h3 className="font-quicksand text-xl font-semibold text-HLig dark:text-HDark ">Enter Coupon</h3>
              <h3 className="font-quicksand text-xl font-bold text-navigator">Apply</h3>
            </div>
            <div className="w-full py-3 px-6 bg-noHover dark:bg-darkNav bg-opacity-10 rounded-lg">
              <select placeholder="Payment Method" name="" id="" className="w-full outline-none bg-transparent p-0 font-quicksand text-xl font-semibold text-HLig dark:text-HDark ">
                <option value="" className="text-noHover">Payment Method</option>
                <option value="" className="text-HLig">Paypal</option>
                <option value="" className="text-HLig">Go-pay</option>
                <option value="" className="text-HLig">Mandiri</option>
                <option value="" className="text-HLig">Visa</option>
              </select>
            </div>
            <div className=" w-full px-6 py-3 bg-noHover dark:bg-darkNav bg-opacity-10 rounded-lg">
              <label className="font-quicksand text-xl font-semibold text-HLig dark:text-HDark" htmlFor="Shipping">Shipping Address</label>
              <textarea name="" id="Shipping"  className="bg-transparent border-none outline-none w-full font-quicksand font-semibold text-base h-40 rounded-lg mt-3 text-TexDark" placeholder="Add Address"></textarea>
            </div>

            {totalCartQuantity > 0 ? (
              <button onClick={() => {
                if(totalCartQuantity > 0) dispatch(changeIsConfPay(totalCartAmount)) 
              }} className="px-6 py-3 w-full  bg-navigator text-white text-xl flex items-center justify-center gap-3 font-quicksand font-semibold rounded-lg border-2 mt-6 hpsk:mt-0 border-navigator hover:bg-transparent hover:text-navigator transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
                <p className="">Checkout</p>
              </button>
            ) : (
              <button className="px-6 py-3 w-full  bg-navigator text-white text-xl flex items-center justify-center gap-3 font-quicksand font-semibold rounded-lg border-2 mt-6 hpsk:mt-0 border-navigato cursor-default">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
                <p className="">Checkout</p>
              </button>
            )}
          </div>
        </aside>
    </motion.main>
    </>
  )
}

export default Cart