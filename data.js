window.PORTFOLIO_WORKS = [
  {
    id: "realtime-chat",
    title: "リアルタイムチャットアプリケーション",
    category: "Webサービス試作",
    categoryLead: "画面と機能を作って試す",
    summary: "送信後にしか相手の反応が見えないチャットを、入力中の気配まで共有できる場にする実験でした。",
    tags: ["WebSocket", "Redis", "Node.js", "リアルタイム", "コミュニケーション"],
    featured: true
  },
  {
    id: "hotel-booking-site",
    title: "ホテル予約サイト風Webサイト",
    category: "Webサービス試作",
    categoryLead: "画面と機能を作って試す",
    summary: "予約サイトの画面を自分で組むことで、複数画面の導線や入力フォームを設計する難しさを確認しました。",
    tags: ["HTML", "フォーム", "画面設計", "予約"],
    featured: false
  },
  {
    id: "browser-text-editor",
    title: "Webブラウザで使えるテキストエディター",
    category: "Webサービス試作",
    categoryLead: "画面と機能を作って試す",
    summary: "どの環境でも同じように文章を書けるように、ブラウザ上で編集できる作業場所を試しました。",
    tags: ["ブラウザ", "エディター", "文章作成", "UI"],
    featured: false
  },
  {
    id: "aws-lp-tool",
    title: "AWSでLPサイト作成ツール",
    category: "Webサービス試作",
    categoryLead: "画面と機能を作って試す",
    summary: "LPを出すたびに環境を手作業で整える手間を減らし、公開までの流れを短くする試作でした。",
    tags: ["AWS", "S3", "CloudFront", "LP", "公開フロー"],
    featured: true
  },
  {
    id: "scraping-daemon",
    title: "スクレイピングのデーモン",
    category: "データ収集・自然言語処理",
    categoryLead: "情報を集め、解析する",
    summary: "毎回サイトを見に行く手間を減らし、変化する情報を自動で蓄積して後から探せるようにしました。",
    tags: ["スクレイピング", "MySQL", "デーモン", "自動収集", "データ蓄積"],
    featured: true
  },
  {
    id: "scraping-viewer",
    title: "スクレイピング結果表示Webサイト",
    category: "データ収集・自然言語処理",
    categoryLead: "情報を集め、解析する",
    summary: "集めた情報を保存するだけで終わらせず、キーワードから過去の記事を辿れるようにしました。",
    tags: ["スクレイピング", "検索", "キーワード", "Webサイト"],
    featured: false
  },
  {
    id: "wikipedia-tfidf-api",
    title: "WikipediaパースとTF-IDF API",
    category: "データ収集・自然言語処理",
    categoryLead: "情報を集め、解析する",
    summary: "長い記事の要点をすばやく掴むために、特徴語を取り出して内容の輪郭を見えるようにしました。",
    tags: ["Wikipedia", "TF-IDF", "API", "自然言語処理", "要約補助"],
    featured: true
  },
  {
    id: "twitter-bot",
    title: "Twitterボット",
    category: "ボット・通知・自動化",
    categoryLead: "定期処理と外部連携を試す",
    summary: "手動投稿を減らし、決まった内容を自動で発信する流れを試しました。API変更に追従する難しさも学びました。",
    tags: ["Bot", "API", "自動投稿", "PHP"],
    featured: false
  },
  {
    id: "line-bot",
    title: "LINEボット",
    category: "ボット・通知・自動化",
    categoryLead: "定期処理と外部連携を試す",
    summary: "必要な情報を自分から見に行くのではなく、生活の流れの中で受け取る通知を試しました。",
    tags: ["LINE", "Bot", "通知", "生活改善"],
    featured: false
  },
  {
    id: "slack-bot",
    title: "Slackボット",
    category: "ボット・通知・自動化",
    categoryLead: "定期処理と外部連携を試す",
    summary: "サービスの状態確認を人の記憶に頼らず、定期通知で気づけるようにする試作でした。",
    tags: ["Slack", "Bot", "監視", "通知"],
    featured: false
  },
  {
    id: "fcm-notification",
    title: "FCM通知",
    category: "ボット・通知・自動化",
    categoryLead: "定期処理と外部連携を試す",
    summary: "アプリを開いていない人にも必要なタイミングで情報を届けるため、プッシュ通知の流れを確認しました。",
    tags: ["FCM", "通知", "スマホアプリ", "Firebase"],
    featured: false
  },
  {
    id: "raspberry-pi-router",
    title: "Raspberry Piでデスクトップルーター",
    category: "インフラ・基盤",
    categoryLead: "動かす土台を作る",
    summary: "ネットワーク機器をブラックボックスにせず、自分で通信の流れを理解して制御するための検証でした。",
    tags: ["Raspberry Pi", "Network", "Linux", "自宅ネットワーク", "インフラ"],
    featured: true
  },
  {
    id: "wordpress-site",
    title: "WordPressサイト",
    category: "インフラ・基盤",
    categoryLead: "動かす土台を作る",
    summary: "すぐ公開できる仕組みの便利さと、長く運用するほど管理やカスタマイズが重くなる感覚を確認しました。",
    tags: ["WordPress", "CMS", "運用", "公開"],
    featured: false
  },
  {
    id: "cbox-dcp-xlogin",
    title: "シングルサインオン基盤の試作",
    category: "インフラ・基盤",
    categoryLead: "動かす土台を作る",
    summary: "複数サービスでログインやアカウント管理を毎回作り直さないため、共通認証の形を探った試作です。",
    tags: ["SSO", "認証", "アカウント管理", "共通基盤"],
    featured: false
  },
  {
    id: "npm-reverse-proxy",
    title: "NPMパッケージ",
    category: "インフラ・基盤",
    categoryLead: "動かす土台を作る",
    summary: "一度作った仕組みを別のプロジェクトでも使い回せるように、機能をパッケージとして切り出しました。",
    tags: ["npm", "パッケージ", "リバースプロキシ", "再利用"],
    featured: false
  },
  {
    id: "desktop-werewolf",
    title: "デスクトップ人狼アプリ",
    category: "アプリ・実験",
    categoryLead: "デバイスや表現を試す",
    summary: "ゲーム進行のルールや状態を画面上で扱うため、デスクトップアプリとして実装を試しました。",
    tags: ["Java", "Swing", "ゲーム", "デスクトップアプリ"],
    featured: false
  },
  {
    id: "android-werewolf",
    title: "Androidの人狼ゲームスマホアプリ",
    category: "アプリ・実験",
    categoryLead: "デバイスや表現を試す",
    summary: "スマホで遊べる形にしようとして、画面、状態管理、リリースまでの難しさを学んだ試作です。",
    tags: ["Android", "スマホアプリ", "ゲーム", "状態管理"],
    featured: false
  },
  {
    id: "nfc-tracker",
    title: "NFCパソリで筋体・睡眠トラッカー",
    category: "アプリ・実験",
    categoryLead: "デバイスや表現を試す",
    summary: "生活ログを手入力に頼らず記録するため、NFC読み取りを使ったトラッキングを試しました。",
    tags: ["NFC", "PaSoRi", "生活ログ", "トラッキング"],
    featured: false
  },
  {
    id: "processing-json-animation",
    title: "ProcessingでJSONアニメーション",
    category: "アプリ・実験",
    categoryLead: "デバイスや表現を試す",
    summary: "動画を手作業で編集する代わりに、構成データからアニメーションを生成する流れを試しました。",
    tags: ["Processing", "JSON", "アニメーション", "動画生成"],
    featured: false
  },
  {
    id: "voice-memo-workflow",
    title: "音声メモから成果物へ展開するワークフロー",
    category: "知識化",
    categoryLead: "考えを成果物に変える",
    summary: "頭の中に残りがちな考えを、後から使える資料、図、記事、スライドへ変換する流れを作っています。",
    tags: ["音声メモ", "Issue", "Draw.io", "Marp", "知識化"],
    featured: true
  },
  {
    id: "speech-to-text-k3s",
    title: "音声録音からIssueを作る文字起こしアプリ",
    category: "AI・音声・知識化",
    categoryLead: "声を記録し、考えを次の作業に変える",
    summary: "ブラウザで録音した音声を文字起こしし、要約やコメントを付けてGitLab Issueへ残すことで、思いつきを作業に変えやすくしました。",
    tags: ["音声認識", "OpenAI", "Realtime API", "GitLab", "Issue", "WebSocket", "PostgreSQL", "Node.js", "Express"],
    featured: false
  },
  {
    id: "hey-memo",
    title: "hey-memo",
    category: "AI・音声・知識化",
    categoryLead: "声を記録し、考えを次の作業に変える",
    summary: "音声入力を起点に、GitLab Issueの作成やコメント投稿を行い、必要に応じてAIの助言までIssueへ残せるようにしました。",
    tags: ["音声入力", "GitLab", "Issue", "Anthropic", "Claude", "Node.js", "Express"],
    featured: false
  },
  {
    id: "sentence-speaker",
    title: "文章読み上げアプリ",
    category: "AI・音声・知識化",
    categoryLead: "声を記録し、考えを次の作業に変える",
    summary: "GitLab Issueのコメントを文章セットとして管理し、ブラウザの音声合成で読み上げられるようにしました。",
    tags: ["読み上げ", "Web Speech API", "GitLab", "Issue", "Alpine.js", "Tailwind", "Node.js", "Express"],
    featured: false
  },
  {
    id: "codex-webhook-k3s",
    title: "Codex Webhook",
    category: "GitLab連携・開発運用",
    categoryLead: "GitLabの操作から作業を動かす",
    summary: "GitLabのWebhookを受け取り、Codex向けのパイプラインを起動することで、Issue操作からAI作業を始められるようにしました。",
    tags: ["GitLab", "Webhook", "Codex", "CI/CD", "Pipeline", "Node.js", "Express"],
    featured: false
  },
  {
    id: "gitlab-ai-webhook",
    title: "GitLab AI Webhook",
    category: "GitLab連携・開発運用",
    categoryLead: "GitLabの操作から作業を動かす",
    summary: "Issueやコメントに含まれるAI向けメンションを受け取り、決まったパイプラインへ渡す入口を作りました。",
    tags: ["GitLab", "Webhook", "AI Agent", "CI/CD", "Pipeline", "Node.js", "Express"],
    featured: false
  },
  {
    id: "issue-board",
    title: "Issue Board",
    category: "GitLab連携・開発運用",
    categoryLead: "GitLabの操作から作業を動かす",
    summary: "Issue、MR、コメント、ボード、テンプレートを一画面で扱い、レビューや作業整理をGitLab上で進めやすくしました。",
    tags: ["GitLab", "Issue", "Merge Request", "レビュー", "VoiceVox", "PostgreSQL", "Node.js", "Express"],
    featured: false
  },
  {
    id: "gitlab-scheduler",
    title: "GitLabスケジューラー",
    category: "GitLab連携・開発運用",
    categoryLead: "GitLabの操作から作業を動かす",
    summary: "予定した時刻にIssue作成やコメント投稿を実行し、定期的な振り返りや作業開始を自動化できるようにしました。",
    tags: ["GitLab", "Cron", "自動化", "通知", "node-cron", "Alpine.js", "Tailwind", "Node.js", "Express"],
    featured: false
  },
  {
    id: "pdf-storage",
    title: "PDF Storage",
    category: "文書・コンテンツ生成",
    categoryLead: "素材を保存し、読める形に変換する",
    summary: "PDFをアップロードし、OCR結果やAI処理結果と一緒に保存することで、紙やPDFの内容を後から探しやすくしました。",
    tags: ["PDF", "OCR", "Tesseract", "Poppler", "PostgreSQL", "OAuth", "Node.js", "Express"],
    featured: false
  },
  {
    id: "ocr-app",
    title: "OCRアプリ",
    category: "文書・コンテンツ生成",
    categoryLead: "素材を保存し、読める形に変換する",
    summary: "画像をアップロードして文字認識を行い、認識結果を確認・編集できるようにしました。",
    tags: ["OCR", "画像アップロード", "Tesseract", "PostgreSQL", "multer", "Node.js", "Express"],
    featured: false
  },
  {
    id: "pdf-maker",
    title: "PDF Maker",
    category: "文書・コンテンツ生成",
    categoryLead: "素材を保存し、読める形に変換する",
    summary: "GitLab上のMarkdownやMarp資料を選び、PDFやスライドプレビューとして出力できるようにしました。",
    tags: ["PDF生成", "Markdown", "Marp", "Puppeteer", "Chromium", "GitLab", "Node.js", "Express"],
    featured: false
  },
  {
    id: "video-maker",
    title: "Video Maker",
    category: "文書・コンテンツ生成",
    categoryLead: "素材を保存し、読める形に変換する",
    summary: "画像や設定をプロジェクト単位で管理し、動画ファイルとして生成できるようにしました。",
    tags: ["動画生成", "ffmpeg", "画像アップロード", "multer", "Node.js", "Express"],
    featured: false
  },
  {
    id: "youtube-news-broadcast",
    title: "YouTubeでニュース配信",
    category: "文書・コンテンツ生成",
    categoryLead: "素材を保存し、読める形に変換する",
    summary: "ニュースを調べ、要点を整理し、YouTubeで配信する流れを試しました。情報収集から構成作成、動画化までを発信の型として扱っています。",
    tags: ["YouTube", "ニュース", "動画配信", "情報収集", "構成作成", "発信"],
    featured: false
  },
  {
    id: "image-maker",
    title: "Image Maker",
    category: "文書・コンテンツ生成",
    categoryLead: "素材を保存し、読める形に変換する",
    summary: "テキストや設定を入力して画像を作るための、シンプルなWeb UIを試しました。",
    tags: ["画像生成", "Web UI", "HTML", "CSS", "JavaScript", "Node.js", "Express"],
    featured: false
  },
  {
    id: "routine-app",
    title: "ルーティン管理アプリ",
    category: "生活・行動管理",
    categoryLead: "行動を記録し、続けやすくする",
    summary: "ルーティンの作成、実行、履歴確認を行い、日々の行動をGitLab Issueコメントにも残せる形にしました。",
    tags: ["ルーティン", "習慣化", "GitLab", "Issue", "Alpine.js", "Tailwind", "Node.js", "Express"],
    featured: false
  }
];

