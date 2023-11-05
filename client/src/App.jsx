import { useState, useEffect, createContext } from "react"
import Map from "./components/Map"
import Header from "./components/Header"
import FloatingCard from "./components/FloatingCard"

export const PlacesContext = createContext()
export const FiltersContext = createContext()

function App() {
  const [places, setPlaces] = useState([])
  const [activeFilters, setActiveFilters] = useState([])

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
      <FiltersContext.Provider value={{ activeFilters, setActiveFilters }}>
        <div className="relative">
          <Header />
          <Map />
          <FloatingCard />
        </div>
      </FiltersContext.Provider>
    </PlacesContext.Provider>
  )
}

export default App
