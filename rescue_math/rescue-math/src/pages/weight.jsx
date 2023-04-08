import React, { useState } from 'react';
import { Michroma } from "next/font/google";

//  -------------------------------------------------------------------------------------------------------------
// Declaring functions so we can use the fonts
const michroma = Michroma ({
    weight: '400',
    subsets: ['latin']
})

function App() {
  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState('lbs');

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const convertToKg = (lbs) => {
    return lbs / 2.2046;
  };

  const convertToLbs = (kg) => {
    return kg * 2.2046;
  };

  const convertedWeight = unit === 'lbs' ? convertToKg(weight) : convertToLbs(weight);

  return (
    <div className='bg-black text-white h-screen'>
        <div className={michroma.className}>
            <p className='text-center text-4xl'>Weight Converter</p>
            <p className='pt-10 text-xl'>Description: </p>
            <p className='py-5'>This tool will help you to convert a patient's weight between pounds(lbs) and kilograms(kgs). The math is not shown on this equation because the math is simple. 1 kilogram is 2.2 pounds</p>
            <div className='w-full pt-5 text-center'>
            <label className='text-xl'>
                Weight: 
                <input className='text-black' type="text" value={weight} onChange={handleWeightChange} min="0" step="0.1" />
            </label>
            </div>
            <div className='text-center text-xl py-4'>
            <label className='p-3'>
                <input type="radio" name="unit" value="lbs" checked={unit === 'lbs'} onChange={handleUnitChange} /> lbs
            </label>
            <label>
                <input type="radio" name="unit" value="kg" checked={unit === 'kg'} onChange={handleUnitChange} /> kg
            </label>
            </div>
            <p>{weight} {unit} is {convertedWeight.toFixed(2)} {unit === 'lbs' ? 'kg' : 'lbs'}</p>
            <div className={michroma.className}>
            <div className='flex justify-center'>
                <a href="/menu"><button className='bg-blue-800 rounded-lg p-5 mt-10 w-[75vw]'>Return to Menu</button></a>
            </div>
            </div>
        </div>
    </div>
  );
}

export default App;