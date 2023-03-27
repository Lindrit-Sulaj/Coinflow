"use client"
import React, { useEffect, useState } from 'react'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1d72593178msh246ea6fe23a59c0p1e310djsn052d76a19211',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

let formatter = new Intl.NumberFormat("en-US", {
  notation: "compact", // Use compact notation for short numbers
  maximumFractionDigits: 1 // Limit the number of fraction digits to 1
});

export default function CoinPicker({ selectedCurrency }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(`https://coinranking1.p.rapidapi.com/coin/${selectedCurrency}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`, options);

        if (!response.ok) throw Error("An error occurred");
        const data = await response.json();
        setData(data);
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

  }, [selectedCurrency]);

  const background = { background: data?.data?.coin?.color }
  const text = { color: data?.data?.coin?.color }

  return (
    <div className="w-full max-w-screen-lg mx-auto h-auto overflow-hidden rounded-2xl border-solid border-[1px] border-jet">
      <div className='bg-eerie-hover flex justify-between items-center px-6 py-4'>
        <h2 className='font-medium'>Coin picker</h2>
        <div className='flex gap-2'>
          <div style={background} className='w-4 h-4 rounded-full'></div>
          <div style={background} className='w-4 h-4 rounded-full'></div>
          <div style={background} className='w-4 h-4 rounded-full'></div>
        </div>
      </div>
      <div className='py-8 md:py-12 px-6 md:px-10 flex-wrap lg:flex-nowrap flex gap-10 items-center'>
        <div className='w-full lg:w-3/5'>
          <img className='w-14 h-14' src={data?.data?.coin?.iconUrl} alt="Icon image" />
          <h3 className='text-xl font-medium mt-3'>{data?.data?.coin?.name} <span className='text-neutral-400'>#{data?.data?.coin?.rank}</span></h3>
          <p className='mt-3 text-[rgb(200,200,200)] max-w-lg'>{data?.data?.coin?.description}</p>
        </div>
        <div className='w-full lg:w-2/5'>
          <p className=''>Price: <span className='text-xl font-medium ml-3'>${formatter.format(data?.data?.coin?.price)}</span> <span className={`${data?.data?.coin?.change[0] === "-" ? "text-red-400" : "text-green-400"}`}>{data?.data?.coin?.change[0] !== '-' && '+'}{data?.data?.coin?.change}</span></p>
          <p className='mt-3'>Market cap: <span className='text-xl font-medium ml-3'>${formatter.format(data?.data?.coin?.marketCap)}</span></p>
          <p className='mt-3'>ATH: <span className='text-xl font-medium ml-3'>${formatter.format(data?.data?.coin?.allTimeHigh?.price)}</span></p>
          <p className='mt-3'>24h volume: <span className='text-xl font-medium ml-3'>${formatter.format(data?.data?.coin?.["24hVolume"])}</span></p>
          <a className='block mt-4 underline underline-offset-4 text-neon-blue' href={data?.data?.coin?.links[0]?.url}>{data?.data?.coin?.links[0]?.name}</a>
        </div>

      </div>
    </div>
  )
}
