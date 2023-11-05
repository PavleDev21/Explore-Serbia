import React, { useContext, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "./Swiper"
import DetailsCard from "./DetailsCard"
import Button from "./Button"
import { AnimatePresence, motion } from "framer-motion"
import CategoryBadge from "./CategoryBadge"
import PlaceInfoCard from "./PlaceInfoCard"
import { PlacesContext } from "../App"

const getRandomElements = (arr, count) => {
  let shuffled = [...arr]
  let i = arr.length
  let min = i - count
  let temp, index

  // While there remain elements to shuffle…
  while (i-- > min) {
    // Pick a remaining element…
    index = Math.floor((i + 1) * Math.random())

    // And swap it with the current element.
    temp = shuffled[i]
    shuffled[i] = shuffled[index]
    shuffled[index] = temp
  }

  // Get the sub-array of the first `count` elements after shuffled.
  return shuffled.slice(min)
}

const FloatingCard = () => {
  const places = useContext(PlacesContext)
  const [slidesData, setSlidesData] = useState([])

  const getRandomPlaces = () => {
    if (places && places.length > 0) {
      setSlidesData(getRandomElements(places, 5))
    }
  }

  useEffect(() => {
    getRandomPlaces()
  }, [places])

  const [isTouch, setIsTouch] = useState(window.innerWidth < 1024)
  const [isClosed, setIsClosed] = useState(false)
  const [isFiltering, setIsFiltering] = useState(false)

  const variants = isTouch
    ? {
        mainContainer: {
          open: { bottom: 0 },
          closed: { bottom: "-150px" },
        },
        arrowIcon: {
          open: { rotate: 0 },
          closed: { rotate: "180deg" },
        },
        filtersContainer: {
          visible: {
            transform: "translate(50%, 0)",
          },
          hidden: {
            transform: "translate(50%, 100%)",
          },
        },
      }
    : {
        mainContainer: {
          open: { right: "1.25rem" },
          closed: { left: "calc(100% - 25px)" },
        },
        arrowIcon: {
          open: { rotate: 0 },
          closed: { rotate: "180deg" },
        },
        filtersContainer: {
          visible: { x: 0 },
          hidden: {
            x: "100%",
          },
        },
      }

  const swiperConfig = isTouch
    ? { slidesPerView: "auto", spaceBetween: 20, direction: "horizontal" }
    : {
        slidesPerView: "auto",
        spaceBetween: 20,
        direction: "vertical",
        className: "h-full",
        mousewheel: {
          forceToAxis: true,
        },
      }

  useEffect(() => {
    const handleResize = () => {
      setIsTouch(window.innerWidth < 1024)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <motion.div
      animate={isClosed ? "closed" : "open"}
      initial={false}
      variants={variants.mainContainer}
      className="fixed rounded-t-xl lg:rounded-3xl touch:bottom-0 right-0 lg:right-5 lg:top-7 touch:w-full lg:floater-desktop-height lg:max-h-[1000px] lg:max-w-[450px] lg:w-[40%]"
      style={{ zIndex: 10 }}
    >
      <div className="relative bg-beige-500 rounded-t-xl lg:rounded-3xl px-6 py-[15px] lg:p-10 overflow-hidden h-full lg:flex lg:flex-col">
        <h2
          style={{ zIndex: 1 }}
          className="relative font-secondary pb-3 lg:pb-6 text-2xl lg:text-4xl font-bold text-black-400 lg:h-[80px]"
        >
          Explore random places
        </h2>
        <div className="relative lg:pb-5 flex-grow overflow-hidden">
          <Swiper {...swiperConfig}>
            {slidesData?.map((slide, idx) => (
              <SwiperSlide
                key={idx}
                className={isTouch ? "w-auto" : "h-auto-i"}
              >
                <DetailsCard
                  isInFloater
                  imgUrl={slide.images[0]}
                  title={slide.name}
                  distance={slide.distance}
                  badgeType={slide.category}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button onClick={getRandomPlaces} className="touch:hidden self-center">
          Load more
        </Button>
      </div>
      {/* <PlaceInfoCard /> */}
      <button
        className="absolute top-2 right-6 lg:top-10 lg:right-full p-2 lg:rounded-l-xl lg:bg-beige-600 h-12 w-10"
        onClick={() => setIsClosed((p) => !p)}
        style={{ zIndex: 10 }}
      >
        <motion.img
          animate={isClosed ? "closed" : "open"}
          initial={false}
          variants={variants.arrowIcon}
          className=""
          src={isTouch ? "./img/down-arrow.png" : "./img/right-arrow.png"}
          alt=""
        />
      </button>
      <AnimatePresence initial={false} mode="popLayout">
        {isFiltering && (
          <motion.div
            animate={isFiltering ? "visible" : "hidden"}
            initial="hidden"
            exit="hidden"
            variants={variants.filtersContainer}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="absolute touch:w-100-20px touch:rounded-2xl lg:rounded-bl-2xl lg:min-w-[420px] bg-beige-500 right-1/2 touch:translate-x-[50%] touch:bottom-full-10px p-5 touch:pb-16 lg:top-28 lg:right-full"
            style={{ zIndex: -1 }}
          >
            <h3 className="text-black-500 text-2xl font-semibold">Category</h3>
            <div className="flex py-4 gap-5 justify-between">
              <div className="flex flex-col w-1/2 gap-2">
                <div className="rounded-xl px-4 py-1 bg-beige-400">
                  <CategoryBadge type="museum" />
                </div>
                <div className="rounded-xl px-4 py-1 bg-beige-400">
                  <CategoryBadge type="monument" />
                </div>
                <div className="rounded-xl px-4 py-1 bg-beige-400">
                  <CategoryBadge type="nature" />
                </div>
                <div className="rounded-xl px-4 py-1 bg-beige-400">
                  <CategoryBadge type="castle" />
                </div>
              </div>
              <div className="flex flex-col w-1/2 gap-2">
                <div className="rounded-xl px-4 py-1 bg-beige-400">
                  <CategoryBadge type="lake" />
                </div>
                <div className="rounded-xl px-4 py-1 bg-beige-400">
                  <CategoryBadge type="cave" />
                </div>
                <div className="rounded-xl px-4 py-1 bg-beige-400">
                  <CategoryBadge type="waterfall" />
                </div>
                <div className="rounded-xl px-4 py-1 bg-beige-400">
                  <CategoryBadge type="gem" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setIsFiltering((p) => !p)}
        layout
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className={`${
          isFiltering
            ? "bg-beige-400 lg:right-full-420px"
            : "bg-beige-500 lg:bg-beige-400 lg:right-full"
        } absolute flex items-center justify-center lg:items-end lg:w-10 lg:h-[130px] -top-16 lg:top-28 right-4 rounded-full lg:border-radius-left-10 p-3 lg:py-4 lg:px-1`}
      >
        <span className="touch:hidden tracking-widest absolute top-9 left-1/2 translate-x-rotate-m90 text-black-500 text-lg">
          Filters
        </span>
        <img src="./img/edit.png" className="w-7 lg:w-5" alt="filters" />
      </motion.button>
    </motion.div>
  )
}

export default FloatingCard
