declare namespace schema {
  type Work = {
    id: number
    thumbnail: {
      image: string
      youtubeId?: string
    }
    title: string
    genre: import('./lib/types').Genre[]
    role: string[]
    skills: string[]
    period: string
    urls?: {
      site?: string
      repository?: string
    },
    keywords: string[]

    content?: import('./lib/types').Section[]
  }

  // TODO: styleにちゃんと型をつけたい
  type Sns = {
    name: string
    link: string
    svg: {
      url: string
      style?: {
        fill: string
        background: string
        transform?: string
      }
    },
  }
}