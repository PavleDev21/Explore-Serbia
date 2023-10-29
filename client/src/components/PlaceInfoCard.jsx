import React from "react"
import { Swiper, SwiperSlide } from "./Swiper"
import DetailsCard from "./DetailsCard"

const slidesData = [
  {
    imgUrl: "./img/nacionalni_muzej.webp",
    title: "Narodni muzej",
    distance: 20,
    badgeType: "museum",
  },
  {
    imgUrl: "./img/djavolja-varos.webp",
    title: "Djavolja varos",
    distance: 200,
    badgeType: "nature",
  },
  {
    imgUrl: "./img/jezero_perucac.webp",
    title: "Jezero Perućac",
    distance: 50,
    badgeType: "lake",
  },
  {
    imgUrl: "./img/djavolja-varos.webp",
    title: "Djavolja varos",
    distance: 200,
    badgeType: "nature",
  },
  {
    imgUrl: "./img/djavolja-varos.webp",
    title: "Djavolja varos",
    distance: 200,
    badgeType: "nature",
  },
  {
    imgUrl: "./img/djavolja-varos.webp",
    title: "Djavolja varos",
    distance: 200,
    badgeType: "nature",
  },
]

const PlaceInfoCard = () => {
  return (
    <div
      className="relative overflow-scroll max-h-full bg-beige-400 rounded-t-xl lg:rounded-3xl px-6 py-[15px] lg:p-10"
      style={{ zIndex: 10 }}
    >
      <h2 className="text-4xl font-bold font-secondary text-black-400 pb-12">
        Djavolja Varos
      </h2>
      <p className="text-2xl font-medium text-black-300 pb-3">About place</p>
      <p className="text-sm pb-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
        dolor, pariatur cupiditate maxime sed modi asperiores inventore sequi
        harum labore sint delectus dolore ullam temporibus odit impedit fugit
        voluptas nobis quia? Libero iste tempora sint porro. Illo blanditiis
        quasi quae.
      </p>
      <p className="text-2xl font-medium text-black-300 pb-3">Gallery</p>
      <Swiper
        className="pb-3"
        slidesPerView="auto"
        spaceBetween={20}
        direction="horizontal"
      >
        {slidesData.map((slide, idx) => (
          <SwiperSlide key={idx} className="w-auto">
            <button>
              <img
                src={slide.imgUrl}
                alt=""
                className="h-24 w-[150px] rounded-md object-cover"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="text-2xl font-medium text-black-300">Things to do</p>
      <p className="text-sm pb-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
        dolor, pariatur cupiditate maxime sed modi asperiores inventore sequi
        harum labore sint delectus dolore ullam temporibus odit impedit fugit
        voluptas nobis quia? Libero iste tempora sint porro. Illo blanditiis
        quasi quae.
      </p>
      {/* <p className="text-2xl font-medium text-black-300 pb-3">Places to stay</p> */}
    </div>
  )
}

export default PlaceInfoCard
