"use client"

import React, { useState } from 'react'
import { inter } from '@/app/layout'
import CoinPicker from '@/components/CoinPicker';
import { coins } from '@/utils/data';

const coin = {
  "uuid": "Qwsogvtv82FCd",
  "symbol": "BTC",
  "name": "Bitcoin",
  "description": "Bitcoin is the first decentralized digital currency.",
  "color": "#f7931A",
  "iconUrl": "https://cdn.coinranking.com/Sy33Krudb/btc.svg",
  "websiteUrl": "https://bitcoin.org",
  "links": [
    {
      "name": "Bitcoin",
      "url": "https://www.reddit.com/r/Bitcoin/",
      "type": "reddit"
    }
  ],
  "supply": {
    "confirmed": true,
    "circulating": "17009275",
    "total": "21000000"
  },
  "24hVolume": "6818750000",
  "marketCap": "159393904304",
  "price": "9370.9993109108",
  "btcPrice": "1",
  "change": "-0.52",
  "rank": 1,
  "numberOfMarkets": 9800,
  "numberOfExchanges": 190,
  "sparkline": [
    "9515.0454185372",
    "9540.1812284677",
    "9554.2212643043",
    "9593.571539283",
    "9592.8596962985",
    "9562.5310295967",
    "9556.7860427046",
    "9388.823394515",
    "9335.3004209165",
    "9329.4331700521",
    "9370.9993109108"
  ],
  "allTimeHigh": {
    "price": "19500.471361532",
    "timestamp": 1513555200
  },
  "coinrankingUrl": "https://coinranking.com/coin/Qwsogvtv82FCd+bitcoin-btc"
}

export default function Cryptocurrencies() {
  const [selectedCurrency, setSelectedCurrency] = useState('Qwsogvtv82FCd')

  return (
    <section className='cryptocurencies mt-14 py-8 px-4 lg:px-0 text-white'>
      <div className='container mx-auto'>
        <h2 className='text-3xl mb-6 text-center font-semibold text-white'>Pick your favorite <span className='text-amber'>currency</span></h2>
        <div className='flex justify-start flex-wrap md:justify-center gap-4 mb-8 text-neutral-200'>
          { coins.map(coin => (
            <button onClick={() => setSelectedCurrency(coin.id)} key={coin.name} className={`${selectedCurrency === coin.id && "bg-amber text-black font-medium"} px-3 py-2 rounded-full`}>{coin.name}</button>
          )) }
        </div>
        <CoinPicker selectedCurrency={selectedCurrency}/>
      </div>
    </section>
  )
}
