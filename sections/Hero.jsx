"use client"
import React from 'react'
import { inter } from '@/app/layout'
import useMediaQuery from '@/utils/useMediaQuery'

export default function Hero() {
  const breakpoint = useMediaQuery();

  return (
    <section className="hero">
      <div className='w-full h-full flex flex-col gap-4 items-center justify-center container mx-auto px-4'>
        <p className='font-medium text-neutral-300 text-sm md:text-base text-center uppercase'>
          { breakpoint !== "sm" ? "The new standard decentralized trading platform" : "Decentralized trading platform" }</p>
        <h1 className='text-[33px] md:text-6xl mx-auto text-white text-center font-semibold leading-10 md:leading-[70px]'>Trade decentralized <br /> between <span className='border-solid border-b-cobalt-blue border-b-4 '>blockchains</span></h1>
        <p className='max-w-screen-md mt-4 md:mt-6 text-center text-neutral-300'>Ready to take your financial journey to the moon? Join Coinflow - the ultimate destination for fast, secure, and profitable crypto trading!</p>
        <div className='flex flex-wrap gap-5 mt-4'>
          <button className='w-full md:w-auto text-white border-solid border-[1px] border-white rounded-full px-4 py-2 md:px-6 md:py-[10px] hover:bg-jet transition-all'>
            <i className="fa-solid fa-microchip mr-3"></i>
            Launch App
          </button>
          <button className='w-full md:w-auto bg-white px-4 py-2 text-black md:px-6 md:py-[10px] rounded-full font-medium'>
            <i className="fa-brands fa-discord mr-3"></i>
            Join Discord
            </button>
        </div>
      </div>
    </section>
  )
}
