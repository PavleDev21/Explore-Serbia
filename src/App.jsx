import { useState } from "react"
import Map from "./components/Map"
import Header from "./components/Header"
import DetailsCard from "./components/DetailsCard"
import FloatingCard from "./components/FloatingCard"

function App() {
  return (
    <div className="relative">
      <Header />
      <Map />
      <FloatingCard />
    </div>
  )
}

export default App
