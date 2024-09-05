/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


const Hotels = ({ trip }) => {
    return (
        <div>
            <h2 className="font-bold text-xl mt-5 mb-3">Hotel Recommendations</h2>

            <div className="grid grid-cols-2  xl:grid-cols-3 gap-5">
                {trip?.tripData?.hotels?.map((item, index) => (
                    // instead of this can use card
                   <Link key={index} to={"https://www.google.com/maps/search/?api=1&query="+item?.hotelName+","+item?.hotelAddress} target="_blank">
                   <div key={index} className="bg-gray-100 rounded-xl p-3 hover:scale-105 transition-all cursor-pointer" >
                        <img src={"/hotel1.png"} alt="text" className="rounded-xl h-[200px] w-full" />
                        <div className="flex flex-col gap-2">
                            <h2 className="mt-3 font-medium  ">{item?.hotelName}</h2>
                            <h2 className=" mt-1 text-xs">📍 {item?.hotelAddress}</h2>
                            <h2 className="text-sm ">💳 {item?.price}</h2>
                            <h2 className="text-sm ">⭐ {item?.rating} Rating</h2>
                        </div>
                        </div>
                   </Link>

                    
                ))}
            </div>
        </div>
    )
}

export default Hotels
