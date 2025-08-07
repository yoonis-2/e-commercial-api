
function Product(props){
    return <div>
        <div className="border-2 border-[#283739] w-64 h-72 mb-10">
            <img className="w-32 h-32 ml-5 mt-5" src={props.image} alt="" />
            <div className="flex  justify-between px-5 py-3  ">
                <h3 className="text-[10px] mt-2 font-bold">{props.name}</h3>
                <h3 className="font-bold ">${props.price}</h3>
            </div>
            <button className="bg-[#283739] px-8 py-2 text-white ml-10 mt-3">Add to Cart</button>
        </div>

    </div>
}

export default Product