const Navbar = () => {
  return (
    <header
    className="h-[80px] bg-navigator dark:bg-slate-700 flex flex-row items-center justify-between gap-1 hpsk:gap-3 hpk:gap-0 px-2 hpsk:px-4 hpk:px-10 lg:px-20 fixed inset-x-0 top-0 shadow-xl z-30 ">
    <img src="../src/img/Group 32.png" alt="" className="h-[55px] hidden lg:block" />
    <div className="relative flex items-center h-[50px] ">

      <label htmlFor="search" className="absolute left-3  top-3 ">
        <ion-icon className=" text-2xl text-[#8b8b8b]" name="search-outline"></ion-icon>
      </label>
      <input type="search" name="" id="search" placeholder=' '
        className="h-[35px] hpsk:h-[40px] rounded-full w-[98%] hpk:w-full xl:w-[580px] text-base hpsk:text-lg pl-[50px] outline outline-white focus:outline-[3px] focus:outline-[#8b8b8b] pr-[15px] hpk:pr-[30px] transition duration-300 hover:ring-4 hover:ring-green-600" />
    </div>
    <div className=" flex flex-row items-center gap-2 hp:gap-4">
      <ion-icon name="heart-outline" className="text-white font-black text-3xl hp:text-4xl"></ion-icon>
      <ion-icon name="cart-outline" className="text-white font-black text-3xl hp:text-4xl"></ion-icon>
      <div className=" flex flex-row gap-2 items-center cursor-pointer" id="profile">
        <h1 className=" text-white text-2xl font-poppins font-normal hidden sm:block">Person</h1>
        <ion-icon name="person-circle-outline" className="text-white font-black text-4xl hp:text-5xl "></ion-icon>
      </div>
    </div>
    <div
      className="absolute flex flex-col gap-2 w-[340px] h-[340px] rounded-3xl bg-white dark:bg-slate-700 shadow-xl -right-[340px] top-28 py-4 px-4 transition-all duration-150"
      id="profileDetail">
      <div className="flex items-center gap-3 mb-2">

        <div className="aspect-square w-[100px] rounded-full bg-slate-700 dark:bg-white " id="switch">

        </div>
        <div className=" flex flex-col font-poppins">
          <h1 className=" text-2xl font-medium dark:text-white">person</h1>
          <h2 className=" font-light text-sm text-[#8b8b8b]">mondokskuy19@gmail.com</h2>
        </div>
      </div>
      <hr />
      <div className=" flex flex-col gap-3 ml-5 mt-2">

        <div
          className="font-quicksand text-[#8b8b8b] dark:text-white dark:hover:text-navigator hover:text-navigator flex flex-row items-center gap-4 group">
          <ion-icon name="heart" className="text-3xl  transition-all duration-150"></ion-icon>
          <h3 className="font-bold text-xl transition-all duration-150">Wishlist</h3>
        </div>
        <div
          className="font-quicksand text-[#8b8b8b] dark:text-white dark:hover:text-navigator hover:text-navigator  flex flex-row items-center gap-4">
          <ion-icon name="cart" className="text-3xl transition-all duration-150"></ion-icon>
          <h3 className="font-bold text-xl transition-all duration-150">Cart</h3>
        </div>
        <div
          className="font-quicksand text-[#8b8b8b] dark:text-white dark:hover:text-navigator hover:text-navigator  flex flex-row items-center gap-4">
          <ion-icon name="people" className="text-3xl transition-all duration-150"></ion-icon>
          <h3 className="font-bold text-xl transition-all duration-150">About Creator</h3>
        </div>
      </div>
      <hr className="my-2" />
      <div className="ml-4">
        <label className="relative inline-flex items-center mb-5 cursor-pointer text-[#8b8b8b]">
          <input type="checkbox" className="sr-only peer" id="darkSwitch" />
          <div
            className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-navigator">
          </div>
          <span className="ml-3 text-sm text-gray-900 dark:text-gray-300 font-quicksand font-medium">Dark Mode</span>
        </label>

      </div>
    </div>
  </header>
  )
}

export default Navbar