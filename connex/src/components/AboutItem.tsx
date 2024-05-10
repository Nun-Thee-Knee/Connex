'use client'
import { AboutType } from 'utils/type'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutItem = ({title="null", text="null", color="null"}:AboutType) => {
    useEffect(()=>{
        gsap.fromTo(
            '#title',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, scrollTrigger: {
                trigger: '#title',
                start: 'top bottom-=100',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }}
        );
        gsap.fromTo(
            '#text',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, scrollTrigger: {
                trigger: '#text',
                start: 'top bottom-=100',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }}
        );
    },[])

    return (
        <>
            <h1 id="title" className={`mb-3 text-4xl font-bold opacity-0 ${color}`}>
                {title}
            </h1>
            <p id="text" className="text-blue-200 opacity-0">
                {text}
            </p>
        </>
    )
}

export default AboutItem
