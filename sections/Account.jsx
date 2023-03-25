import React from 'react';
import AccountStep from '@/components/AccountStep';
import { accountSteps } from '@/utils/data';

export default function Account() {
  return (
    <section className="account bg-eerie-black text-white md:py-14 py-6 mt-10 px-4 lg:px-0">
      <div className="container mx-auto items-center flex gap-6 gap-y-14 flex-wrap md:flex-nowrap">
        <div className='w-full md:w-1/2'>
          <h2 className='text-3xl md:text-4xl font-semibold'>Build your crypto <span className='text-neon-blue'>portfolio</span></h2>
          <p className='text-neutral-300 mt-2'>Start your first trade with these easy steps</p>

          <div className='flex flex-col gap-y-14 mt-14'>
            {accountSteps.map(step => (
              <AccountStep key={step.title} {...step} />
            ))}
          </div>
          <button className='px-6 py-3 bg-amber text-black rounded-lg font-medium mt-8'>Create account</button>
        </div>
        <div className='w-full md:w-1/2 flex justify-center'>
          <img className='w-[80%] max-w-[320px] rounded-2xl' src="https://ik.imagekit.io/0s9lwb2yr/Coinflow/Images/binance_account_PuM15Pus2.jpg?updatedAt=1679742414023" alt="Binance portfolio" />
        </div>
      </div>
    </section>
  )
}
