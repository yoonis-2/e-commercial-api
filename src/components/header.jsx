import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Header(){
    const [isopen, setOpen] = useState(false)
     const handleOpen = () => {
        setOpen(true)
     }

      const handleclosed = () => {
        setOpen(false)
     }

      const cart = useSelector((e) => e.newsCart.count)


   


    return <div className="flex justify-between md:px-10 md:py-3 px-5 py-4 bg-[#283739] text-white fixed w-full ">
        <h1 className=" text-3xl font-bold">JM9</h1>
        <div className="flex gap-10 px-3 py-2">

        <ul style={{display: isopen === true ? "block" : ""}} className="hidden flex-col md:flex md:static text-center md:flex-row absolute top-16 left-0 bg-[#283739] w-full  md:bg-transparent md:w-auto  md:gap-5 space-y-16 md:space-y-0 text-2xl px-5 py-3 md:p-0">
           <Link  onClick={handleclosed} to="/"> <li className="py-3 md:py-0">Home</li></Link>
           <Link  onClick={handleclosed} to="/about"><li className="py-3 md:py-0">About</li></Link> 
            <Link    onClick={handleclosed} to="/contact"><li className="py-3 md:py-0">Contact-Us</li></Link>
        </ul>
        <div>
           <Link onClick={handleclosed} to="/cart"><i class="fa-solid fa-cart-shopping text-2xl "><span className="absolute top-0">{cart}</span></i></Link>
        </div>
        <i style={{display: isopen === true ? "none" : ""}} onClick={handleOpen} className="fa-solid fa-bars text-3xl md:hidden -mt-1"></i>
        <i style={{display: isopen === true ? "block" : "none"}} onClick={handleclosed} className="fa-solid fa-x text-3xl md:hidden -mt-2 "></i>
        </div>
        
    </div>
}

export default Header