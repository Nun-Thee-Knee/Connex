'use client'
import React, { useEffect } from 'react';
import type { CardType } from 'utils/type';
import gsap from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, text, img }: CardType) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#attribute',
        start: 'top bottom-=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(
      '#attribute',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  return (
    <div
      id='attribute'
      className='opacity-0 bg-zinc-950 hover:scale-95 cursor-pointer w-80 h-auto rounded-xl border-[1px] border-zinc-900'
    >
      <Image
        src={`/${img}`}
        className='h-64 w-80'
        width={1000}
        height={1000}
        alt='limahe'
      />
      <center>
      <div className='p-5'>
        <h1 id='title' className='text-xl font-bold'>{title}</h1>
        <p>{text}</p>
      </div>
      </center>
    </div>
  );
};

export default Card;
