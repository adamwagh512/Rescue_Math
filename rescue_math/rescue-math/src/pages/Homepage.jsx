import React from 'react'
import emsvid from '../../public/ems.mp4'
import { Josefin_Slab, Michroma } from "next/font/google";

//  -------------------------------------------------------------------------------------------------------------
// Declaring functions so we can use the fonts
const josefin_slab = Josefin_Slab({
  weight: "400",
  subsets: ["latin"],
});

const michroma = Michroma ({
    weight: '400',
    subsets: ['latin']
})

const Homepage = () => {
  return (
    <div className='bg-black h-screen text-white'>
        <div className='w-full h-[50%]'>
            <video className='h-[50vh] w-[100vw] object-fill' autoPlay loop muted playsInline> 
                <source src={emsvid} type='video/mp4' />
            </video>
            
        </div>
        <div className={michroma.className}>
            <p className='text-center text-2xl'>Welcome to Rescue Math </p>
            <p className='text-sm pt-4 px-10'>
            Rescue Math is a revolutionary app designed specifically for paramedics and other medical professionals who deal with complex calculations on a regular basis. Whenever you're calculating medication dosages, Rescue Math simplifies the process and reduces the risk of errors. With just a few inputs, the app returns an accurate answer and displays the equation used to arrive at the solution. This not only helps users understand the calculation process but also provides transparency and accountability, ensuring that the results are always reliable. With Rescue Math, medical math has never been easier or more accessible.
            </p>
        </div>
        <div class="flex justify-center items-center pt-5">
            <div className={michroma.className}>
                <a href="/menu">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"> Get Started </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Homepage