import React, { useEffect, useState } from "react"
import Wrapper from "./Wrapper"

const Header = () => {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    showNav
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto")

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [showNav])

  return (
    <header className="w-full-20 lg:w-[56%] fixed z-[50] top-7 left-5 flex items-center justify-between rounded-xl bg-beige-500 py-2 px-6">
      <a href="">
        <img src="./img/serbian-flag.webp" className="w-14" alt="" />
      </a>
      <nav
        className={`${
          showNav ? "touch:flex" : "touch:hidden"
        } absolute touch:justify-center touch:items-center touch:bg-beige-300 touch:w-screen touch:h-screen touch:-top-7 touch:-left-5 lg:relative`}
      >
        <ul className="flex-col flex lg:flex-row justify-end items-center gap-7">
          <li>
            <a
              href=""
              className="flex font-bold text-xl lg:text-base tracking-wide text-black-400 py-2 px-2"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex font-bold text-xl lg:text-base tracking-wide text-black-400 py-2 px-2"
            >
              List View
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex font-bold text-xl lg:text-base tracking-wide text-black-400 py-2 px-2"
            >
              Grid View
            </a>
          </li>
          <li>
            <a
              href=""
              className="flex gap-2 tracking-wider bg-beige-500 lg:bg-beige-300 rounded-md items-center font-bold text-lg lg:text-sm text-black-400 py-3 px-3"
            >
              Support Us
              <img src="./img/like.png" className="w-5" alt="" />
            </a>
          </li>
        </ul>
        <button
          className="absolute top-[39px] right-11 flex justify-center items-center lg:hidden"
          onClick={() => setShowNav(false)}
        >
          <img src="./img/close.png" alt="nav close" className="w-[30px]" />
        </button>
      </nav>
      <button
        className="flex justify-center items-center lg:hidden"
        onClick={() => setShowNav(true)}
      >
        <img
          src="./img/hamburger.png"
          alt="nav hamburger"
          className="w-[30px]"
        />
      </button>
    </header>
  )
}

export default Header
