import { useEffect, useRef } from "react"
import { register } from "swiper/element/bundle"

export function Swiper({ children, className, scrollbar, ...rest }) {
  const swiperRef = useRef(null)

  useEffect(() => {
    // Register Swiper web component
    register()

    // pass component props to parameters
    const params = {
      ...rest,
    }

    // Assign it to swiper element
    Object.assign(swiperRef.current, params)

    // initialize swiper
    swiperRef.current.initialize()
  }, [])

  return (
    <swiper-container
      class={className}
      scrollbar={scrollbar}
      init="false"
      ref={swiperRef}
    >
      {children}
    </swiper-container>
  )
}
export function SwiperSlide({ children, className, ...rest }) {
  return (
    <swiper-slide class={className} {...rest}>
      {children}
    </swiper-slide>
  )
}
