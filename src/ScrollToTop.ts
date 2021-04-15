import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    const element = document.getElementById('scroll-container')
    if (element) {
      const position = element?.scrollHeight
      element.scrollTop = 0
    }
  }, [pathname])

  return null
}

export default ScrollToTop
