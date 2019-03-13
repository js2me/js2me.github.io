document.body.onload = () => {
  const getScrollPercentage = () => {
    let { scrollHeight: height, scrollTop: scrollY } = document.body
    height -= window.innerHeight
    if (!scrollY) {
      return 0
    }
    return scrollY * 100 / height
  }

  const handleOnBodyScroll = () => {
    const scrollPercent = getScrollPercentage()
    const headerContentY = -40 + scrollPercent * 10
    changeStylesFor(
      '.header-content',
      'transform',
      `translate(-40%, ${headerContentY > 90 ? 90 : headerContentY}%)`
    )
  }

  document.body.addEventListener('scroll', handleOnBodyScroll)

  const cachedElements = {}
  const setToCache = (data, key) => {
    return (cachedElements[key] = data)
  }
  const changeStylesFor = (query, property, value) => {
    const el =
      cachedElements[query] || setToCache(document.querySelector(query), query)
    if (el) {
      el.style[property] = value
    }
  }

  handleOnBodyScroll()
}
