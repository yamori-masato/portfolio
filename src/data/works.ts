// rhythmy
import rhythmy from 'assets/images/works/rhythmy/thumbnail.jpg'
import rhythmy_system_1 from 'assets/images/works/rhythmy/system_1.png'
import rhythmy_system_2 from 'assets/images/works/rhythmy/system_2.png'
// conne
import conne from 'assets/images/works/conne/thumbnail.jpg'
import conne_rules_1 from 'assets/images/works/conne/rules_1.png'
import conne_rules_2 from 'assets/images/works/conne/rules_2.png'
// tetris
import tetris from 'assets/images/works/tetris/thumbnail.png'
// enechalle
import enechalle from 'assets/images/works/enechalle/thumbnail.png'
import enechalle_concept_1 from 'assets/images/works/enechalle/concept_1.png'
import enechalle_system_1 from 'assets/images/works/enechalle/system_1.png'
import enechalle_system_2 from 'assets/images/works/enechalle/system_2.png'
// portfolio
import portfolio from 'assets/images/works/portfolio/thumbnail.png'
// helium
import helium from 'assets/images/works/helium/thumbnail.png'

const works: schema.Work[] = [
  {
    id: 1,
    thumbnail: {
      image: portfolio,
    },
    title: 'portfolio',
    genre: ['web'],
    role: ['solo'],
    skills: ['React'],
    period: '1month',
    urls: {
      repository: 'https://github.com/yamori-masato/portfolio',
    },
    keywords: ['TypeScript', 'p5.js', 'styled-components', 'Firebase'],
    content: [
      {
        head: 'outline',
        description: [
          `本サイトです。デザインからコーディングまで1人で行いました。`,
        ]
      },
      {
        head: 'concept',
        description: [
          `コンセプトは「作品の仕様と経緯をわかりやすく伝える」です。`,
          `その為、作品詳細ページの見やすさにはかなりこだわりました。
          作品それぞれのコンセプトはもちろん、採用した技術や仕組みまでしっかり伝えようと努めました。
          `,
          `技術的には「出来るだけUIは自力で実装する」という目標を掲げ制作に取り組みました。`,
        ]
      },
      {
        head: 'system',
        description: [
          `背景のアニメーションはp5.jsで書いています。
          インタラクティブなサイトにしたいという思いがあったので採用しました。
          リロードするたびにパターンが変わりクリックすると光ります。
          `,
        ]
      },
      {
        head: 'impression',
        description: [
          `Webサイトをレスポンシブ含めてしっかりコーディングするのは初めてだった為、デバイス・ブラウザ間の差異をなくすのにはかなり苦労しました。`,
          `iosで100vhが表示ずれしたり、matchMediaを使おうとしたらsafariで実装されていないからpolyfillを実装したり...`,
          `完成してから多くの人に試してもらう大切さを身をもって実感しました。`,
        ]
      },
    ]
  },
  {
    id: 2,
    thumbnail: {
      image: rhythmy,
      youtubeId: '3pl65K2d82w',
    },
    title: 'rhythmy',
    genre: ['installation'],
    role: ['solo'],
    skills: ['TypeScript'],
    period: '3months',
    urls: {
      repository: 'https://github.com/yamori-masato/rhythm',
    },
    keywords: ['p5.js', 'Tone.js', 'Socket.IO', 'Express.js', 'webpack', 'GitHub Actions'],
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
        images: [rhythmy_system_1, rhythmy_system_2],
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
    id: 3,
    thumbnail: {
      image: helium,
    },
    title: 'HELIUM',
    genre: ['web'],
    role: ['solo'],
    skills: ['React'],
    period: '1months',
    keywords: ['WebRTC', 'Tone.js', 'ReduxToolkit', 'Firebase', 'ChakraUI'],
    urls: {
      site: 'https://helium-chat.com'
    },
    content: [
      {
        head: 'outline',
        description: [
          `ボイスチェンジャー付きビデオ通話アプリです。
          今は音程を高くするエフェクトしかかけられませんが、声質や音程を自由に調整できるようにしたいと考えています。`,
          `より楽しめるビデオ通話アプリを目指し現在改良中です。`
        ]
      },
      {
        head: 'system',
        images: [

        ],
        description: [
          `シグナリングサーバーはFirebaseのrealtime databaseで、通信はP2Pフルメッシュで実装しました。`,
          `ボイスエフェクトはTone.jsのピッチシフターで実装しています。ストリームを送信する前に、音声トラックを加工済みの音声トラックと差し替えています。`
        ]
      },
      {
        head: 'impression',
        description: [
          `今回初めて、WebRTCの技術に触れてみました。`,
          `ブラウザのAPIとReactのコンポーネントツリーを繋ぐのが一番難しかったです。`,
          `最初は context & reducer でやっていましたがレンダリングの制御に苦戦... Reduxはステートの実態がコンポーネントツリーの外部にあるためロジックを外に切り出しやすいと考え採用し、上手くロジックの切り分けができました。`,
          `現時点ではP2P(フルメッシュ)での実装ですが、いずれSFUに移行したいと考えています。`,
        ]
      }
    ]
  },
  {
    id: 4,
    thumbnail: {
      image: enechalle,
    },
    title: '#エナドリチャレンジ応援わんこ',
    genre: ['web'],
    role: ['backend'],
    skills: ['Rails'],
    period: '3days',
    urls: {
      site: 'https://twitter.com/enechalleboy'
    },
    keywords: ['バッチ処理', 'Twitter Streaming API', 'TwitterBot', 'React', 'TypeScript', 'Firebase', 'Heroku'],
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
        images: [enechalle_concept_1],
        description: [
          `テーマは「Boost」でした。初日はmiroを使ってアイデア出しを行いました。`,
          `チームでの共通認識として`,
          `　- Boostする時はエナドリをキメる`,
          `　- エナドリツイートをしがち`,
          `という点があげられました。大学生がレポート締め切り前に徹夜で頑張るやつです。`,
          `そんな頑張り時に、自分と同じく頑張っている人を見かけるといつもより頑張れるという点から着想を得ました。`
        ]
      },
      {
        head: 'system',
        images: [enechalle_system_1, enechalle_system_2],
        description: [
          `私はTwitterBotとフロントエンド向けのAPIを担当しました。具体的には以下の通りです。`,
          `　① 特定の条件を満たすツイートを定期的に取得し、ツイート時とその6時間後にリプライを送る`,
          `　② 現在チャレンジ中の人数とツイートを返すAPI`,
        ]
      },
      {
        head: 'impression',
        description: [
          `TwitterAPIを利用するのは初めてだった為、APIの仕様や制限にかなり苦しめられました。
          バッチ処理でフェッチする間隔の調整だったりリトライ処理(TwitterAPIは指数関数的バックオフ)だったり初めて知ることが多くとても勉強になりました。
          `,
          `また、これまでバックエンドとフロントエンドの両方を学んできたことでチームに大きく貢献できたかと思います。
          cors関係のエラーや外部API使用時のエラーに素早く対応でき、これまでの成長を感じられました。
          `
        ]
      }
    ]
  },
  {
    id: 5,
    thumbnail: {
      image: conne,
      youtubeId: 'JVUP3XAy1iw',
    },
    title: 'Conne!',
    genre: ['web', 'game'],
    role: ['frontend', 'backend'],
    skills: ['React', 'Rails'],
    period: '2months',
    keywords: ['WebSocket', 'ActionCable', 'redis', 'ReactDnD', 'styled-components', 'Redux'],
    urls: {
      repository: 'https://github.com/yamori-masato/Conne',
      site: 'https://conne-game.herokuapp.com/'
    },
    content: [
      {
        head: 'outline',
        description: [
          `五目並べ風対戦ボードゲームです。五目並べとぷよぷよを掛け合わせた様なルールになっています。
          サイトにアクセスするとランダムにマッチングして対戦が始まります。`,
          `タブを2つ開いて是非遊んでみてください。`
        ]
      },
      {
        head: 'rules',
        images: [conne_rules_1, conne_rules_2],
        description: [
          `手前の3種類のコマが自分、奥側が相手のコマとなります。
          交互にひとつずつボードに設置していき特定の配置条件を満たした方が勝利となります。
          常に、次の相手のターンに配置されるコマの候補が見えています。勝利を狙うのも大事ですが相手に勝たせないように考えながら配置するのが鍵となります。
          `,
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
    id: 6,
    thumbnail: {
      image: tetris,
      youtubeId: 'Rmd2ofFcIuo',
    },
    title: 'Tetris',
    genre: ['game'],
    role: ['solo'],
    skills: ['Python', 'Illustrator'],
    period: '2months',
    keywords: ['pygame', 'Tkinter'],
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
]

export default works