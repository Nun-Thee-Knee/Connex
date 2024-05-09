'use client'
import { useEffect } from "react"
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
    },[])
  return (
    <div>
      <h1 id="heading" className="opacity-0 mb-5 text-6xl font-bold lg:text-8xl text-purple-600">
           Connex
          </h1>
        <p id="description" className="text-white opacity-0">
        Ditch the resume shuffle! Our innovative platform streamlines the freelance experience for both clients and skilled professionals.  Clients can post projects with ease, detailing requirements and budget. Our AI analyzes freelancer profiles, matching your needs with the perfect candidate's skills and experience. Top-rated freelancers are instantly notified of relevant projects.  Browse detailed profiles, no endless applications required! Hire with confidence and get your dream project started today. This all-in-one platform simplifies the hiring process - find the perfect freelance fit and turn your vision into reality.
        </p>
        </div>
  )
}

export default Heading