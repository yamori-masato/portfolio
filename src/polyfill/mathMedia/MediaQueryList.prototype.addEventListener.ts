if (typeof matchMedia !== "undefined" && !matchMedia("all").addEventListener) {
  console.log('installing polyfill: MediaQueryList.prototype.addEventListener')

  const originalMatchMedia = matchMedia
  window.self.matchMedia = function matchMedia(mediaQuery: string): MediaQueryList {
    const mql = originalMatchMedia(mediaQuery)
    mql.addEventListener = function (eventName: "change", listener: EventListenerOrEventListenerObject) {
      // @ts-ignore
      this.addListener(listener)
    }
    return mql
  };
}