// mock
import image1 from 'assets/images/mock/400x250.png'
import image2 from 'assets/images/mock/800x250.png'
import image3 from 'assets/images/mock/1100x550.png'
// logo
import tetris from 'assets/images/mock/tetris.png'
import rhythmy from 'assets/images/mock/rhythmy.jpg'
import linking from 'assets/images/mock/linking.jpg'
import ene from 'assets/images/mock/ene.png'
// 
import a from 'assets/images/works/rhythmy/system_1.png'
import b from 'assets/images/works/rhythmy/system_2.png'
import c from 'assets/images/works/enechalle/concept_1.png'
import d from 'assets/images/works/enechalle/system_1.png'
import e from 'assets/images/works/enechalle/system_2.png'


const works: schema.Work[] = [
  {
    id: 1,
    thumbnail: {
      image: rhythmy,
    },
    title: 'rhythmy',
    genre: ['installation'],
    role: ['solo'],
    skills: ['TypeScript'],
    period: '3months',
    urls: {
      repository: 'https://github.com/yamori-masato/rhythm',
    },
    content: [
      {
        head: 'outline',
        images: [],
        description: [
          `
          「混ざる/混ぜる」がテーマの実習制作で、誰でもスマホから気軽に参加できるを目標に制作したインスタレーション作品です。
          手持ちのスマホからそれぞれ割り振られたパートを操作するとメインモニターにリアルタイムに反映され、参加者全員での擬似演奏体験を楽しめる作品となっています。
          パートごとに違った音・アニメーションになっているので視覚的にも聴覚的にも楽しめます。
          `
        ],
      },
      {
        head: 'system',
        images: [a, b],
        description: [
          `Express.jsでふたつのエンドポイントを用意しました。`,
          `①「/monitor」... メインモニター`,
          `② 「/player」... 参加者はQRコードを読み込むことでスマホからアクセス`,
          `これらをWebSocket(Socket.io)で繋ぐことでリアルタイムでメインモニターに反映されるようになっています。`,
          `スマホ側で画面タッチ時にSocket.ioのイベントが走り、メインモニター側のデータを書き換える処理を行っています。`,
          `アニメーションはp5.jsで1からつくりました。`,
        ]
      },
      {
        head: 'impression',
        description: [
          `TypeScriptを使い始めてから初めての制作でした。`,
          `一番苦戦したのはフロントエンド↔︎バックエンド間のデータのやりとりにおける型の共有です。
          元々これがしたかった為バックエンドもTypeScriptで書きました。
          しかし、Socket.ioにおけるデータはデフォルトでany...
          どうしても諦められなかったのでSocket.ioの型定義を上書きしたりして頑張って自力で型をつけました。`,
          `クリエイティブ系の作品制作は初の試みだったのでビジュアル面においてもかなり苦戦しました。
          音とアニメーションの同期が上手くいかなかったりしましたが、色々なライブラリを試した結果上手くいったのでよかったです。`,
        ]
      }
    ]
  },
  {
    id: 2,
    thumbnail: {
      image: tetris,
      video: 'Rmd2ofFcIuo',
    },
    title: 'Tetris',
    genre: ['game'],
    role: ['solo'],
    skills: ['Python', 'Illustrator'],
    period: '1months',
    content: [
      {
        head: 'outline',
        images: [],
        description: [
          `プログラミングを始めてから初めて「作りきった」と思えた作品です。
          ゲームのロジック自体は簡単ですが、スコアの計算やランキング表示、キー押下時間によって挙動を調整したりかなり細部にまでこだわりました。
          `
        ]
      },
      {
        head: 'impression',
        description: [
          `プログラミングにハマるきっかけになった作品なので思い入れがあります。
          操作ひとつにおいても入力時間でスピードが変わったり、回転時に補正がなされていたりと、作る側になって初めて気づく工夫に感動しました。
          `
        ]
      }
    ]
  },
  {
    id: 3,
    thumbnail: {
      image: linking,
    },
    title: 'LinkingGame',
    genre: ['web', 'game'],
    role: ['frontend', 'backend'],
    skills: ['React', 'Rails'],
    period: '2months',
    content: [
      {
        head: 'outline',
        description: [
          `五目並べ風対戦ボードゲームです。五目並べとぷよぷよを掛け合わせた様なルールになっています。
          サイトにアクセスするとランダムにマッチングして対戦が始まります。
          `
        ]
      },
      {
        head: 'system',
        images: [],
        description: [
          `バックエンドでは、ランダムマッチはRedis、WebSocketはRailsのActionCableを使って実装しています。
          フロントエンドはReactで実装しています。フロントとバックそれぞれを独立させる構成をとりました。
          `
        ]
      },
      {
        head: 'impression',
        description: [
          `フロントエンドに興味を持って初めてReactを触った時の作品です。
          ゲームの進行状況はReduxで管理しました。ですが、状態遷移がそこまで複雑でなかった為、余計に複雑にしてしまうことになったのが反省点です。
          `,
          `これまでRubyでバックエンドを書くことがメインでしたが、今回フロントエンド↔︎バックエンドのやりとりを実装することで、より理解を深められたと思います。
          `,
        ]
      }
    ]
  },
  {
    id: 4,
    thumbnail: {
      image: ene,
    },
    title: '#エナドリチャレンジ応援わんこ',
    genre: ['web'],
    role: ['backend'],
    skills: ['Ruby on Rails'],
    period: '3days',
    content: [
      {
        head: 'outline',
        description: [
          `2021/03/12に行われた学生限定オンラインハッカソン「Boost」で最優秀賞を頂いた作品です。`,
          `限られた制作期間(3日間)の中で、初対面のチームメンバーと協力してアイデア出しから開発まで行いました。`,
        ]
      },
      {
        head: 'concept',
        images: [c],
        description: [
          `テーマは「Boost」でした。初日はアイデア出しをmiroを使って行いました。`,
          `チームでの共通点として`,
          `　- Boostする時はエナドリをキメる`,
          `　- エナドリツイートをしがち`,
          `という点があげられました。大学生がレポート締め切り前に徹夜で頑張るやつです。`,
          `そんな時に、自分と同じく頑張っている人を見かけるといつもより頑張れるという点から着想を得ました。`
        ]
      },
      {
        head: 'system',
        images: [d, e],
        description: [
          `私はTwitterBotとフロントエンド向けのAPIを担当しました。`,
          `　① 特定の条件を満たすツイートを定期的に取得し、ツイート時とその6時間後にリプライを送る`,
          `　② 現在チャレンジ中の人数とツイートを返すAPI`,
        ]
      },
    ]
  },
]

export default works