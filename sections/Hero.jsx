import React from 'react'
import { inter } from '@/app/layout'

export default function Hero() {
  return (
    <section className="hero">
      <div className='w-full h-full flex flex-col gap-4 items-center justify-center container mx-auto px-4'>
        <p className='font-medium text-neutral-300 uppercase'>The new standard decentralized trading platform</p>
        <h1 className='text-6xl mx-auto text-white text-center font-semibold leading-[70px]'>Trade decentralized <br /> between <span className='border-solid border-b-cobalt-blue border-b-4 '>blockchains</span></h1>
        <p className='max-w-screen-md mt-6 text-center text-neutral-300'>Ready to take your financial journey to the moon? Join Coinflow - the ultimate destination for fast, secure, and profitable crypto trading!</p>
        <div className='flex gap-5 mt-4'>
          <button className='text-white border-solid border-[1px] border-white rounded-full px-6 py-[10px]'>
            <i className="fa-solid fa-microchip mr-3"></i>
            Launch App
          </button>
          <button className='bg-white text-black px-6 py-[10px] rounded-full font-medium'>
            <i className="fa-brands fa-discord mr-3"></i>
            Join Discord
            </button>
        </div>
      </div>
    </section>
  )
}
