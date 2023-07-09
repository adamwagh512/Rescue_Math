// Importing React and useState hook from react library
import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import katex from 'katex';

// Importing Michroma font from the Google Fonts package
import { Michroma } from "next/font/google";
import Link from 'next/link';

// Declaring functions so we can use the Michroma font
const michroma = Michroma({
  weight: '400',
  subsets: ['latin']
});

// Defining the App component
function App() {

  // Using the useState hook to define state variables for weight and unit
  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState('lbs');

  // Event handler for weight change
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  // Event handler for unit change
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  // Function to convert weight from lbs to kg
  const convertToKg = (lbs) => {
    return lbs / 2.2046;
  };

  // Function to convert weight from kg to lbs
  const convertToLbs = (kg) => {
    return kg * 2.2046;
  };

  
  
  // Calculating the converted weight based on the unit
  const convertedWeight = unit === 'lbs' ? convertToKg(weight) : convertToLbs(weight);
  console.log(convertedWeight)
  
// Setting up the Katex equations for display
// This will convert from kg to lbs
  const kg2lb = `${weight}kg * 2.2lbs = ${convertedWeight.toFixed(2)} lbs`
  const convert2lb = katex.renderToString(kg2lb)
//   This will convert from lbs to kg.
  const lb2kg = `\\frac{${weight}kg}{2.2lbs}\\ = ${convertedWeight.toFixed(2)}kg(s)`;
  const convert2kg = katex.renderToString(lb2kg);

 

  return (
    <div className='bg-black text-white h-screen'>
      <div className='bg-black h-max'>

      {/* Rendering the Michroma font */}
      <div className={michroma.className}>
        <p className='text-center text-4xl'>Weight Converter</p>

        <p className='pt-10 text-xl'>Description: </p>
        <p className='py-5'>
          This tool will help you to convert a patients weight between pounds(lbs) and kilograms(kgs).
          Please input the patients weight and the weight unit. The conversion will happen automatically.
        </p>
        {/* MathJax equation for weight conversion */}
       
        {/* Input field for weight */}
        <div className='w-full pt-5 text-center'>
          <label className='text-xl'>
            Weight: 
            <input className='text-black' type="text" value={weight} onChange={handleWeightChange} min="0" step="0.1" />
          </label>
        </div>

        {/* Radio buttons for unit */}
        <div className='text-center text-xl py-4'>
          <label className='p-3'>
            <input type="radio" name="unit" value="lbs" checked={unit === 'lbs'} onChange={handleUnitChange} /> lbs
          </label>
          <label>
            <input type="radio" name="unit" value="kg" checked={unit === 'kg'} onChange={handleUnitChange} /> kg
          </label>
        </div>

        {/* Displaying the converted weight */}
        <p>{weight} {unit} is {convertedWeight.toFixed(2)} {unit === 'lbs' ? 'kg' : 'lbs'}</p>
        <p className='py-5'>Equation : </p>

        {unit === 'lbs' ? (
            <span dangerouslySetInnerHTML={{__html: convert2kg}}></span>
            ) : <div id='convertfromlb' dangerouslySetInnerHTML={{__html: convert2lb}}></div>}

               
        {/* Button to return to the menu */}
        <div className={michroma.className}>
          <div className='flex justify-center'>
            <Link href="/menu"><button className='bg-blue-800 rounded-lg p-5 mt-10 w-[75vw]'>Return to Menu</button></Link>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}

// Exporting the App component as the default export
export default App;