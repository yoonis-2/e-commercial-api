import { useEffect, useState } from "react"
import Product from "../product"
import image from "/Airport.jpg"
import imges from "/isolated-white-t-shirt-front-view_125540-1194.avif"
import axios from "axios"
import { useSelector } from "react-redux"



function Home(){
    
    const [Data, setData] = useState([])
    const handleReadData = () => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            setData(response.data)
        })
    }

    useEffect(() => {
        handleReadData()
    },[])

    const cart = useSelector((e) => e.newsCart. count)
    return <div>
        <div className="flex flex-col md:flex md:flex-row  justify-evenly md:pt-[13%] pt-[25%] ml-8 md:ml-0">
            {/* left */}
            <div className="mt-3" >
                <h2 className="md:text-3xl text-3xl font-bold pb-5 w-72 md:auto">Best Place For Shopping <br /> In Your Area</h2>
                <p className="pb-5 ">We got your everything that you need. visit us any <br /> where and any time</p>
                <button className="bg-[#283739] px-10 py-2 text-2xl text-white rounded-lg mb-10 ">Explore More</button>
            </div>
            {/* right */}
            <div>
                <img className="md:w-96 w-80 rounded-lg" src={image} alt="" />
            </div>
        </div>
       {/* product-section */}
       <div className="md:grid md:grid-cols-3 grid grid-cols-1 md:ml-16  ml-16 md:mt-[3%] mt-[20%] md:mb-[5%] mb-[16%]">
        {
            Data.slice(6,12).map((item) => 
                 <Product image={item.image} name={item.title} price={item.price}/>
            )}
       </div>

        
      

    </div>
}

export default Home