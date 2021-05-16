import qiita from 'assets/images/logo/qiita.svg'
import twitter from 'assets/images/logo/twitter.svg'
import github from 'assets/images/logo/github.svg'
import zenn from 'assets/images/logo/zenn.svg'

export const snsData: schema.Sns[] = [
  {
    name: "github",
    link: "https://github.com/yamori-masato",
    svg: {
      url: github,
      style: {
        fill: "#fff",
        background: "#181717"
      }
    },
  },
  {
    name: "zenn",
    link: "https://zenn.dev/yamo",
    svg: {
      url: zenn,
      style: {
        fill: "#3EA8FF",
        background: "#323030",
        transform: "scale(0.75)"
      }
    },
  },
  {
    name: "qiita",
    link: "https://qiita.com/yamo",
    svg: {
      url: qiita,
      style: {
        fill: "#fff",
        background: "#55c500",
        transform: "scale(0.85)"
      }
    },
  },
  {
    name: "twitter",
    link: "https://twitter.com/tokage___sippo",
    svg: {
      url: twitter,
      style: {
        fill: "#fff",
        background: "#1DA1F2",
        transform: "scale(0.65)"
      }
    },
  },
]
