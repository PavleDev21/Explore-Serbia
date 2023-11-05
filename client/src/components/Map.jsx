import React, { useState, useEffect, useContext } from "react"
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api"
import mapStyles from "../assets/gmapStyling.json"
import serbiaGeoJSON from "../assets/serbia_smooth.json"
import DetailsCard from "./DetailsCard"
import { PlacesContext } from "../App"

const libraries = ["places"]

const center = { lat: 44.9165, lng: 21.0059 }

function Map() {
  const places = useContext(PlacesContext)

  const [showMarkers, setShowMarkers] = useState(false)
  const [selectedMarker, setSelectedMarker] = useState()

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  })

  useEffect(() => {
    if (isLoaded) {
      setShowMarkers(true)
    }
  }, [isLoaded])

  console.log(places)

  const handleMapLoad = (map) => {
    map.data.addGeoJson(serbiaGeoJSON)
    map.data.setStyle({
      fillColor: "transparent",
      strokeWeight: 3,
      strokeColor: "#000",
    })
  }

  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading Maps"

  return (
    <GoogleMap
      id="serbiaMap"
      mapContainerStyle={{
        width: "100vw",
        height: "100vh",
      }}
      onLoad={handleMapLoad}
      zoom={7}
      center={center}
      options={{
        styles: mapStyles,
        minZoom: 6,
        maxZoom: 10,
        restriction: {
          latLngBounds: {
            north: 46.5,
            south: 41.5,
            west: 18.5,
            east: 23.5,
          },
          strictBounds: true,
        },
        fullscreenControl: false, // Disabling fullscreen control
        streetViewControl: false, // Disabling street view control
        mapTypeControl: false, // Disabling map type control
        zoomControl: false, // Removing zoom buttons
        gestureHandling: "greedy", // Enable one finger movement
      }}
    >
      {showMarkers &&
        places.map((place) => {
          return (
            <Marker
              key={place._id}
              position={{ lat: place.location.lat, lng: place.location.lng }}
              onClick={() => setSelectedMarker(place)}
            />
          )
        })}
      {selectedMarker && (
        <InfoWindow
          position={{
            lat: selectedMarker.location.lat,
            lng: selectedMarker.location.lng,
          }}
        >
          <DetailsCard
            imgUrl={selectedMarker.images[0]}
            title={selectedMarker.name}
            distance={20}
            badgeType={selectedMarker.category}
            setSelectedMarker={setSelectedMarker}
          />
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

export default Map