window.PORTFOLIO_USE_CASES = [
  {
    scene: "思いつきや作業を残す",
    problem: "タスク、検討事項、結論、成果物が散らばると、後から理由や経緯を追いにくくなります。",
    input: "思いついたこと、相談したいこと、作業メモ",
    tool: "Issue Board / GitLab Issue",
    feature: "Issue作成、ラベル、コメント、ボード表示",
    action: "Issueを起点に、検討、結論、成果物、関連MRを同じ流れで残します。",
    value: "何をなぜ作ったかが残り、後から直すときや再利用するときの手戻りを減らせます。"
  },
  {
    scene: "AIに相談した内容を残す",
    problem: "外部チャットでAIに相談すると、質問と回答がタスクの文脈から離れてしまいます。",
    input: "Issueコメント、質問、補足したい背景",
    tool: "GitLab AI Webhook / Issue Board",
    feature: "AIメンション、Issueコメント連携",
    action: "Issue上でAIに質問し、回答も同じIssueのコメントとして残します。",
    value: "相談内容と判断材料がタスクに結びつき、後から同じ相談をやり直す負担を減らせます。"
  },
  {
    scene: "AIに実装を依頼する",
    problem: "AIの出力を手でコピーして反映すると、実装指示と変更結果が分断されます。",
    input: "MRコメント、実装したい内容、修正方針",
    tool: "Codex Webhook / GitLab Webhook",
    feature: "Webhook、Pipeline起動、MRコメント",
    action: "MR上の指示をきっかけにAIエージェントを動かし、実装、コミット、結果報告につなげます。",
    value: "指示、変更、レビューの流れが残り、AIに任せた作業も追跡しやすくなります。"
  },
  {
    scene: "変更を画面で確認する",
    problem: "MRの差分だけでは、画面や機能が意図どおり動くか判断しにくいことがあります。",
    input: "MR、ブランチ、確認したい変更",
    tool: "Issue Board / プレビュー環境",
    feature: "MR関連情報、プレビューURL表示",
    action: "MRごとの確認環境を見に行き、変更内容を実際の画面で確認します。",
    value: "mainに入れる前に動作を確認でき、並行開発中の確認ミスを減らせます。"
  },
  {
    scene: "声で考えを作業に変える",
    problem: "外出中や移動中に思いついたことは、あとで転記しようとして忘れがちです。",
    input: "音声メモ、録音、話した内容",
    tool: "speech-to-text / hey-memo",
    feature: "文字起こし、要約、Issue作成、コメント投稿",
    action: "話した内容を文字起こしし、要約や補足と一緒にIssueやコメントへ残します。",
    value: "頭の中の考えをすぐ作業材料に変えられ、メモの取りこぼしを減らせます。"
  },
  {
    scene: "紙やPDFを後から探せる形にする",
    problem: "PDFや画像の中身は、そのままだと検索や再利用がしにくくなります。",
    input: "PDF、画像、書類",
    tool: "PDF Storage / OCRアプリ",
    feature: "アップロード、OCR、AI処理結果の保存",
    action: "文書をアップロードし、文字認識結果やAI処理結果と一緒に保存します。",
    value: "紙やPDFの内容を後から探しやすくし、資料確認や再利用の負担を下げられます。"
  },
  {
    scene: "資料や動画にして発信する",
    problem: "考えや調査結果を発信するには、構成、資料化、動画化の手間がかかります。",
    input: "Markdown、Marp、画像、ニュースメモ、構成案",
    tool: "PDF Maker / Video Maker / YouTubeニュース配信",
    feature: "PDF生成、スライドプレビュー、動画生成、ニュース構成",
    action: "メモや資料をPDF、スライド、動画、ニュース配信の形に変換します。",
    value: "考えたことを内側に閉じず、見せられる成果物や発信に変えやすくなります。"
  },
  {
    scene: "定期作業を忘れず動かす",
    problem: "振り返り、通知、Issue作成のような定期作業は、人の記憶に頼ると抜けやすくなります。",
    input: "スケジュール、Cron式、投稿したいコメントやIssue内容",
    tool: "GitLabスケジューラー",
    feature: "スケジュール登録、手動実行、実行ログ",
    action: "決めた時刻にIssue作成やコメント投稿を実行し、結果を確認します。",
    value: "定期的な運用を仕組みに任せ、思い出す負担と作業漏れを減らせます。"
  },
  {
    scene: "習慣や読み上げを回す",
    problem: "行動や文章の確認は、続ける仕組みがないと途切れやすくなります。",
    input: "ルーティン、文章セット、読み上げたいメモ",
    tool: "ルーティン管理アプリ / 文章読み上げアプリ",
    feature: "ルーティン実行、履歴、文章セット管理、音声読み上げ",
    action: "行動の手順や読み上げたい文章を登録し、実行や確認を繰り返します。",
    value: "日々の行動や思考の確認を続けやすくし、仕組みとして改善できます。"
  }
];

