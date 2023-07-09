import React, { useState } from "react";
// Importing Katex for equations
import "katex/dist/katex.min.css";
import katex from "katex";
import { Michroma } from "next/font/google";
import Link from "next/link";

// Declaring functions so we can use the Michroma font

const michroma = Michroma({
weight: "400",
subsets: ["latin"],
});

const Bolus = () => {
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

const [weightValue, setWeightValue] = useState('')
function handleWeightValueChange(event) {
    setWeightValue(event.target.value);
}

const [weightUnit, setWeightUnit] = useState('lbs')
function handleWeightUnitChange(event) {
    setWeightUnit(event.target.value);
}

var convertedWeight = ''

if (weightUnit == 'lbs'){
    convertedWeight = (weightValue/2.2).toFixed(1)
    } else {
        convertedWeight = weightValue
    }
console.log(convertedWeight)

var totaldose = (convertedWeight * desiredValue).toFixed(2)
// setting medBolusEquation equal to empty string for now
var medBolusEquation = ''
var answer = ''

  // setting conditional equation statement
  if (givenUnit == 'mg' && desiredUnit == 'mg' ){
    answer = ((fluid * desiredValue * convertedWeight)/(givenValue)).toFixed(2)
    medBolusEquation = `{mL(s)} = \\frac{${fluid}mLs}{${givenValue}mg(s)} * \\frac{${desiredValue}mg(s)}{kg} * \\frac{${convertedWeight}kgs}{} = ${answer}mL(s)`
  } else if (givenUnit == 'mcg' && desiredUnit == 'mcg' ){
    answer = ((fluid * desiredValue * convertedWeight)/(givenValue)).toFixed(2)
    medBolusEquation = `{mL(s)} = \\frac{${fluid}mLs}{${givenValue}mcg(s)} * \\frac{${desiredValue}mcg(s)}{kg} * \\frac{${convertedWeight}kgs}{} = ${answer}mL(s)`
  } else if (givenUnit == 'mg') {
    answer = (fluid * desiredValue * convertedWeight)/(givenValue *1000)
    medBolusEquation = `{mL(s)} = \\frac{${fluid}mL(s)}{${givenValue}mg(s)} * \\frac{1 mg}{1000 mcg} * \\frac{${desiredValue}mcg(s)}{kg} * \\frac{${convertedWeight}}{} = ${answer}mL(s)`
  } else if (givenUnit == 'mcg') {
    answer = (fluid * desiredValue * 1000 * convertedWeight)/(givenValue)
    medBolusEquation = `{mL(s)} = \\frac{${fluid}mL(s)}{${givenValue}mcg(s)} * \\frac{1000 mcg}{1 mg} * \\frac{${desiredValue}mg(s)}{kg} * \\frac{${convertedWeight}}{} = ${answer}mL(s)`
  }

  // Helps render equation to page
  const renderMedBolusEquation = katex.renderToString(medBolusEquation)
  // declaring a clear all function
  function clearAll(event) {
    setClicked(false);
    SetDesiredValue("");
    SetGivenValue("");
    setFluid("");
    setWeightValue("");
  }

// What gets rendered
  return (
    <div className="h-screen bg-black text-white">
      <div className="h-fill bg-black">
        <div className={michroma.className}>
          <p className="text-2xl text-center">Weight Based Medication Bolus</p>
          <p className="py-5">Description:</p>
          <p>
            This page is useful for telling you how much volume (mLs) to
            administer in order to deliver the desired doseage of medication based on a patients weight.
          </p>
          <div>
            <div className="py-5">
          <label htmlFor="volume" className={michroma.className}>
            Dose(per kg) :
          </label>
          <div>
          <input
            className="mx-0 text-black"
            type="number"
            id="desiredValue"
            name="desiredValue"
            value={desiredValue}
            onChange={HandleDesiredValueChange}
          />
          </div>
        </div>
        <div className='text-center text-xl'>
          <label className='p-3'>
            <input type="radio" name="desiredUnit" value="mg" checked={desiredUnit === 'mg'} onChange={HandleDesiredUnitChange} /> mg
          </label>
          <label>
            <input type="radio" name="desiredUnit" value="mcg" checked={desiredUnit === 'mcg'} onChange={HandleDesiredUnitChange} /> mcg
          </label>
        </div>

        <div className='py-5'>
                <label htmlFor="volume">Pt Weight:</label>
                <div>
                <input className='mx-0 text-black'
                    type="number"
                    id="weightValue"
                    name="weightValue"
                    value={weightValue}
                    onChange={handleWeightValueChange}
                />
                </div>
            </div>

        <div className='text-center text-xl'>
          <label className='p-3'>
            <input type="radio" name="unit" value="lbs" checked={weightUnit === 'lbs'} onChange={handleWeightUnitChange} /> lbs
          </label>
          <label>
            <input type="radio" name="unit" value="kgs" checked={weightUnit === 'kgs'} onChange={handleWeightUnitChange} /> kgs
          </label>
        </div>


        <div>
            <p className="text-center text-xl py-5">Concentration of Medication</p>
        </div>
        <div className="py-5">
          <label htmlFor="volume" className={michroma.className}>
            Given Dose :
          </label>
          <div>
          <input
            className="mx-0 text-black"
            type="number"
            id="givenValue"
            name="givenValue"
            value={givenValue}
            onChange={HandleGivenValueChange}
          />
          </div>
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
          <div>
          <input
            className=" text-black"
            type="number"
            id="givenFluid"
            name="givenFluid"
            value={fluid}
            onChange={handleFluidChange}
          />
          </div>
        </div>
        { weightValue && clicked ? (<div className='my-5 text-sm' ><p>The total dose is {totaldose} {desiredUnit}.</p></div>): '' }
        { weightValue && weightUnit == 'lbs'  && clicked ? (<div className='my-5 text-sm' ><p>The patients weight was converted to {convertedWeight} kgs.</p></div>): '' }
        { fluid && desiredValue && givenValue && clicked == true ? (<div className='text-sm my-5' id='test' dangerouslySetInnerHTML={{__html:renderMedBolusEquation}}></div>) : ''}
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
        <Link href="/menu"><button className="bg-blue-800 rounded-lg p-5 mt-10 w-[100%]">
          Return to Menu
        </button></Link>
      </div>
      </div>
    </div>
  );
};
export default Bolus;