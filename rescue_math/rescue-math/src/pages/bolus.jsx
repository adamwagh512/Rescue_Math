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

          </div>
        </div>
      </div>
    </div>
  );
};
export default bolus;
