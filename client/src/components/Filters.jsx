import React, { useState } from "react"
import CategoryBadge from "./CategoryBadge"

const categories = [
  "museum",
  "lake",
  "monument",
  "cave",
  "nature",
  "waterfall",
  "castle",
  "gem",
]

const Filters = ({ setActiveFilters }) => {
  return (
    <div className="flex py-4 gap-5 justify-between">
      <div className="flex flex-col w-1/2 gap-2">
        {categories.map((category, idx) => {
          if (idx % 2 == 0) {
            return (
              <div
                key={idx}
                className="rounded-xl px-4 py-1 bg-beige-400"
                onClick={() =>
                  setActiveFilters((prevFilters) => {
                    if (prevFilters.includes(category)) {
                      return prevFilters.filter((filter) => filter !== category)
                    } else {
                      return [...prevFilters, category]
                    }
                  })
                }
              >
                <CategoryBadge type={category} />
              </div>
            )
          } else return
        })}
      </div>
      <div className="flex flex-col w-1/2 gap-2">
        {categories.map((category, idx) => {
          if (idx % 2 == 1) {
            return (
              <div
                key={idx}
                className="rounded-xl px-4 py-1 bg-beige-400"
                onClick={() =>
                  setActiveFilters((prevFilters) => {
                    if (prevFilters.includes(category)) {
                      return prevFilters.filter((filter) => filter !== category)
                    } else {
                      return [...prevFilters, category]
                    }
                  })
                }
              >
                <CategoryBadge type={category} />
              </div>
            )
          } else return
        })}
      </div>
    </div>
  )
}

export default Filters
