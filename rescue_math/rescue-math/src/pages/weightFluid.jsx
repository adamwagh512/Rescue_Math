// Importing React and useState hook from react library
import React, { useState } from 'react';
// Importing Katex for equations
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

const WeightFluid = () => {
    // Setting state values
    const [volume, setVolume] = useState('');
    const [time, setTime] = useState('')
    const [dripSet, setDripSet] = useState('')
    const [clicked, setClicked] = useState(false)
    const [weightValue, setWeightValue] = useState('')
    const [weightUnit, setWeightUnit] = useState('lbs')
  
    // Making functions to handle state changes
    function handleVolumeChange(event) {
      setVolume(event.target.value);
    }

    function handleTimeChange(event) {
        setTime(event.target.value);
    }
    
    function handleDripSetChange(event) {
        setDripSet(event.target.value);
    }

    function handleWeightValueChange(event) {
        setWeightValue(event.target.value);
    }

    function handleWeightUnitChange(event) {
        setWeightUnit(event.target.value);
    }

    function calculate(event) {
        setClicked(true)
    }

    function clearAll(event) {
        setClicked(false)
        setVolume('')
        setTime('')
        setDripSet('')
        setWeightValue('')
    }

    var answer = ''
    var testEquation = ''
    var totalVolume = ''

    if (weightUnit == 'lbs') {
        answer = ((dripSet * volume * weightValue)/(2.2 * time)).toFixed(2)
        testEquation = `\\frac{${dripSet}gtts}{ml} * \\frac{${volume}ml(per kg)}{kg} * \\frac{1kg}{2.2lbs} * \\frac{${weightValue}lbs}{${time}min} = ${answer}gtts/min`
        totalVolume = ((volume * weightValue)/(2.2)).toFixed(2)

    } else {
        answer = ((dripSet * volume * weightValue)/(time)).toFixed(2)
        testEquation = `\\frac{${dripSet}gtts}{ml} * \\frac{${volume}ml(per kg)}{kg} *  \\frac{${weightValue}kgs}{${time}min} = ${answer}gtts/min`
        totalVolume = ((volume * weightValue)).toFixed(2)
    }

    const answer2 = (60/answer).toFixed(2)
    const answer3 = (answer/60).toFixed(2)

    
    const renderTest = katex.renderToString(testEquation)

      
  return (
    <div className={michroma.className}>
        <div className='bg-black h-screen text-white'>
            <div className='bg-black h-max'>
            <p className='text-4xl text-center'>Weight Based Fluid Bolus</p>
            <p className='py-5'>Description:</p>
            <p>The Weight Based Fluid Bolus section takes in the volume of fluid to be given per kg, the patients weight and the time over which it is to be given and the drip set used (in gtts/ml). This equation returns an answer in drops per minute (gtts/min) </p>


            {/* This segment controls the volume input field */}
            <div className='py-5'>
                <label htmlFor="volume">Volume (per kg):</label>
                <div>
                <input className='text-black'
                    type="number"
                    id="volume"
                    name="volume"
                    value={volume}
                    onChange={handleVolumeChange}
                />
                </div>
                {/* This segment controls the time input field */}
            </div>
            <div className='py-5'>
                <label htmlFor="volume">Time (mins ) :</label>
                <div>
                <input className='text-black'
                    type="number"
                    id="time"
                    name="time"
                    value={time}
                    onChange={handleTimeChange}
                />
                </div>
            </div>


            <div className='py-5'>
                <label htmlFor="volume">Pt Weight:</label>
                <div>
                <input className='text-black'
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

            {/* This segment controls the dripset input field */}
            <div className='py-5'>
                <label htmlFor="volume">IV Set (gtt/ml) :</label>
                <div>
                <input className='text-black'
                    type="number"
                    id="time"
                    name="time"
                    value={dripSet}
                    onChange={handleDripSetChange}
                />
                </div>
                {/* This segment of code controlls the how and when the Katex equations will display. */}
                {/* I know, I know, this is ugly code, but let me walk you through it. If the calculate button has not been clicked, nothing will display, If all the input fields are populated, and the calculate button has been clicked, it will display an answer. Else it will display an error message for the user */}
                {volume && time && dripSet && weightValue && clicked ? (<div className='my-5'><p>The total fluid to be infused is {totalVolume} mLs.</p></div>): '' }
                
                {volume && time && dripSet && weightValue && clicked ? (<div className='text-xl py-10' id='test' dangerouslySetInnerHTML={{__html:renderTest}}></div>
                ) : clicked === false ? '' : <div className='text-xl py-10 text-red-600' > Please ensure all input fields are populated with numbers only</div> }
                
                {volume && time && dripSet && weightValue && clicked == true && (answer2 > 1) ? (<div className='my-5'><p>You should see a drop every {answer2} seconds.</p></div>) : (answer2 < 1) && clicked ? <div className='my-5'> You should see {answer3} drops per second</div> : ''}

                {/* <div className='text-xl py-10' id='test' dangerouslySetInnerHTML={{__html:renderTest}}></div>
                <p className='text-l'>You should see a drop every {answer2} second(s)</p> */}
            </div>
           
            <div className='flex-col justify-center'>
            {clicked === false ? ( <button className='bg-blue-800 rounded-lg p-5 mt-10 w-[100%]' onClick={calculate}>Calculate</button>) : <button className='bg-blue-800 rounded-lg p-5 mt-10 w-[100%]' onClick={clearAll}>Reset</button>}
            {/* <button className='bg-blue-800 rounded-lg p-5 mt-10 w-[100%]' onClick={calculate}>Calculate</button> */}
                <Link href="/menu"><button className='bg-blue-800 rounded-lg p-5 mt-10 w-[100%]'>Return to Menu</button></Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default WeightFluid