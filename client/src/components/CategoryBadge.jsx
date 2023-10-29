import React from "react"

const CategoryBadge = ({ isInFloater, type }) => {
  const [badgeColor, badgeIcon, badgeTitle] = (() => {
    switch (type) {
      case "museum": {
        return ["bg-badge-museum", "./img/museum.png", "Museums"]
      }
      case "monument": {
        return ["bg-badge-monument", "./img/monument.png", "Monuments"]
      }
      case "nature": {
        return ["bg-badge-nature", "./img/nature.png", "Nature"]
      }
      case "castle": {
        return ["bg-badge-castle", "./img/castle.png", "Castles"]
      }
      case "lake": {
        return ["bg-badge-lake", "./img/lake.png", "Lakes"]
      }
      case "cave": {
        return ["bg-badge-cave", "./img/cave.png", "Caves"]
      }
      case "waterfall": {
        return ["bg-badge-waterfall", "./img/waterfall.png", "Waterfalls"]
      }
      case "gem": {
        return ["bg-badge-gem", "./img/gem.png", "Hidden gems"]
      }
      default: {
        return
      }
    }
  })()

  return (
    <div className={`flex gap-1 items-center mb-1.5 ${!isInFloater && "mt-2"}`}>
      <div
        className={`${badgeColor} flex justify-center items-center rounded-full w-[35px] h-[35px] border-[1.5px] border-black-300`}
      >
        <img src={badgeIcon} alt="museum" className="w-[22px]" />
      </div>
      <p className="text-white text-sm tracking-wider font-semibold">
        {badgeTitle}
      </p>
    </div>
  )
}

export default CategoryBadge
