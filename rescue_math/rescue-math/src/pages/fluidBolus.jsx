// Importing React and useState hook from react library
import React, { useState } from 'react';
// Importing Katex for equations
import 'katex/dist/katex.min.css';
import katex from 'katex';
// Importing Michroma font from the Google Fonts package
import { Michroma } from "next/font/google";

// Declaring functions so we can use the Michroma font
const michroma = Michroma({
  weight: '400',
  subsets: ['latin']
});

const fluidBolus = () => {
    // Setting state values
    const [volume, setVolume] = useState('');
    const [time, setTime] = useState('')
    const [dripSet, setDripSet] = useState('')
    const [clicked, setClicked] = useState(false)
  
    // Making functions to handle state changes
    function handleVolumeChange(event) {
      setVolume(event.target.value);
    }

    function calculate(event) {
        setClicked(true)
    }

    function clearAll(event) {
        setClicked(false)
        setVolume('')
        setTime('')
        setDripSet('')
    }

    function handleTimeChange(event) {
        setTime(event.target.value);
    }
    
    function handleDripSetChange(event) {
        setDripSet(event.target.value);
    }

    const answer = ((volume * dripSet) / time).toFixed(0)
    const answer2 = (60/answer).toFixed(2)
    const answer3 = (answer/60).toFixed(2)

    const testEquation = `\\frac{gtts}{ml} = \\frac{${dripSet}gtts}{ml} * \\frac{${volume}ml}{${time}min} = ${answer}gtts/min`
    const renderTest = katex.renderToString(testEquation)

      
  return (
    <div className={michroma.className}>
        <div className='bg-black h-screen text-white'>
            <div className='bg-black h-max'>
            <p className='text-4xl text-center'>IV Fluid Bolus</p>
            <p className='py-5'>Description:</p>
            <p>The IV Fluid Bolus section takes in the volume of fluid to be given, the time over which it is to be given and the drip set used (in gtts/ml). This equation returns an answer in drops per minute (gtts/min) </p>


            {/* This segment controls the volume input field */}
            <div className='py-5'>
                <label htmlFor="volume">Volume (mL):</label>
                <div>
                <input className=' text-black'
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
                <input className=' text-black'
                    type="number"
                    id="time"
                    name="time"
                    value={time}
                    onChange={handleTimeChange}
                />
                </div>
                {/* This segment controls the dripset input field */}
            </div>
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
                {volume && time && dripSet && clicked ? (<div className='text-xl py-10' id='test' dangerouslySetInnerHTML={{__html:renderTest}}></div>
                ) : clicked === false ? '' : <div className='text-xl py-10 text-red-600' > Please ensure all input fields are populated with numbers only</div> }
                
                {volume && time && dripSet && clicked == true && (answer2 > 1) ? (<div className='my-5'><p>You should see a drop every {answer2} seconds.</p></div>) : (answer2 < 1) && clicked ? <div className='my-5'> You should see {answer3} drops per second</div> : ''}

                {/* <div className='text-xl py-10' id='test' dangerouslySetInnerHTML={{__html:renderTest}}></div>
                <p className='text-l'>You should see a drop every {answer2} second(s)</p> */}
            </div>
           
            <div className='flex-col justify-center'>
            {clicked === false ? ( <button className='bg-blue-800 rounded-lg p-5 mt-10 w-[100%]' onClick={calculate}>Calculate</button>) : <button className='bg-blue-800 rounded-lg p-5 mt-10 w-[100%]' onClick={clearAll}>Reset</button>}
            {/* <button className='bg-blue-800 rounded-lg p-5 mt-10 w-[100%]' onClick={calculate}>Calculate</button> */}
                <a href="/menu"><button className='bg-blue-800 rounded-lg p-5 mt-10 w-[100%]'>Return to Menu</button></a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default fluidBolus