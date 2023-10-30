import React, { useState, useEffect } from "react"
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api"
import serbiaGeoJSON from "../assets/serbia_smooth.json"
import DetailsCard from "./DetailsCard"

const libraries = ["places"]

const mapStyles = [
  {
    featureType: "all",
    stylers: [],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [{ visibility: "on" }, { color: "#FF0000" }],
  },
  {
    featureType: "administrative.locality", // city names
    elementType: "labels.text",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "poi.park", // parks
    elementType: "labels.text",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
]

const natureThemedMapStyles = [
  {
    elementType: "geometry",
    stylers: [
      { color: "#f2ebde" }, // Soft beige background
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      { visibility: "off" }, // Hide default icons for cleaner look
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      { color: "#616161" }, // Soft text labels
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      { color: "#f5f5e6" }, // Text background for better readability
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      { color: "#bdbdbd" }, // Muted land parcels
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      { color: "#eeeeee" }, // POIs a bit muted
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      { color: "#757575" }, // Muted POI text
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      { color: "#e5e5d0" }, // Soft green for parks
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      { color: "#9e9e9e" }, // Park labels
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { color: "#ffffff" }, // Basic road color
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      { color: "#757575" }, // Arterial road labels
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      { color: "#dadada" }, // Highways slightly standout
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      { color: "#616161" }, // Highway labels
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      { color: "#9e9e9e" }, // Local road labels
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      { color: "#e5e5e5" }, // Transit lines muted
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      { color: "#eeeeee" }, // Transit stations muted
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      { color: "#c9c9c9" }, // Muted water bodies
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      { color: "#9e9e9e" }, // Water labels
    ],
  },
]

const styles = [
  {
    featureType: "all",
    elementType: "geometry",
    stylers: [{ color: "#4a3827" }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#5a482f" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#aa7444" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#e6aa77" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#aa7444" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#2a2a2a" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "landscape",
    elementType: "labels.text.fill",
    stylers: [{ color: "#e6aa77" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [{ color: "#e6aa77" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#e6aa77" }],
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
]

const center = { lat: 44.9165, lng: 21.0059 }

function Map() {
  const [places, setPlaces] = useState([])
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

  useEffect(() => {
    fetch("http://localhost:8000/api/places")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((result) => {
        setPlaces(result)
      })
      .catch((error) => {
        console.error("Error fetching data:", error)
      })
  }, [])

  console.log(places)

  const handleMapLoad = (map) => {
    map.data.addGeoJson(serbiaGeoJSON)
    map.data.setStyle({
      fillColor: "transparent",
      strokeWeight: 3,
      strokeColor: "#000",
    })
  }

  const belgradePosition = { lat: 44.7866, lng: 20.4489 }

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
        styles: natureThemedMapStyles,
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
              key={place.id}
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
