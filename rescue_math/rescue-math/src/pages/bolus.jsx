import React, { useState } from "react";
// Importing Katex for equations
import "katex/dist/katex.min.css";
import katex from "katex";
import { Michroma } from "next/font/google";

// Declaring functions so we can use the Michroma font

const michroma = Michroma({
weight: "400",
subsets: ["latin"],
});

export const bolus = () => {
// Setting state values
const [desiredUnit, SetDesiredUnit] = useState('mg')
const HandleDesiredUnitChange = (event) => {
    SetDesiredUnit(event.target.value)
}

const [desiredValue, SetDesiredValue] = useState('')
const HandleDesiredValueChange = (event) => {
    SetDesiredValue(event.target.value)
}


const [givenUnit, SetGivenUnit] = useState('mg')
const HandleGivenUnitChange = (event) => {
    SetGivenUnit(event.target.value)
}

const [givenValue, SetGivenValue] = useState('')
const HandleGivenValueChange = (event) => {
    SetGivenValue(event.target.value)
}

const [fluid, setFluid] = useState('')
const handleFluidChange = (event) => {
    setFluid(event.target.value)
}
const [clicked, setClicked] = useState(false);
  function calculate(event) {
    setClicked(true);
  }
  function clearAll(event) {
    setClicked(false);
    SetDesiredValue("");
    SetGivenValue("");
    setFluid("");
  }

// What gets rendered
  return (
    <div className="h-screen bg-black text-white">
      <div className="h-fill bg-black">
        <div className={michroma.className}>
          <p className="text-2xl text-center">Medication Bolus</p>
          <p className="py-5">Description:</p>
          <p>
            This page is useful for telling you how much volume (mLs) to
            administer in order to deliver the desired doseage of medication
          </p>
          <div>
            <div className="py-5">
          <label htmlFor="volume" className={michroma.className}>
            Desired Dose :
          </label>
          <input
            className="mx-1 text-black"
            type="number"
            id="desiredValue"
            name="desiredValue"
            value={desiredValue}
            onChange={HandleDesiredValueChange}
          />
        </div>
        <div className='text-center text-xl'>
          <label className='p-3'>
            <input type="radio" name="unit" value="mg" checked={desiredUnit === 'mg'} onChange={HandleDesiredUnitChange} /> mg
          </label>
          <label>
            <input type="radio" name="unit" value="mcg" checked={desiredUnit === 'mcg'} onChange={HandleDesiredUnitChange} /> mcg
          </label>
        </div>
        <div>
            <p className="text-center text-xl py-5">Concentration of Medication</p>
        </div>
        <div className="py-5">
          <label htmlFor="volume" className={michroma.className}>
            Given Dose :
          </label>
          <input
            className="mx-7 text-black"
            type="number"
            id="givenValue"
            name="givenValue"
            value={givenValue}
            onChange={HandleGivenValueChange}
          />
        </div>
        <div className='text-center text-xl'>
          <label className='p-3'>
            <input type="radio" name="givenunit" value="mg" checked={givenUnit === 'mg'} onChange={HandleGivenUnitChange} /> mg
          </label>
          <label>
            <input type="radio" name="givenunit" value="mcg" checked={givenUnit === 'mcg'} onChange={HandleGivenUnitChange} /> mcg
          </label>
        </div>
        
        <div className="py-5">
          <label htmlFor="volume" className={michroma.className}>
            Given Fluid(ml) :
          </label>
          <input
            className=" text-black"
            type="number"
            id="burned"
            name="burned"
            value={fluid}
            onChange={handleFluidChange}
          />
        </div>
        { fluid && desiredValue && givenValue && clicked == true ? (console.log('fake')) : ''}
          </div>
        </div>
         <div className={michroma.className}>
        {clicked === false ? (
          <button
            className="bg-blue-800 rounded-lg p-5 mt-10 w-[100%]"
            onClick={calculate}
          >
            Calculate
          </button>
        ) : (
          <button
            className="bg-blue-800 rounded-lg p-5 mt-10 w-[100%]"
            onClick={clearAll}
          >
            Reset
          </button>
        )}
        <a href="/menu"><button className="bg-blue-800 rounded-lg p-5 mt-10 w-[100%]">
          Return to Menu
        </button></a>
      </div>
      </div>
    </div>
  );
};
export default bolus;