window.PORTFOLIO_HOBBIES = [
  {
    title: "ウイスキー",
    summary: "香りや味の違いを楽しみながら、棚づくりまで含めて整えています。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: true
  },
  {
    title: "DIY",
    summary: "必要な棚や収納を、自分の手で少しずつ形にしています。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: true
  },
  {
    title: "ボードゲーム",
    summary: "ルールを読み、状況を見て、相手と考える時間が好きです。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: true
  },
  {
    title: "ピアノ",
    summary: "少しずつ弾ける曲を増やし、表現できる幅を広げています。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: true
  },
  {
    title: "バイク",
    summary: "近場のツーリング先を探しながら、気分転換の移動を楽しんでいます。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "サイクリング",
    summary: "自転車で外に出て、景色を変えながら気分を整えています。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "キャンプ",
    summary: "道具を揃え、行き先を探し、外で過ごす時間を作っています。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "ドライブ / 洗車",
    summary: "場所を変えて考えを整理し、車も整えて気分よく動けるようにしています。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "ハンバーガー",
    summary: "食べに行くことも、作ってみることも楽しみたいテーマです。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "水槽",
    summary: "水草や生体を育てながら、小さな環境を整えています。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "3D",
    summary: "古い機器や電子工作を、自分なりの筐体で形にしたいテーマです。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "電動スケートボード",
    summary: "モーターや部品を組み合わせ、動くものを作る試行錯誤です。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "電子工作 / IoT",
    summary: "小さなデバイスをつなぎ、暮らしの中で使える仕組みを考えています。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "Insta360",
    summary: "出かけた先や日常を記録し、後から見返せる形にしたいです。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "音楽制作",
    summary: "動画や発信に使える音を、自分でも作れるように試しています。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "音楽鑑賞",
    summary: "曲を聴きながら、気分を整えたり表現の引き出しを増やしたりしています。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "読書",
    summary: "考える材料を増やし、メモや発信につなげる時間です。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "旅行",
    summary: "行き先を調べ、準備し、移動そのものも楽しみたいテーマです。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "トランプ収集",
    summary: "集める楽しさや、ものの魅力を言葉にする練習にもなっています。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "レーザー彫刻",
    summary: "ウイスキーやコースターなど、ものづくりと趣味をつなぐ実験です。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "パラコード",
    summary: "編み方や使い道を試しながら、手で作る小物を楽しみたいテーマです。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "コーヒー",
    summary: "作業や確認のきっかけとして、日常のリズムに入れています。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "散歩",
    summary: "短く外に出て、気分を切り替える時間です。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "銀粘土",
    summary: "手で形を作り、身につけられるものに仕上げるものづくりです。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "海外ドラマ",
    summary: "物語や会話のテンポを楽しみながら、気分転換しています。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "バラエティ",
    summary: "気軽に笑えるものを見て、頭を切り替える時間です。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "海",
    summary: "海を見て、気分を切り替える時間です。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "麻雀",
    summary: "牌効率、読み、駆け引きを少しずつ覚えていきたいゲームです。",
    image: "/assets/hobby-placeholder.png",
    group: "hobby",
    featured: false
  },
  {
    title: "カセットプレイヤー修理",
    summary: "古いオーディオ機器を掃除し、直し、もう一度使えるようにしたいです。",
    image: "/assets/hobby-placeholder.png",
    group: "challenge",
    featured: false
  },
  {
    title: "動画撮影 / 編集",
    summary: "撮ったものを短くまとめ、伝わる形にすることを試したいです。",
    image: "/assets/hobby-placeholder.png",
    group: "challenge",
    featured: false
  },
  {
    title: "料理 / 低温調理",
    summary: "おいしく作ること、誰かに試してもらうことに関心があります。",
    image: "/assets/hobby-placeholder.png",
    group: "challenge",
    featured: false
  },
  {
    title: "猫カフェ",
    summary: "猫を眺めながら、ゆっくり過ごす時間を作ってみたいです。",
    image: "/assets/hobby-placeholder.png",
    group: "challenge",
    featured: false
  },
  {
    title: "ゴルフ",
    summary: "外に出るきっかけとして、少しずつ試したいテーマです。",
    image: "/assets/hobby-placeholder.png",
    group: "challenge",
    featured: false
  },
  {
    title: "ポーカー",
    summary: "確率、読み、駆け引きを楽しむゲームとして試してみたいです。",
    image: "/assets/hobby-placeholder.png",
    group: "challenge",
    featured: false
  },
  {
    title: "映画鑑賞",
    summary: "物語や映像表現を楽しみながら、感想を言葉にしてみたいです。",
    image: "/assets/hobby-placeholder.png",
    group: "challenge",
    featured: false
  },
  {
    title: "Podcast",
    summary: "話す練習や発信の場として、音声で考えをまとめてみたいです。",
    image: "/assets/hobby-placeholder.png",
    group: "challenge",
    featured: false
  },
  {
    title: "色塗り",
    summary: "色の組み合わせや塗り方を試しながら、手を動かす表現を増やしたいです。",
    image: "/assets/hobby-placeholder.png",
    group: "challenge",
    featured: false
  }
];
