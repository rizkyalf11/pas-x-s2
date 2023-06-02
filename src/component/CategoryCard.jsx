/* eslint-disable react/prop-types */

// FM
import { motion } from "framer-motion"

// RDX
import { useDispatch } from "react-redux"
import { openCard } from '../features/Products/isShowDetail'
import { addToCart } from "../features/Products/cartSlice"
import { toast } from "react-hot-toast"
import { changeIsFavProduct, getIsFavDetail, getStokDetail, minusProduct } from "../features/Products/ProductsSlice"
import { addToFav, minusStokFav } from "../features/Products/favSclice"

const AllProductCard = ({product}) => {
  const dispatch = useDispatch()

  // add to cart
  const hdlAddToCart = (val) => {
    dispatch(addToCart(val))
    dispatch(minusProduct(val))
    dispatch(minusStokFav({product: val, stokDetail: val.stok}))
    toast.success(`Add to cart - ${val.name}`, {
      duration: 900
    })
  }

  const hdlAddToFav = (val) => {
    dispatch(addToFav(val))
    dispatch(changeIsFavProduct(val))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
      key={product.id}
      className="bg-white select-none dark:bg-darkNav shadow-xl h-[250px] rounded-2xl relative flex transition-all duration-300 overflow-hidden group/parent overflow-y-hidden"
    >
      {product.isFav? (
        <div onClick={() => hdlAddToFav(product)} className="absolute cursor-pointer w-8 h-8 hpk:w-10 hpk:h-10 rounded-full top-3 right-3 bg-white dark:bg-darkNav z-20 flex  lg:opacity-0 group-hover/parent:opacity-100 justify-center items-center transition-all duration-300 " id="love">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_406_1997)">
            <path d="M17.5 1.9165C16.3739 1.93402 15.2724 2.24836 14.3067 2.82778C13.341 3.40719 12.5453 4.23117 12 5.2165C11.4546 4.23117 10.6589 3.40719 9.6932 2.82778C8.7275 2.24836 7.62601 1.93402 6.49996 1.9165C4.7049 1.99449 3.01366 2.77976 1.79574 4.10074C0.577818 5.42171 -0.0677922 7.17103 -4.17093e-05 8.9665C-4.17093e-05 13.5135 4.78596 18.4795 8.79996 21.8465C9.69618 22.5996 10.8293 23.0125 12 23.0125C13.1706 23.0125 14.3037 22.5996 15.2 21.8465C19.214 18.4795 24 13.5135 24 8.9665C24.0677 7.17103 23.4221 5.42171 22.2042 4.10074C20.9863 2.77976 19.295 1.99449 17.5 1.9165Z" fill="#FF0000"/>
            </g>
            <defs>
            <clipPath id="clip0_406_1997">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
          </svg>
        </div>
      ) : (
        <div onClick={() => hdlAddToFav(product)} className="absolute cursor-pointer w-8 h-8 hpk:w-10 hpk:h-10 rounded-full top-3 right-3 bg-white dark:bg-darkNav z-20 flex  lg:opacity-0 group-hover/parent:opacity-100 justify-center items-center transition-all duration-300 " id="love">
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
      )}
      <div className="absolute top-0 w-full h-[163px] md:h-[250px] bg-black z-10 hpk:group-hover/parent:h-[163px] transition-all duration-300 rounded-2xl overflow-hidden" onClick={() => {
        dispatch(getStokDetail(product))
        dispatch(getIsFavDetail(product))
        dispatch(openCard(product))
        }}>
        <div className={`w-full h-full ${product.category !== 'Minuman' && 'p-8 md:p-3'}  bg-white flex items-center justify-center`}>
          <img src={product.image} alt={product.name} className={`w-full ${product.category == 'Minuman' && 'h-full object-cover'}`} />
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
          <g clipPath="url(#clip0_406_1869)">
          <path d="M1.3268 12.4003L4.8868 15.0003L3.5348 19.1873C3.31631 19.8367 3.31354 20.5393 3.52691 21.1904C3.74027 21.8415 4.15834 22.4062 4.7188 22.8003C5.26965 23.2071 5.93719 23.425 6.62195 23.4216C7.30671 23.4182 7.97204 23.1936 8.5188 22.7813L11.9998 20.2193L15.4818 22.7783C16.0317 23.1828 16.6956 23.4025 17.3782 23.4058C18.0607 23.4091 18.7268 23.1959 19.2806 22.7968C19.8343 22.3978 20.2473 21.8334 20.4601 21.1848C20.6729 20.5362 20.6745 19.8369 20.4648 19.1873L19.1128 15.0003L22.6728 12.4003C23.2219 11.9988 23.6302 11.4341 23.8391 10.7867C24.0481 10.1394 24.0472 9.44251 23.8365 8.79571C23.6258 8.14891 23.216 7.58525 22.6658 7.18523C22.1156 6.7852 21.4531 6.56929 20.7728 6.56832H16.3998L15.0728 2.43232C14.8641 1.78128 14.4541 1.21333 13.9018 0.810386C13.3495 0.407437 12.6835 0.190308 11.9998 0.190308C11.3161 0.190308 10.6501 0.407437 10.0978 0.810386C9.54553 1.21333 9.13548 1.78128 8.9268 2.43232L7.5998 6.56832H3.2308C2.55054 6.56929 1.88799 6.7852 1.33778 7.18523C0.787564 7.58525 0.377837 8.14891 0.167118 8.79571C-0.0436018 9.44251 -0.0445344 10.1394 0.164453 10.7867C0.37344 11.4341 0.781657 11.9988 1.3308 12.4003H1.3268Z" fill="#FFD706"/>
          </g>
          <defs>
          <clipPath id="clip0_406_1869">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <h2 className=" font-quicksand font-semibold text-xl dark:text-white">{product.rate}</h2>
        <p className="font-quicksand text-TexLig dark:text-TexDark text-sm ml-1">{product.buyer}+ users</p>
      </div>
      {product.stok == 0? (
        <div className="flex  select-none justify-between w-full">
          <div className="w-full h-[38px] rounded-xl bg-gray-500  flex justify-center items-center gap-2 px-[5px] border-[2.5px] border-gray-500 transition-all duration-300 group">
            <svg className="fill-white  w-[17px] transition-colors duration-300 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
            <h1 className="text-white cursor-default text-[13px] min-[410px]:text-base font-medium   transition-colors duration-300">Add to Cart</h1>
          </div>
        </div>
      ) : (
        <div className="flex justify-between w-full">
          <div onClick={() => hdlAddToCart(product)} className="w-full select-none cursor-pointer h-[38px] rounded-xl bg-navigator flex justify-center items-center gap-2 px-[5px] hover:bg-transparent border-[2.5px] border-navigator hover:border-navigator transition-all duration-300 group">
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
      )}
      </div>
    </motion.div>
  )
}

export default AllProductCard