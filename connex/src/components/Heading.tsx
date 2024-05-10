'use client'
import { useEffect } from "react";
import gsap from "gsap"

const Heading = () => {
    useEffect(()=>{
        gsap.fromTo(
            '#heading',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, onComplete: () => {
                gsap.to('#heading', { opacity: 1, duration: 1 }); // Set opacity to 1 after animation
            }}
          );
        gsap.fromTo(
            '#description',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, onComplete: () => {
                gsap.to('#description', { opacity: 1, duration: 1 }); // Set opacity to 1 after animation
            }}
          );
        gsap.fromTo(
            '#startButton',
            { opacity: 0, y: 0 },
            { opacity: 1, y: 0, duration: 1, onComplete: () => {
                gsap.to('#description', { opacity: 1, duration: 1 }); // Set opacity to 1 after animation
            }}
          );
    },[])
  return (
    <>
      <h1 id="heading" className="opacity-0 text-5xl font-bold">
        <span className="text-lime-500">From</span>{" "}
        <span className="text-pink-500">Ideas</span>{" "}
        <span className="text-blue-500">To</span>{" "}
        <span className="text-purple-500">Icons:</span>{" "}
        <span className="text-blue-200">
          We Forge the Perfect Client-Freelancer Bond.
        </span>
      </h1>
      <p id="heading" className="opacity-0 mt-5 text-2xl font-bold">
        Streamlining connections between clients and freelancers. Post jobs,
        receive applications, and find the perfect match with resume analysis.
        Effortless talent sourcing for your projects.
      </p>
      <button id="startButton" className="opacity-0 mt-10 rounded-xl bg-gradient-to-r from-lime-500 to-pink-500 p-3 px-20 font-bold hover:scale-95">
        Sign Up For free
      </button>
    </>
  );
};

export default Heading;
