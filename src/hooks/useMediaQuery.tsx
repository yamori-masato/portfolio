import { useState, useEffect } from 'react'
import { queryStrings } from 'constants/breakpoints'

export const useMediaQuery = () => {
  type TMediaQueryList = { [K in keyof typeof queryStrings]: MediaQueryList }
  const mediaQueryList = Object.fromEntries(
    Object.entries(queryStrings).map(([k, v]) => [
      k,
      window.matchMedia(v)
    ])
  ) as TMediaQueryList

  const [mq, setMq] = useState({
    isSp: mediaQueryList.sp.matches,
    isTab: mediaQueryList.tab.matches,
    isPc: mediaQueryList.pc.matches,
  })

  useEffect(() => {
    const keyMap = {
      sp: 'isSp',
      tab: 'isTab',
      pc: 'isPc'
    } as const

    const keys = Object.keys(mediaQueryList) as (keyof TMediaQueryList)[]
    const listeners = keys.reduce((prev, cur) => {
      const listener = (e: MediaQueryListEvent) => {
        if (e.matches) {
          setMq(s => {
            const reset = Object.fromEntries(Object.entries(s).map(([k, v])=>[k, false])) as typeof mq
            return { ...reset, [keyMap[cur]]: e.matches }
          })
        }
      }
      mediaQueryList[cur].addEventListener('change', listener) // TODO: map内で設定するのが汚い
      return { ...prev, [cur]: listener }
    }, {} as { [K in keyof TMediaQueryList]: (e: MediaQueryListEvent) => void })
    
    return () => {
      keys.forEach(key => {
        mediaQueryList[key].removeEventListener('change', listeners[key])
      })
    }
  }, [mediaQueryList])

  return mq  
}


export default useMediaQuery
