import logo from "../../../images/logo_lia.png";
import cartIcon from "../../../images/cart2.png";
import Image from "next/image";
import {BiCaretDown} from "react-icons/bi";
import {HiOutlineSearch} from "react-icons/hi";
import {SlLocationPin} from "react-icons/sl";

const Header = () => {
  return (
    <div className="w-full h-30 bg-amazon_blue text-lightText sticky top-0 z-50 p-2">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        {/* logo */}
        <div className="px-2 cursor-pointer duration-300 flex items-center justify-center h-[70%]">
         <Image src={logo} alt="logo" className="w-28 object-cover "/>
        </div>
        {/* delivery */}
        <div className="flex items-center gap-2 cursor-pointer">
          <SlLocationPin className=""/>
          <div className="flex flex-col items-center">
          <p>Deliver to</p>
          <p className="font-bold uppercase">USA</p>
          </div>
        </div>
        {/* searchbar */}
         <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative ">
          <input type="text" placeholder="Search" className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"/>
         <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
          <HiOutlineSearch />
          </span>
         </div>
        {/* signin */}
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 cursor-pointer">
          <p>Hello, sign in</p>
          <p className="text-white font-bold flex items-center gap-1">Account & List {" "}
            <span><BiCaretDown /></span>
          </p>
        </div>
        {/* favorite */}
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 cursor-pointer">
          <p>Marked</p>
          <p className="text-white font-bold">& Favorite</p>
        </div>
        {/* cart */}
        <div className="flex items-center px-2 cursor-pointer relative">
          <Image src={cartIcon} alt="cartImg" className="w-auto object-cover h-8"/>
          <p className="text-xs text-white font-bold mt-3">cart</p>
          <span className="absolute text-amazon_yellow text-lg top-[-5px] right-[16px] font-semibold">0</span>
        </div>
      </div>
    </div>
  )
}

export default Header


















