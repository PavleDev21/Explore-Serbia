import { useState, useEffect, createContext } from "react"
import Map from "./components/Map"
import Header from "./components/Header"
import FloatingCard from "./components/FloatingCard"

export const PlacesContext = createContext()

function App() {
  const [places, setPlaces] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/api/places")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok")
        }
        return res.json()
      })
      .then((result) => {
        setPlaces(result)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }, [])

  return (
    <PlacesContext.Provider value={places}>
      <div className="relative">
        <Header />
        <Map />
        <FloatingCard />
      </div>
    </PlacesContext.Provider>
  )
}

export default App
