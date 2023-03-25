import { Hero, Trading, Account, Stats } from "@/sections"

export default function Home() {
  return (
    <main className="bg-eerie-black">
      <Hero />
      <Trading />
      <Account />
      <Stats />
    </main>
  )
}
