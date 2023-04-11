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

const Parkland = () => {
    // Define state
  const [dripSet, setDripSet] = useState("");
  const [weight, setWeight] = useState("");
  const [burned, setBurned] = useState("");
  const [clicked, setClicked] = useState(false);

    // perform calculations
  const totalVolume = weight * burned * 4;
  const halfVolume = totalVolume / 2;
  const eightHourRate = ((dripSet * halfVolume) / (8 * 60)).toFixed(2)
  const sixteenHourRate = ((dripSet * halfVolume) / (16 * 60)).toFixed(2)

//   handle state changes
  function handleDripChange(event) {
    setDripSet(event.target.value);
  }

  function handleWeightChange(event) {
    setWeight(event.target.value);
  }

  function handleBurnedChange(event) {
    setBurned(event.target.value);
  }
  function calculate(event) {
    setClicked(true);
  }
  function clearAll(event) {
    setClicked(false);
    setWeight("");
    setBurned("");
    setDripSet("");
  }

// Katex formulas
  const totalFluidEquation = `\\text{Total Volume} = 4 \\text{ ml} \\cdot\\ ${weight} \\text{ kg} \\cdot\\ ${burned}\\ \\text{ percent burned} = ${totalVolume}\\ \\text{ ml}`;
  const renderTotalFluid = katex.renderToString(totalFluidEquation);

  const halfFluid = `\\text{Half of Total Volume } = ${totalVolume}ml / 2 = ${halfVolume}\\text{ ml}`
  const renderHalfFluid = katex.renderToString(halfFluid)

  const firstHalfDrip = `\\text{Drip rate for first 8 hours} = \\frac{${dripSet}gtts}{mL} * \\frac{${halfVolume}ml}{8hr} * \\frac{1hr}{60min} = ${eightHourRate}\\text{gtts/min} `
  const renderfirsthalf = katex.renderToString(firstHalfDrip)

  const secondHalfDrip = `\\text{Drip rate for last 16 hours} = \\frac{${dripSet}gtts}{mL} * \\frac{${halfVolume}ml}{16hr} * \\frac{1hr}{60min} = ${sixteenHourRate}\\text{gtts/min} `
  const renderSecondhalf = katex.renderToString(secondHalfDrip)

  return (
    <div className="h-screen bg-black text-white">
      <div className="h-fit bg-black">
        <div className={michroma.className}>
          <p className="text-center text-2xl pb-3">Parkland Burn Formula</p>
          <p>Description: </p>
          <p>
            Early and aggressive fluid resuscitation plays a fundamental role in
            the management of severe burn patients. The Parkland formula is the
            most widely used resuscitation protocol that aids in calculating
            initial fluid requirements for these patients. This equation takes
            in the patient's weight, burned surface area (BSA) and the drip set
            to calculate the volume and drip set settings needed to deliver the
            appropriate amount of fluid. For help determining burned area,
            please click{" "}
            <a
              href="https://www.health.state.mn.us/communities/ep/surge/burn/tbsa.html"
              target="_blank"
              className="text-blue-600"
            >
              here
            </a>
            .
          </p>
        </div>
        <div className="py-5">
          <label htmlFor="volume" className={michroma.className}>
            IV set (gtts/ml):
          </label>
          <input
            className="mx-1 text-black"
            type="number"
            id="dripSet"
            name="dripSet"
            value={dripSet}
            onChange={handleDripChange}
          />
        </div>
        <div className="py-5">
          <label htmlFor="volume" className={michroma.className}>
            Weight (kg):
          </label>
          <input
            className="mx-10 text-black"
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={handleWeightChange}
          />
        </div>
        <div className="py-5">
          <label htmlFor="volume" className={michroma.className}>
            TBSA Burned:
          </label>
          <input
            className="mx-3 text-black"
            type="number"
            id="burned"
            name="burned"
            value={burned}
            onChange={handleBurnedChange}
          />
        </div>
      
      <div>
        {burned && dripSet && weight && clicked == true ? (
          <div
            className="text-sm py-10"
            id="test"
            dangerouslySetInnerHTML={{ __html: renderTotalFluid }}
          ></div>
        ) : (
          ""
        )}
        {burned && dripSet && weight && clicked == true ? (
          <div
            className="text-sm py-10"
            id="test"
            dangerouslySetInnerHTML={{ __html: renderHalfFluid }}
          ></div>
        ) : (
          ""
        )}
        {burned && dripSet && weight && clicked == true ? (
          <div
            className="text-sm py-10"
            id="test"
            dangerouslySetInnerHTML={{ __html: renderfirsthalf }}
          ></div>
        ) : (
          ""
        )}
        {burned && dripSet && weight && clicked == true ? (
          <div
            className="text-sm py-10"
            id="test"
            dangerouslySetInnerHTML={{ __html: renderSecondhalf }}
          ></div>
        ) : (
          ""
        )}
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

export default Parkland;
