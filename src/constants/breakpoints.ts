export const breakpoints = {
  sp: {
    max: 560,
  },
  tab: {
    min: 561,
    max: 1024,
  },
  pc: {
    min: 1025,
  }
} as const

export const queryStrings = {
  sp: `screen and (max-width: ${breakpoints.sp.max}px)`,
  tab: `screen and (min-width: ${breakpoints.tab.min}px) and (max-width: ${breakpoints.tab.max}px)`,
  pc: `screen and (min-width: ${breakpoints.pc.min}px)`
} as const