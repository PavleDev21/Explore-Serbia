import React from "react"

const Button = ({ children, className, variant, onClick }) => {
  return (
    <button
      className={`${className} cursor-pointer text-white bg-red-300 text-base font-medium p-3 rounded-lg`}
      style={{ zIndex: 10 }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
