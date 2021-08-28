if (
  typeof matchMedia !== "undefined" &&
  !matchMedia("all").removeEventListener
) {
  console.log(
    "installing polyfill: MediaQueryList.prototype.removeEventListener"
  );

  const originalMatchMedia = matchMedia;
  window.self.matchMedia = function matchMedia(
    mediaQuery: string
  ): MediaQueryList {
    const mql = originalMatchMedia(mediaQuery);
    mql.removeEventListener = function (
      eventName: "change",
      listener: EventListenerOrEventListenerObject
    ) {
      // @ts-ignore
      this.removeListener(listener);
    };
    return mql;
  };
}

export {};
