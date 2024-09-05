/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from '@/components/ui/button'
import React from 'react'

const InfoSection = ({ trip }) => {
    return (
        <div>

            <img src="/plane1.png" alt="placeholder" className='h-[330px] w-full object-cover rounded-xl' />

            <div className='flex justify-between items-center'>
                {/* showing hotel info */}
                <div className='my-5 flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl'>{trip.userSelection.destination}🗺️</h2>

                    {/* div to show basic info */}

                    <div className='flex gap-4 mt-2'>
                         {/* instead of this can use badge */}
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full 
                        text-gray-900 text-xs md:text-md'>{trip.userSelection.days} Day 📅</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-900 text-xs md:text-md'>{trip.userSelection.budget} Budget 🪙</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-xs md:text-md text-gray-900'
                        >{trip.userSelection.people} 🧑‍🤝‍🧑</h2>
                    </div>
                </div>

                <Button>➤</Button>
            </div>
        </div>
    )
}

export default InfoSection
