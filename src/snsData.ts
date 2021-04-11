import qiita from 'assets/images/qiita.svg'
import twitter from 'assets/images/twitter.svg'
import github from 'assets/images/github.svg'
import zenn from 'assets/images/zenn.svg'

export const snsData = [
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
    link: "https://qiita.com/yamooo",
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
    link: "",
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
