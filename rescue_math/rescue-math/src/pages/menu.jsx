import React from 'react'
import { Michroma } from "next/font/google";

//  -------------------------------------------------------------------------------------------------------------
// Declaring functions so we can use the fonts
const michroma = Michroma ({
    weight: '400',
    subsets: ['latin']
})


const menu = () => {
  return (
    <div className='bg-black h-screen text-white uppercase'>
        <div className='text-center'>
            <p className={michroma.className}>please select calculation type</p>
        </div>
        <div className={michroma.className}>
            <div className='flex flex-col justify-center items-center'>
                        <a href="/weight"><button className='bg-blue-800 rounded-lg p-5 mt-10 w-[75vw]'>Weight Conversion</button></a>
                        <a href="/fluidBolus"><button className='bg-blue-800 rounded-lg p-5 mt-10 w-[75vw]'>IV Fluid Administration</button></a>
                        <a href="/bolus"><button className='bg-blue-800 rounded-lg p-5 mt-10 w-[75vw]'>IV Medication Bolus</button></a>
                        <button className='bg-gray-800 rounded-lg p-5 mt-10 w-[75vw]'>IV Drip Medication</button>
                        <a href="/Parkland"><button className='bg-blue-800 rounded-lg p-5 mt-10 w-[75vw]'>Parkland Burn Formula</button></a>
                        <button className='bg-gray-800 rounded-lg p-5 mt-10 w-[75vw]'>Weight-Based Med Bolus</button>
                        <button className='bg-gray-800 rounded-lg p-5 mt-10 w-[75vw]'>Weight-Based IV Drip</button>
                        <a href="/Homepage"><button className='bg-red-800 rounded-lg p-5 mt-10 w-[75vw]'>Return to Home</button></a>
                    
            </div>
        </div>
    </div>
  )
}

export default menu