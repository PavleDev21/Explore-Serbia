import React, { useContext } from "react"
import { PlacesContext } from "../App"
import { Swiper, SwiperSlide } from "./Swiper"

const PlaceInfoCard = ({ imgUrls, title, description, thingsTd }) => {
  const { setSelectedPlace } = useContext(PlacesContext)
  return (
    <div
      className="relative overflow-scroll h-[85vh] lg:max-h-full lg:floater-desktop-height bg-beige-500 rounded-t-xl lg:rounded-3xl px-6 py-[15px] lg:p-10"
      style={{ zIndex: 10 }}
    >
      <div className="overflow-hidden floater-shadow absolute z-[-1] top-0 left-0 w-full h-32 object-cover">
        <img
          src={imgUrls[0]}
          alt="djavolja varos"
          className="blur-[1px] w-full h-full object-cover"
        />
      </div>
      <h2 className="text-4xl font-bold font-secondary text-black-400 pb-12 pr-6">
        {title}
      </h2>
      <button
        className="absolute p-3 right-4 top-4 lg:top-10 pointer"
        onClick={() => {
          setSelectedPlace()
        }}
      >
        <img src="./img/close.png" className="w-5" alt="close dialog" />
      </button>
      <p className="text-2xl font-medium text-black-300 pb-3">About place</p>
      <p className="text-sm pb-3">{description}</p>
      <p className="text-2xl font-medium text-black-300 pb-3">Gallery</p>
      <Swiper
        className="pb-3"
        slidesPerView="auto"
        spaceBetween={20}
        direction="horizontal"
      >
        {imgUrls.map((img, idx) => (
          <SwiperSlide key={idx} className="w-auto">
            <button>
              <img
                src={img}
                alt=""
                className="h-24 w-[150px] rounded-md object-cover"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="text-2xl font-medium text-black-300">Things to do</p>
      <p className="text-sm pb-3">{thingsTd}</p>
      <p className="text-2xl font-medium text-black-300 pb-3">Places to stay</p>
      <p className="text-sm pb-3">TBD...</p>
    </div>
  )
}

export default PlaceInfoCard
