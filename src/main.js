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
    const percentageX10 = scrollPercent * 10
    const headerContentY = -40 + percentageX10
    changeStylesFor(
      '.header-content',
      { transform: `translate(-40%, ${headerContentY > 90 ? 90 : headerContentY}%)` }
    )
    changeStylesFor('.title.about-me', {
      transform: `translateY(${percentageX10 > 100 ? 100 : percentageX10}px)`,
      color: percentageX10 > 49 ? '#565656' : '#fff',
      fontSize: `${26 + (scrollPercent) > 52 ? 52 : 26 + (scrollPercent)}px`,
    })
  }

  document.body.addEventListener('scroll', handleOnBodyScroll)

  const cachedElements = {}
  const setToCache = (data, key) => {
    return (cachedElements[key] = data)
  }
  const changeStylesFor = (query, changes) => {
    const el =
      cachedElements[query] || setToCache(document.querySelector(query), query)
    if (el) {
      const keys = Object.keys(changes)
      for(const key of keys){
        el.style[key] = changes[key]
      }
    }
  }

  handleOnBodyScroll()
}
