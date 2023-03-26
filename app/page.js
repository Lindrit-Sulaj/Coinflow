import { Hero, Trading, Account, Stats, Cryptocurrencies } from "@/sections"

export default function Home() {
  return (
    <main className="bg-eerie-black">
      <Hero />
      <Trading />
      <Account />
      <Stats />
      <Cryptocurrencies />
    </main>
  )
}
