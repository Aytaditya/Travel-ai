/* eslint-disable react/prop-types */

import { Button } from "@/components/ui/button"



const PlaceCardItem = ({plan}) => {
  return (
    <div className="shadow-md rounded-xl p-3 flex gap-5 h-full">
  <img src="/hotel.png" className="w-[150px] h-[150px]" alt="text" />
  <div className="flex-grow" >
    <h2 className="font-bold text-lg">{plan.placeName}</h2>
    <h2 className="font-semibold text-xs mt-1 text-orange-600">
      {plan.time}
    </h2>
    <p className="text-sm text-gray-600">{plan.placeDetails}</p>
    <p className="mt-2 text-sm font-semibold">⭐ {plan.rating} Rating</p>
    <Button className="mt-3" variant="secondary" size="sm">Navigate 🗺️</Button>
  </div>
</div>

  )
}

export default PlaceCardItem
