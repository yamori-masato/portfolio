import p5 from 'p5'

declare module 'p5' {
  interface p5InstanceExtensions {
    myCustomRedrawAccordingToNewPropsHandler: (props: any) => void
  }
}