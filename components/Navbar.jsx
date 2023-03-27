"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '@/utils/useMediaQuery';

const variants = {
  open: {
    x: 0
  },
  close: {
    x: '-100vw'
  }
}

export default function Navbar() {
  const [navOpened, setNavOpened] = useState(false);

  const open = () => setNavOpened(true);
  const close = () => setNavOpened(false);

  const breakpoint = useMediaQuery();

  return (
    <nav className='fixed top-0 h-[75px] border-solid border-b-[1px] border-b-jet w-full bg-eerie-black'>
      <div className='container h-full mx-auto flex items-center justify-between text-white px-4 md:px-0'>
        <label className="logo text-xl lg:text-2xl font-semibold">
          coin
          <span className='text-blue-300'>flow</span>
        </label>
        <ul className='gap-6 hidden md:flex'>
          <li><a href="#" className='bg-jet px-4 py-[10px] rounded-full text-neutral-100'>Discover</a></li>
          <li><a href="#" className='text-neutral-300 hover:text-neutral-100'>Company</a></li>
          <li><a href="#" className='text-neutral-300 hover:text-neutral-100'>Learn</a></li>
          <li><a href="#" className='text-neutral-300 hover:text-neutral-100'>Support</a></li>
        </ul>
        <button className='hidden md:flex bg-cobalt-blue px-4 py-2 rounded-full font-medium items-center gap-2'>
          Launch app
          <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
        </button>

        <button className='text-2xl md:hidden' onClick={open}>
          <i className="fa-solid fa-bars"></i>
        </button>

        <motion.div
          initial={false}
          variants={variants}
          animate={navOpened ? "open" : "close"}
          transition={{ type: 'just', duration: .2 }}
          className='w-full h-screen bg-eerie-black absolute top-0 left-0 p-8 flex flex-col justify-between md:hidden'>
          <div className='flex justify-between'>
            <label className="logo text-2xl font-semibold">
              coin
              <span className='text-blue-300'>flow</span>
            </label>
            <button onClick={close} className="">
              <i className="fa-solid fa-xmark text-3xl"></i>
            </button>
          </div>
          <ul className='gap-12 flex flex-col'>
            <li><a href="#" className='bg-jet px-4 py-[10px] rounded-full text-neutral-100'>Discover</a></li>
            <li><a href="#" className='text-neutral-300 px-4 py-[10px]'>Company</a></li>
            <li><a href="#" className='text-neutral-300 px-4 py-[10px]'>Learn</a></li>
            <li><a href="#" className='text-neutral-300 px-4 py-[10px]'>Support</a></li>
          </ul>

          <button className='flex bg-cobalt-blue px-4 py-4 text-center text-[17px] text-black justify-center rounded-full font-medium items-center gap-4'>
            Launch app
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </motion.div>
      </div>
    </nav>
  )
}
