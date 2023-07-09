import React from "react";
import { Michroma } from "next/font/google";
import Link from 'next/link'
//  -------------------------------------------------------------------------------------------------------------
// Declaring functions so we can use the fonts
const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

const menu = () => {
  return (
    <div className="bg-black h-screen text-white uppercase">
      <div className="bg-black h-max">
        <div className="text-center ">
          <p className={michroma.className}>please select calculation type</p>
        </div>
        <div className={michroma.className}>
          <div className="flex flex-col justify-center items-center">
            <Link href="/weight">
              <button className="bg-blue-800 rounded-lg p-5 mt-10 w-[75vw]">
                Weight Conversion
              </button>
            </Link>
            <Link href="/fluidBolus">
              <button className="bg-blue-800 rounded-lg p-5 mt-10 w-[75vw]">
                IV Fluid Administration
              </button>
            </Link>
            <Link href="/bolus">
              <button className="bg-blue-800 rounded-lg p-5 mt-10 w-[75vw]">
                IV Medication Bolus
              </button>
            </Link>
            <Link href="/">
              <button className="bg-gray-800 rounded-lg p-5 mt-10 w-[75vw]">
                IV Medication Drip
              </button>
            </Link>
            <Link href="/Parkland">
              <button className="bg-blue-800 rounded-lg p-5 mt-10 w-[75vw]">
                Parkland Burn Formula
              </button>
            </Link>
            <Link href="/weightMedBolus"><button className="bg-blue-800 rounded-lg p-5 mt-10 w-[75vw]">
              Weight-Based Med Bolus
            </button></Link>
            <Link href="/weightFluid"><button className="bg-blue-800 rounded-lg p-5 mt-10 w-[75vw]">
              Weight-Based Fluid Drip
            </button></Link>
            <Link href="/Homepage">
              <button className="bg-red-800 rounded-lg p-5 mt-10 w-[75vw]">
                Return to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;
