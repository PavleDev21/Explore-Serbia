import React from "react"
import CategoryBadge from "./CategoryBadge"

const DetailsCard = ({
  imgUrl,
  title,
  distance,
  badgeType,
  isInFloater,
  setSelectedMarker,
}) => {
  return (
    <div
      className={`cursor-pointer rounded-xl overflow-hidden bg-center bg-cover bg-no-repeat ${
        isInFloater
          ? "max-w-[270px] lg:max-w-[330px] lg:w-full lg:mx-auto"
          : "min-w-[330px]"
      }`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div
        className={`pb-2.5 ${
          isInFloater
            ? "detail-card-opacity-bg pt-[15px] px-5"
            : "detail-card-gradient pt-[30px] px-6"
        }`}
      >
        <h3
          className={`font-secondary ${
            isInFloater ? "text-[1.6rem]" : "text-[2rem]"
          } text-white tracking-wider font-bold`}
        >
          {title}
        </h3>
        <CategoryBadge isInFloater type={badgeType} />
        <div className="flex justify-between items-center gap-2.5">
          <p className={`text-white ${isInFloater ? "text-sm" : "text-base"}`}>
            {distance}km from you
          </p>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-white font-secondary text-lg italic"
          >
            Read more...
          </a>
        </div>
      </div>
      {!isInFloater && (
        <button
          className="absolute right-3 top-3 pointer"
          onClick={() => setSelectedMarker("")}
        >
          <img src="./img/close.png" className="w-5" alt="close dialog" />
        </button>
      )}
    </div>
  )
}

export default DetailsCard
