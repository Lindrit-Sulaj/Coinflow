import React from 'react'
export const articles = [
  {
    title: "Elon Musk Invests in New Cryptocurrency, 'MarsCoin'",
    likes: 138,
    publisher: "The Galactic Times",
    image: "",
  },
  {
    title: "Bitcoin to Reach $1 Million by 2025, Predicts Wall Street Analyst",
    likes: 482,
    publisher: "The Financial Observer",
    image: ""
  },
  {
    title: "EtherCoin Launches on Ethereum Network",
    likes: 92,
    publisher: "Crypto Daily",
    image: ""
  },
  {
    title: "China Bans All Cryptocurrencies Except Its Own Digital Yuan",
    likes: 576,
    publisher: "The Beijing Times",
    image: ""
  },
  {
    title: "Crypto Exchange Hacked, Millions Stolen in Bitcoin and Ethereum",
    likes: 291,
    publisher: "The Crypto Chronicle",
    image: ""
  }
]


export default function News() {
  return (
    <section className="news text-white py-10">
      <div className="max-w-screen-xl mx-auto px-12">
        <h2 className='text-3xl md:text-4xl font-semibold mb-4'>Latest <span className='text-neon-blue'>news</span></h2>

        <div className='grid grid-cols-3 grid-rows-6 h-[600px] gap-4'>
          <article className='bg-cover bg-no-repeat bg-center col-span-2 row-span-4 '>
            <h4>Elon Musk Invests in New Cryptocurrency, 'MarsCoin'</h4>
            <div>
              <p>The Galactic Times</p>
              <p><i className="fa-solid fa-thumbs-up"></i> 420</p>
            </div>
          </article>
          <article className='bg-cover bg-no-repeat bg-center row-span-3'>
            <h4>Bitcoin to Reach $1 Million by 2025, Predicts Wall Street Analyst</h4>
            <div>
              <p>Financial Observer</p>
              <p><i className="fa-solid fa-thumbs-up"></i> 4620</p>
            </div>
          </article>
          <article className='bg-cover bg-no-repeat bg-center col-start-3 row-start-4 row-span-3'>
            <h4>EtherCoin Launches on Ethereum Network</h4>
            <div>
              <p>Crypto Daily</p>
              <p><i className="fa-solid fa-thumbs-up"></i> 131</p>
            </div>
          </article>
          <article className='bg-cover bg-no-repeat bg-center row-span-2'>
            <h4>China Bans All Cryptocurrencies Except Its Own Digital Yuan</h4>
            <div>
              <p>The Beijing Times</p>
              <p><i className="fa-solid fa-thumbs-up"></i> 589</p>
            </div>
          </article>
          <article className='bg-cover bg-no-repeat bg-center row-span-2'>
            <h4>Crypto Exchange Hacked, Millions Stolen in Bitcoin and Ethereum</h4>
            <div>
              <p>The Crypto Chronicle</p>
              <p><i className="fa-solid fa-thumbs-up"></i> 68</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
