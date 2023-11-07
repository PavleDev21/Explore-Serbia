import React from "react"

const Loader = () => {
  return (
    <div className="z-[1000] fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full bg-beige-400">
      <div className="loadingio-spinner-magnify-7pcozq1gdpt">
        <div className="ldio-kt6l0q1qeb">
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <p className="loader-text pt-8 text-2xl font-medium">Exploring...</p>
    </div>
  )
}

export default Loader
