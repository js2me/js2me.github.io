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
    changeStylesFor(
      'header',
      'transform',
      `scale(${1.3 -
        (scrollPercent / 100 > 0.31 ? 0.31 : scrollPercent / 100)})`
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

  changeStylesFor('body', 'overflow-y', 'overlay')
  handleOnBodyScroll()
}
