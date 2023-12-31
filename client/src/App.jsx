import { useState, useEffect, createContext } from "react"
import Map from "./components/Map"
import Header from "./components/Header"
import FloatingCard from "./components/FloatingCard"
import Loader from "./components/Loader"

export const PlacesContext = createContext()
export const FiltersContext = createContext()

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [places, setPlaces] = useState([])
  const [selectedPlace, setSelectedPlace] = useState()
  const [activeFilters, setActiveFilters] = useState([])

  useEffect(() => {
    setIsLoaded(true)

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
    <>
      {isLoaded ? (
        <PlacesContext.Provider
          value={{ places, selectedPlace, setSelectedPlace }}
        >
          <FiltersContext.Provider value={{ activeFilters, setActiveFilters }}>
            <div className="relative">
              <Header />
              <Map />
              <FloatingCard />
            </div>
          </FiltersContext.Provider>
        </PlacesContext.Provider>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default App
