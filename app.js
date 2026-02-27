// ==========================================
// ▼▼▼ 運用担当者向け ガイド ▼▼▼
// ==========================================
// 【このファイルの構成】
//   1. データ定義    ← ★問題の追加・編集はここ！
//   2. ゲーム状態管理 ← HPなどのゲームバランス設定もここ
//   3. 画面・演出制御 ← 基本的に触らない
//
// 【問題を追加・編集する手順】
//   ① 下の STAGE_DATA の中から編集したい教科を探す
//   ② questions の配列に { question, choices, answer, exp } を追加
//   ③ 画像が必要な問題は fileName も追加（例: "science/q21.jpg"）
//   ④ 保存してブラウザを再読み込みで確認
//
// 【問題オブジェクトの書き方】
//   {
//     question: "問題文",                        ← 画面に表示される問題
//     choices: ["選択肢A", "選択肢B", "選択肢C", "選択肢D"],  ← 4択の選択肢
//     answer:  "選択肢A",                        ← 正解（choicesの中から完全一致で指定）
//     exp:     "解説文",                         ← 正解・不正解後に表示される説明
//     fileName: "science/q21.jpg",              ← 画像問題の場合のみ。不要なら省略
//   }
//
// 【注意】
//   - answer は choices の文字列と完全一致していないと正誤判定が機能しません
//   - fileName がある問題はクイズウィンドウに画像が表示されます
//     （画像は img/ フォルダ以下に置き、fileName に "教科名/ファイル名" を指定）
//   - 国語の問題は「〇〇」（鍵かっこ）で囲んだ文字がクイズウィンドウに大きく表示されます
// ==========================================

// ==========================================
// 1. データ定義
// ==========================================

// ▼ STAGE_DATA：教科ごとの問題・画像・キャラクターをまとめたデータ
// ▼ 各教科のキーは 'japanese' / 'science' / 'math' / 'social' / 'apply'
const STAGE_DATA = {

  // ----------------------------------------------------------
  // ■ 国語ステージ
  // ----------------------------------------------------------
  japanese: {
    title: "国語",                             // ← 教科名（画面上部に表示）
    mainImage: 'img/topics/japanese_default.png', // ← 問題画像がない場合に表示するデフォルト画像
    questions: [
      // ▼ 問題リスト。1つの {} が1問。順番を入れ替えてもOK（起動時にシャッフルされます）
      {
        question: "「絶好」の読み方は？",
        choices: ["ぜっか", "ぜっこう", "てっこう", "ぜんこう"],
        answer: "ぜっこう",
        exp: "「絶」は「絶対」のぜつ、「好」は「好き」のこう。「絶好調」「絶好のチャンス」のように使うよ。"
      },
      {
        question: "「供給」の読み方は？",
        choices: ["こうきゅう", "くきゅう", "きょうこう", "きょうきゅう"],
        answer: "きょうきゅう",
        exp: "「供」はきょう、「給」はきゅう。必要なものを届けることで、「需要と供給」のように使われるよ。"
      },
      {
        question: "「険しい」の読み方は？",
        choices: ["けわしい", "きびしい", "はげしい", "まぶしい"],
        answer: "けわしい",
        exp: "「険しい山道」「険しい表情」のように、急で危ないさまや、厳しい様子を表すよ。「険」という字は「険しい」と読むんだね。"
      },
      {
        question: "「暴風」の読み方は？",
        choices: ["ぼうふう", "あらし", "ばくふう", "あばれかぜ"],
        answer: "ぼうふう",
        exp: "「暴」はぼう、「風」はふう。激しく荒れた風のこと。「暴風雨（ぼうふうう）」という言葉もあるよ。"
      },
      {
        question: "「伝統」の読み方は？",
        choices: ["てんとう", "でんどう", "でんとう", "つたとう"],
        answer: "でんとう",
        exp: "「伝」はでん、「統」はとう。昔から受け継がれてきたものやしきたりのことで、「伝統文化」などと使うよ。"
      },
      {
        question: "「謝罪」の読み方は？",
        choices: ["しゃさい", "しゃざい", "あやざい", "しざい"],
        answer: "しゃざい",
        exp: "「謝」はしゃ、「罪」はざい（濁る）。「謝」はあやまる意味で、「罪」と合わさって「あやまること」を表すよ。"
      },
      {
        question: "「適当」の類義語は？",
        choices: ["ふさわしい", "いいかげん", "でたらめ", "不向き"],
        answer: "ふさわしい",
        exp: "「適当」はもともと「ちょうどよく合っている」という意味。だから「ふさわしい」が近い意味だよ。日常では「いいかげん」の意味でも使われるけど、類義語としては「ふさわしい」が正解！"
      },
      {
        question: "「承知」の類義語は？",
        choices: ["納得", "拒否", "疑問", "無視"],
        answer: "納得",
        exp: "「承知」は「わかりました、引き受けます」という意味。「納得」も理解して受け入れることなので、意味が近いよ。"
      },
      {
        question: "「短所」の類義語は？",
        choices: ["欠点", "長所", "特徴", "個性"],
        answer: "欠点",
        exp: "「短所」はその人の弱いところ・苦手なところのこと。「欠点」も足りない・劣っている部分のことだから同じ意味だね。"
      },
      {
        question: "「用意」の類義語は？",
        choices: ["準備", "片付け", "決心", "工夫"],
        answer: "準備",
        exp: "「用意」は何かをするために整えておくこと。「準備」も同じ意味で、どちらも「前もとのえておく」ことを指すよ。"
      },
      {
        question: "「期待」の類義語は？",
        choices: ["あきらめ", "希望", "信頼", "覚悟"],
        answer: "希望",
        exp: "「期待」はいいことが起こることを願い待つ気持ち。「希望」も望み願う気持ちなので、意味が近いよ。「信頼」は少しニュアンスが違うから注意しよう。"
      },
      {
        question: "「拡大」の対義語は？",
        choices: ["縮小", "減少", "短縮", "狭小"],
        answer: "縮小",
        exp: "「拡大」は広げること。「縮小」は小さく縮めることで、ちょうど反対の意味になるよ。「減少」は数が減ること、「短縮」は長さや時間を短くすること、と少し意味が違うんだ。"
      },
      {
        question: "「豊富」の対義語は？",
        choices: ["乏しい", "質素", "少量", "貧乏"],
        answer: "乏しい",
        exp: "「豊富」はたくさんあること。「乏しい」は少なくて足りないさまを指すよ。「質素」はシンプルで地味なこと、「貧乏」はお金がないことで、対義語には「乏しい」が最も近いね。"
      },
      {
        question: "「容易」の対義語は？",
        choices: ["困難", "複雑", "危険", "面倒"],
        answer: "困難",
        exp: "「容易（ようい）」はたやすい・簡単なこと。「困難」は難しくて苦労することなので、ちょうど反対の意味になるよ。"
      },
      {
        question: "「成功」の対義語は？",
        choices: ["失敗", "敗北", "失格", "不運"],
        answer: "失敗",
        exp: "「成功」はうまくいくこと。「失敗」はうまくいかないことなので、まさに反対の意味だね。「敗北」は戦いで負けること、「失格」は資格を失うことで、少しニュアンスが違うよ。"
      },
      {
        question: "「一生懸命」と同じ意味は？",
        choices: ["一所懸命", "一意専心", "猪突猛進", "一心不乱"],
        answer: "一所懸命",
        exp: "「一生懸命」のもとになった言葉が「一所懸命（いっしょけんめい）」。武士が自分の領地（一か所）を命がけで守ったことから生まれた言葉なんだよ。"
      },
      {
        question: "「絶体絶命」とは？",
        choices: ["追い詰められた状態", "命を救われた状態", "運命が決まる時", "健康で元気なこと"],
        answer: "追い詰められた状態",
        exp: "「絶体絶命（ぜったいぜつめい）」は、逃げ場がなく身も命も極限まで追い詰められた状態のことだよ。ピンチの場面でよく使われる四字熟語だね。"
      },
      {
        question: "「以心伝心」とは？",
        choices: ["心と心で通じ合う", "手紙で伝える", "人の意見に従う", "一生懸命に祈る"],
        answer: "心と心で通じ合う",
        exp: "「以心伝心（いしんでんしん）」は、言葉を使わなくても気持ちや考えが伝わること。もともとは禅の言葉で、「心をもって心に伝える」という意味だよ。"
      },
      {
        question: "「自業自得」とは？",
        choices: ["自分の行いが戻る", "自分で仕事を始める", "自分をほめること", "自由を手に入れる"],
        answer: "自分の行いが戻る",
        exp: "「自業自得（じごうじとく）」は、自分がした行いの結果が自分に返ってくること。悪いことをすれば悪い結果が返ってくる、という意味で使われることが多いよ。"
      },
      {
        question: "「五里霧中」とは？",
        choices: ["判断がつかない", "とても幸せな状態", "深い霧の中にいる", "迷路から出ること"],
        answer: "判断がつかない",
        exp: "「五里霧中（ごりむちゅう）」は、どうすればいいか方針が立たず、迷って困っている状態のこと。五里も続く霧の中で方向が分からない様子から来ているよ。"
      }
    ],

    // ▼ assets：このステージで使うキャラクター画像のパス設定
    // ▼ 画像を差し替える場合はパスを変更してください（ファイル名も合わせること）
    assets: {
      monster: {
        normal: 'img/monster/japanese_idle.png',      // 通常時
        damage: 'img/monster/japanese_lose01.png',    // ダメージを受けた時
        dead: 'img/monster/japanese_lose02.png',    // やられた時
        win: 'img/monster/japanese__win.png',      // プレイヤーが負けた時
      },
      player: {
        normal: 'img/character/shunsuke_idle01.png',  // 通常時
        damage: 'img/character/shunsuke_lose01.png',  // ダメージを受けた時
        dead: 'img/character/shunsuke_lose02.png',  // やられた時
        win: 'img/character/shunsuke_win01.png'    // 勝利時
      },
    }
  },

  // ----------------------------------------------------------
  // ■ 理科ステージ
  //   ※ 理科の問題は全て fileName（画像）付きです
  // ----------------------------------------------------------
  science: {
    title: "理科",                               // ← 教科名
    mainImage: 'img/science/science_default.png', // ← 画像なし問題のデフォルト画像
    questions: [
      // ▼ 問題リスト（理科は全問 fileName 付き＝画像問題）
      {
        question: "種子が発芽するために必要な「3つの条件」は？",
        choices: ["水・空気・適当な温度", "水・日光・土", "肥料・空気・日光", "水・土・空気"],
        answer: "水・空気・適当な温度",
        exp: "日光や肥料は成長には必要だけど、最初の「発芽」には必要ないんだよ。",
        fileName: "science/q01.jpg"
      },
      {
        question: "インゲンマメの種子の「子葉」には、何が養分としてたくわえられている？",
        choices: ["砂糖", "でんぷん", "たんぱく質", "脂肪"],
        answer: "でんぷん",
        exp: "ヨウ素液をかけると青むらさき色に変わる「でんぷん」がエネルギー源だよ。",
        fileName: "science/q02.jpg"
      },
      {
        question: "メダカのオスとメスの見分け方で、しりびれが「平行四辺形」で大きいのは？",
        choices: ["オス", "メス", "どちらも同じ", "生まれたばかりの時だけ"],
        answer: "オス",
        exp: "オスはメスをしっかりつかまえるために、しりびれが大きく発達しているんだ。",
        fileName: "science/q03.jpg"
      },
      {
        question: "メダカのたまごが生まれてから、ふ化するまでに必要な日数は？（水温25度の場合）",
        choices: ["約3日", "約10日", "約30日", "約60日"],
        answer: "約10日",
        exp: "水温25度なら約10日。合計の水温が250度くらいになると生まれると言われているよ。",
        fileName: "science/q04.jpg"
      },
      {
        question: "雲の量が全体の「90%以上」のとき、天気は何になる？",
        choices: ["快晴", "晴れ", "くもり", "雨"],
        answer: "くもり",
        exp: "雲の量が0〜1なら快晴、2〜8なら晴れ、9以上なら「くもり」と決まっているよ。",
        fileName: "science/q05.jpg"
      },
      {
        question: "台風の風は、中心に向かってどのようにふきこんでいる？",
        choices: ["時計回りにふきこむ", "反時計回りにふきこむ", "中心から外にふき出す", "まっすぐ中心へ向かう"],
        answer: "反時計回りにふきこむ",
        exp: "日本の周りでは、台風の風は左回り（反時計回り）のうずを巻いてふきこむよ。",
        fileName: "science/q06.jpg"
      },
      {
        question: "流れる水の3つの働きは「しん食」「運ぱん」と、あと一つは何？",
        choices: ["たい積（つもる）", "蒸発（消える）", "しん透（しみこむ）", "噴火（ふき出す）"],
        answer: "たい積（つもる）",
        exp: "けずる（しん食）、運ぶ（運ぱん）、つもらせる（たい積）の3つがセットだよ。",
        fileName: "science/q07.jpg"
      },
      {
        question: "川が曲がっているところでは、どちら側が大きくけずられる？",
        choices: ["曲がりの内側", "曲がりの外側", "どちらも同じ", "水が深い方"],
        answer: "曲がりの外側",
        exp: "外側の方が水の流れが速いので、地面をけずる「しん食」の力が強くなるんだ。",
        fileName: "science/q08.jpg"
      },
      {
        question: "アサガオなどの花粉が、めしべの先に付くことを何という？",
        choices: ["発芽", "受粉", "光合成", "呼吸"],
        answer: "受粉",
        exp: "花粉が「柱頭（ちゅうとう）」に付くことを受粉と言い、これが実を作る第一歩だよ。",
        fileName: "science/q09.jpg"
      },
      {
        question: "振り子が1往復する時間を「長く」したいとき、どうすればいい？",
        choices: ["糸を長くする", "おもりを重くする", "振れはばを大きくする", "糸を短くする"],
        answer: "糸を長くする",
        exp: "振り子の時間は「糸の長さ」だけで決まるよ。長くすると時間はゆっくりになるんだ。",
        fileName: "science/q10.jpg"
      },
      {
        question: "電磁石の力を「強く」する方法として正しいものはどれ？",
        choices: ["電池を逆向きにする", "コイルの巻き数を増やす", "鉄しんを抜く", "線を細くする"],
        answer: "コイルの巻き数を増やす",
        exp: "電流を強くするか、コイルの巻き数を増やすと磁石の力は強くなるよ。",
        fileName: "science/q11.jpg"
      },
      {
        question: "電磁石の「極（N極・S極）」を反対にするにはどうすればいい？",
        choices: ["電池を増やす", "コイルの巻き数を増やす", "電流の向きを逆にする", "鉄しんを太くする"],
        answer: "電流の向きを逆にする",
        exp: "電池の向きを入れかえて電流を逆に流すと、磁石の極も入れかわるよ。",
        fileName: "science/q12.jpg"
      },
      {
        question: "ヒトの誕生で、お母さんの体の中で赤ちゃんが育つ場所は？",
        choices: ["胃", "心臓", "子宮（しきゅう）", "肺"],
        answer: "子宮（しきゅう）",
        exp: "赤ちゃんは「子宮」という特別な場所で、へその緒から栄養をもらって育つんだ。",
        fileName: "science/q13.jpg"
      },
      {
        question: "顕微鏡（けんびきょう）でピントを合わせるとき、最初にすべきことは？",
        choices: ["一番高い倍率にする", "一番低い倍率にする", "接眼レンズを外す", "反射鏡を隠す"],
        answer: "一番低い倍率にする",
        exp: "最初は全体を見やすくするために、低い倍率からスタートするのが基本だよ。",
        fileName: "science/q14.jpg"
      },
      {
        question: "植物の葉に日光が当たるとできる養分は何？",
        choices: ["二酸化炭素", "でんぷん", "肥料", "土"],
        answer: "でんぷん",
        exp: "光のエネルギーを使って養分を作ることを「光合成（こうごうせい）」と言うよ。",
        fileName: "science/q15.jpg"
      },
      {
        question: "水に食塩を溶かすとき、水の温度を上げると溶ける量はどうなる？",
        choices: ["すごく増える", "ほとんど変わらない", "全く溶けなくなる", "減る"],
        answer: "ほとんど変わらない",
        exp: "ミョウバンなどは温度で激変するけど、食塩は温度を上げても溶ける量はほぼ一定だよ。",
        fileName: "science/q16.jpg"
      },
      {
        question: "溶けて見えなくなった食塩を、再び取り出すにはどうすればいい？",
        choices: ["水を冷やす", "水を蒸発させる", "激しく振る", "暗い場所に置く"],
        answer: "水を蒸発させる",
        exp: "水を熱して蒸発させると、溶けていた食塩が結晶（けっしょう）として出てくるよ。",
        fileName: "science/q17.jpg"
      },
      {
        question: "台風が日本付近に来たとき、多くの場合どの方向に進んでいく？",
        choices: ["北東", "南西", "真西", "真南"],
        answer: "北東",
        exp: "上空にある「偏西風（へんせいふう）」の影響で、右斜め上の方へ進むことが多いよ。",
        fileName: "science/q18.jpg"
      },
      {
        question: "冬の夜空で見られる、真ん中に3つの星が並んだ有名な星座は？",
        choices: ["カシオペヤ座", "北斗七星", "オリオン座", "はくちょう座"],
        answer: "オリオン座",
        exp: "1等星が2つもあり、形が分かりやすい冬の代表的な星座だね。",
        fileName: "science/q19.jpg"
      },
      {
        question: "ふりこの長さが「4倍」になると、1往復する時間は何倍になる？",
        choices: ["2倍", "4倍", "8倍", "変わらない"],
        answer: "2倍",
        exp: "ちょっと難しいけど、時間が2倍になるには長さは4倍、時間が3倍なら長さは9倍必要だよ。",
        fileName: "science/q20.jpg"
      }
    ],
    // ▼ 理科ステージのキャラクター画像
    assets: {
      monster: {
        normal: 'img/monster/science_idle.png',
        damage: 'img/monster/science_lose01.png',
        dead: 'img/monster/science_lose02.png'
      },
      player: {
        normal: 'img/character/zen_idle01.png',
        damage: 'img/character/zen_lose01.png',
        dead: 'img/character/zen_lose02.png',
        win: 'img/character/zen_win01.png',
      }
    }
  },

  // ----------------------------------------------------------
  // ■ 算数ステージ
  //   ※ 算数の問題は全て fileName（画像）付きです
  // ----------------------------------------------------------
  math: {
    title: "算数",                              // ← 教科名
    mainImage: 'img/topics/math_default.png',   // ← 画像なし問題のデフォルト画像
    questions: [
      // ▼ 問題リスト（算数は全問 fileName 付き＝画像問題）
      {
        question: "1辺10cmの正方形の中に、2つの三角形があります。色のついた部分の面積の合計は何cm²？",
        choices: ["25 cm²", "35 cm²", "50 cm²", "75 cm²"],
        answer: "25 cm²",
        exp: "【解説】(ア)を右側に回転移動してくっつけると、底辺10cm、高さ10cmの1つの三角形になります。！",
        fileName: "math/q01.jpg"
      },
      {
        question: "30度、60度、90度の直角三角形。一番長い辺が12cmのとき、この面積は何cm²？",
        choices: ["18 cm²", "24 cm²", "31.14 cm²", "36 cm²"],
        answer: "18 cm²",
        exp: "【解説】同じ三角形を隣に並べると1辺12cmの「正三角形」になります。高さは12÷2=6cmになるので、12×6÷2÷2=18cm²です。",
        fileName: "math/q02.jpg"
      },
      {
        question: "半径10cmのおうぎ形の中に長方形があります。対角線の長さが10cmのとき、この長方形の面積は？",
        choices: ["25 cm²", "31.4 cm²", "50 cm²", "78.5 cm²"],
        answer: "50 cm²",
        exp: "【解説】長方形の2本の対角線は同じ長さです。もう1本の対角線はおうぎ形の半径(10cm)そのもの。10×10÷2=50cm²です。",
        fileName: "math/q03.jpg"
      },
      {
        question: "1辺10cmの正方形の中に、4つの半円が描かれています。中心にある「花びら4枚」の面積の合計は何cm²？",
        choices: ["43 cm²", "57 cm²", "78.5 cm²", "100 cm²"],
        answer: "57 cm²",
        exp: "【解説】(半円4個) - (正方形) で求まります。10×10×3.14 - 100 = 57cm²。重なり部分が答えになります。",
        fileName: "math/q04.jpg"
      },
      {
        question: "面積60cm²の正六角形の中に、頂点を結んでできた小さな正六角形があります。この面積は何cm²？",
        choices: ["10 cm²", "15 cm²", "20 cm²", "30 cm²"],
        answer: "20 cm²",
        exp: "【解説】正六角形を分割すると、中の六角形は全体の1/3になります。60 ÷ 3 = 20cm² です。",
        fileName: "math/q05.jpg"
      },
      {
        question: "三角形の辺ABを2:1、辺ACを1:2に分ける点を結んだとき、上の小さな三角形は全体の何分のいくつ？",
        choices: ["2/3", "2/9", "1/3", "4/9"],
        answer: "2/9",
        exp: "【解説】隣辺比の考え方。 (2/3) × (1/3) = 2/9 となります。図形の比を掛け合わせるテクニックです。",
        fileName: "math/q07.jpg"
      },
      {
        question: "正方形頂点Aを中心に30度回転。重なっていない部分の面積は？",
        choices: ["元の面積", "おうぎ形1つ分", "円1つ分", "正方形1つ分"],
        answer: "おうぎ形1つ分",
        exp: "【解説】三角形の面積は回転しても変わらないため、はみ出した部分は中心角30度のおうぎ形と等しくなります。",
        fileName: "math/q08.jpg"
      },
      {
        question: "立方体を対角線（向かい合う頂点）を通るように切ると、切り口は？",
        choices: ["正三角形", "長方形", "ひし形", "五角形"],
        answer: "長方形",
        exp: "【解説】向かい合う辺が平行になり、かつ角がすべて直角になるため長方形になります。",
        fileName: "math/q09.jpg"
      },
      {
        question: "星型（五角星）の先端にある5つの角の合計は何度？",
        choices: ["180度", "360度", "540度", "720度"],
        answer: "180度",
        exp: "【解説】三角形の外角の性質を使って角を1箇所に集めると、ちょうど三角形の内角の和（180度）になります。",
        fileName: "math/q10.jpg"
      },
      {
        question: "平行四辺形の内部に点をとり、頂点と結びました。上下の三角形の面積合計が20のとき、全体は？",
        choices: ["20", "30", "40", "60"],
        answer: "40",
        exp: "【解説】上下の三角形の高さの合計は平行四辺形の高さに等しいので、合計面積は全体の半分になります。",
        fileName: "math/q11.jpg"
      },
      {
        question: "半径3cmの円が、まっすぐ20cmころがりました。円の中心は何cm進みますか。",
        choices: ["17cm", "20cm", "23cm", "26cm"],
        answer: "20cm",
        exp: "【解説】円がまっすぐころがるとき、中心は円と同じだけ前に進みます。半径は関係ありません。",
        fileName: "math/q12.jpg"
      },
      {
        question: "長方形を対角線で折り返しました。重なっている部分はどんな三角形？",
        choices: ["直角三角形", "二等辺三角形", "正三角形", "不等辺三角形"],
        answer: "二等辺三角形",
        exp: "【解説】対角線の「錯角」と、折り返しの「等しい角」により、2つの角が等しくなり二等辺三角形になります。",
        fileName: "math/q13.jpg"
      },
      {
        question: "1辺10cmの正方形の各辺の中点を結んで、中に小さな正方形を作りました。その面積は？",
        choices: ["25", "50", "75", "100"],
        answer: "50",
        exp: "【解説】対角線10cmのひし形と考えます。 10 × 10 ÷ 2 = 50cm² です。",
        fileName: "math/q14.jpg"
      },
      {
        question: "直角三角形を、短い辺を軸に1回転させてできる立体の形は？",
        choices: ["円柱", "円すい", "球", "ドーナツ"],
        answer: "円すい",
        exp: "【解説】直角をはさむ辺を軸にした回転体は「円すい」になります。",
        fileName: "math/q15.jpg"
      },
      {
        question: "ひし形の対角線が8cmと6cm。面積は何cm²？",
        choices: ["14", "24", "32", "48"],
        answer: "24",
        exp: "【解説】ひし形の面積 = 対角線 × 対角線 ÷ 2 です。 8 × 6 ÷ 2 = 24cm²。",
        fileName: "math/q16.jpg"
      },
      {
        question: "円の半径を2倍にすると、面積は何倍になる？",
        choices: ["2倍", "3.14倍", "4倍", "8倍"],
        answer: "4倍",
        exp: "【解説】面積比は相似比の2乗になります。2 × 2 = 4倍です。",
        fileName: "math/q17.jpg"
      },
      {
        question: "正方形の各辺を20%長くしました。面積は何%増える？",
        choices: ["20%", "40%", "44%", "144%"],
        answer: "44%",
        exp: "【解説】1.2 × 1.2 = 1.44 なので、もとの1.44倍、つまり44%増えます。",
        fileName: "math/q18.jpg"
      },
      {
        question: "台形の(上底＋下底)が10cm、高さが6cm。面積は？",
        choices: ["16", "30", "60", "計算不能"],
        answer: "30",
        exp: "【解説】台形の面積 = (上底＋下底) × 高さ ÷ 2 = 10 × 6 ÷ 2 = 30cm² です。",
        fileName: "math/q19.jpg"
      },
      {
        question: "正三角形の各辺の中点を結んで中に三角形を作ると、その面積は全体の何分の1？",
        choices: ["1/2", "1/3", "1/4", "1/8"],
        answer: "1/4",
        exp: "【解説】中点を結ぶと全体は同じ大きさの4つの正三角形に分かれます。よって1/4です。",
        fileName: "math/q20.jpg"
      }
    ],  // ← ここにカンマを追加
    // ▼ 算数ステージのキャラクター画像
    assets: {
      monster: {
        normal: 'img/monster/math_idle.png',
        damage: 'img/monster/math_lose01.png',
        dead: 'img/monster/math_lose02.png',
        win: 'img/monster/math_win.png'
      },
      player: {
        normal: 'img/character/gigi_idle01.png',
        damage: 'img/character/gigi_lose01.png',
        dead: 'img/character/gigi_lose02.png',
        win: 'img/character/gigi_win01.png'
      }
    }
  },

  // ----------------------------------------------------------
  // ■ 社会ステージ
  //   ※ 社会の問題は全て fileName（画像）付きです
  // ----------------------------------------------------------
  social: {
    title: "社会",                               // ← 教科名
    mainImage: 'img/topics/social_default.png',  // ← 画像なし問題のデフォルト画像
    questions: [
      // ▼ 問題リスト（社会は全問 fileName 付き＝画像問題）
      {
        question: "日本列島の東側に広がる世界最大の海洋は？",
        choices: ["大西洋", "インド洋", "太平洋", "北極海"],
        answer: "太平洋",
        exp: "【解説】太平洋は地球の表面積の約3分の1を占める、世界で最も大きな海です。",
        fileName: "social/q01.jpg"
      },
      {
        question: "日本で最も面積が広い都道府県は？",
        choices: ["岩手県", "福島県", "長野県", "北海道"],
        answer: "北海道",
        exp: "【解説】北海道は日本の総面積の約22%を占めており、2位の岩手県の約5倍以上の広さがあります。",
        fileName: "social/q02.jpg"
      },
      {
        question: "日本で最も北にある島の名前は？",
        choices: ["択捉島", "国後島", "色丹島", "歯舞群島"],
        answer: "択捉島",
        exp: "【解説】択捉島（えとろふとう）は、日本が主張する領土の中で最も北に位置する北方領土の一つです。",
        fileName: "social/q03.jpg"
      },
      {
        question: "山形県にある、米作りがさかんな平野は？",
        choices: ["石狩平野", "越後平野", "庄内平野", "濃尾平野"],
        answer: "庄内平野",
        exp: "【解説】最上川の下流に広がる庄内平野は、日本有数の穀倉地帯（こくそうちたい）として有名です。",
        fileName: "social/q04.jpg"
      },
      {
        question: "赤道が通っている大陸はどれでしょう？",
        choices: ["アフリカ大陸", "ユーラシア大陸", "北アメリカ大陸", "オーストラリア大陸"],
        answer: "アフリカ大陸",
        exp: "【解説】赤道は地球を南北に分ける線です。アフリカ大陸のほか、南アメリカ大陸なども通っています。",
        fileName: "social/q05.jpg"
      },
      {
        question: "この有名な作曲家の名前は？",
        choices: ["ベートーヴェン", "バッハ", "モーツアルト", "ハイドン"],
        answer: "モーツアルト",
        exp: "【解説】オーストリアの天才作曲家です。「アイネ・クライネ・ナハトムジーク」などが有名です。",
        fileName: "social/q06.jpg"
      },
      {
        question: "南極大陸に一番近いのは？",
        choices: ["アフリカ大陸", "ユーラシア大陸", "北アメリカ大陸", "オーストラリア大陸"],
        answer: "オーストラリア大陸",
        exp: "【解説】南極大陸は地球の南端にあり、地理的にはオーストラリアや南アメリカ大陸が比較的近い位置にあります。",
        fileName: "social/q07.jpg"
      },
      {
        question: "ルーブル美術館があるこの国旗の国はどこでしょう？",
        choices: ["イタリア", "フランス", "北アメリカ大陸", "オーストラリア大陸"],
        answer: "フランス",
        exp: "【解説】フランスのパリにある世界最大級の美術館です。「モナ・リザ」などの名画が展示されています。",
        fileName: "social/q08.jpg"
      },
      {
        question: "この有名な発明家の名前は？",
        choices: ["ライト兄弟", "ダビンチ", "ベル", "エジソン"],
        answer: "エジソン",
        exp: "【解説】「発明王」と呼ばれ、蓄音機や白熱電球など、生涯で1,000以上の発明をしました。",
        fileName: "social/q09.jpg"
      },
      {
        question: "元祖天才！「万学の祖」 と呼ばれる古代ギリシアの哲学者の名前は？",
        choices: ["ソクラテス", "アリストテレス", "ピタゴラス", "プラトン"],
        answer: "アリストテレス",
        exp: "【解説】哲学だけでなく論理学、生物学、政治学など、あらゆる学問の基礎を築いたよ！",
        fileName: "social/q10.jpg"
      },
      {
        question: "情報通信技術をアルファベット3文字で？",
        choices: ["PTA", "ICT", "NHK", "JIS"],
        answer: "ICT",
        exp: "【解説】Information and Communication Technologyの略で、情報の伝達や通信の技術のことです。",
        fileName: "social/q11.jpg"
      },
      {
        question: "古墳時代、王の墓の周りに並べられた土人形は？",
        choices: ["勾玉", "埴輪", "銅鐸", "土偶"],
        answer: "埴輪",
        exp: "【解説】古墳（お墓）の周りに並べられた、人や馬、家の形をした焼き物です。魔除けや供え物の意味がありました。",
        fileName: "social/q12.jpg"
      },
      {
        question: "関東から九州にかけての工業地帯のつながりは？",
        choices: ["シリコンバレー", "太平洋ベルト", "日本海ライン", "工業ロード"],
        answer: "太平洋ベルト",
        exp: "【解説】関東から九州までの、太平洋側に沿って並んでいる日本の工業地帯・工業地域の総称です。",
        fileName: "social/q13.jpg"
      },
      {
        question: "北海道の先住民族を何という？",
        choices: ["琉球民族", "アイヌ民族", "インカ民族", "マオリ民族"],
        answer: "アイヌ民族",
        exp: "【解説】独自の言語や豊かな文化を持ち、自然とともに暮らしてきた北海道の先住民族です。",
        fileName: "social/q14.jpg"
      },
      {
        question: "日本で最も長い川はどれ？",
        choices: ["利根川", "石狩川", "信濃川", "四万十川"],
        answer: "信濃川",
        exp: "【解説】信濃川は長野県（千曲川）から新潟県を流れる日本で一番長い川です。二番目は利根川です。",
        fileName: "social/q15.jpg"
      },
      {
        question: "公害を防ぐために作られた国の役所は？",
        choices: ["厚生労働省", "国土交通省", "環境省", "文部科学省"],
        answer: "環境省",
        exp: "【解説】公害の防止や自然環境の保護、地球温暖化対策などを担当しています。画像は環境省のマークだよ。",
        fileName: "social/q16.jpg"
      },
      {
        question: "ごみを減らす3R。再び使うことを何という？",
        choices: ["リデュース", "リユース", "リサイクル", "リフレッシュ"],
        answer: "リユース",
        exp: "【解説】ごみを減らす（Reduce）、繰り返し使う（Reuse）、資源として再利用する（Recycle）の3つをあわせて3Rといいます。",
        fileName: "social/q17.jpg"
      },
      {
        question: "この地図記号は何を表している？",
        choices: ["市役所", "警察署", "病院", "郵便局"],
        answer: "病院",
        exp: "【解説】「病院」の記号だよ。昔の軍隊の病院「陸軍病院」のマーク（十字）が由来になっているんだ。",
        fileName: "social/q18.jpg"
      },
      {
        question: "この地図記号は何を表している？",
        choices: ["図書館", "小・中学校", "博物館", "市役所"],
        answer: "小・中学校",
        exp: "【解説】「小・中学校」の記号だよ。漢字の「文」という文字をデザイン化したものなんだ。",
        fileName: "social/q19.jpg"
      },
      {
        question: "この地図記号は何を表している？",
        choices: ["大学", "幼稚園", "高等学校", "図書館"],
        answer: "高等学校",
        exp: "【解説】「高等学校」の記号だよ。小・中学校と同じ「文」を○で囲むのがポイント！",
        fileName: "social/q20.jpg"
      }
    ],
    // ▼ 社会ステージのキャラクター画像
    assets: {
      monster: {
        normal: 'img/monster/social_idle.png',
        damage: 'img/monster/social_lose01.png',
        dead: 'img/monster/social_lose02.png',
        win: 'img/monster/social_win.png'
      },
      player: {
        normal: 'img/character/hikari_idle01.png',
        damage: 'img/character/hikari_lose01.png',
        dead: 'img/character/hikari_lose02.png',
        win: 'img/character/hikari_win01.png'
      }
    }
  },

  // ----------------------------------------------------------
  // ■ 総合（最終ボス）ステージ
  //   問題は各教科からランダムに5問自動抽出されます。
  //   questions は空でOK（手動で追加してもランダム抽出の優先度が高い）
  // ----------------------------------------------------------
  // 追加：総合問題（'aplly'）用データ
  apply: {
    title: "総合問題",
    mainImage: 'img/stage/all_boss.png',
    questions: [], // ← 空でOK（各教科から自動で5問ランダム抽出される）
    // ▼ 総合（Dr.Freeze）ステージのキャラクター画像
    assets: {
      monster: {
        normal: 'img/monster/apply_idle.png',
        damage: 'img/monster/apply_lose01.png',
        dead: 'img/monster/apply_lose02.png',
        win: 'img/monster/apply_win.png'
      },
      player: {
        normal: 'img/character/hikari_idle01.png',
        damage: 'img/character/hikari_lose01.png',
        dead: 'img/character/hikari_lose02.png',
        win: 'img/character/hikari_win01.png'
      }
    }
  }
};

// ==========================================
// 2. ゲーム状態管理
// ==========================================

// ▼ ゲームバランス設定
// ▼ PLAYER_MAX_HP: プレイヤーのHP上限。増やすと問題を多く間違えられる
// ▼ MONSTER_MAX_HP: 敵のHP上限。問題の数に合わせて調整すること
//   （正解するたびに1ずつ減り、0になるとボスを倒したことになる）
const PLAYER_MAX_HP = 4;
const MONSTER_MAX_HP = 6;

// ▼ 以下はゲーム進行中の状態変数。直接編集しない
let monsterHP, playerHP, currentSet, currentIdx, currentKey;
let introTimers = [];

// ▼ 各教科のクリア状況。JS が自動で更新するため、直接編集しない
let clearStatus = {
  japanese: false,
  math: false,
  science: false,
  social: false
};

// ==========================================
// 3. 画面制御・ゲーム進行（基本的に編集不要）
// ==========================================

// ▼ 指定のページ（page-menu / page-quiz）を表示し、他を非表示にする
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

// ▼ 画面上部の進捗ドット（問題番号インジケーター）を初期化する
function initQuizProgress() {
  const container = document.getElementById('quiz-progress');
  if (!container) return;
  container.innerHTML = '';
  const count = (currentKey === 'apply') ? 5 : 10;
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('div');
    dot.className = 'step-dot';
    if (currentKey === 'apply') dot.classList.add('apply-dot');
    container.appendChild(dot);
  }
}

// ▼ クイズを開始する。key = 'japanese' / 'science' / 'math' / 'social' / 'apply'
// ▼ メニュー画面のボタン onclick から呼ばれる（HTML側で設定済み）
// --- クイズ開始 (統合版) ---
function startQuiz(key) {
  // ▼ 教科名ラベル（画面上部に表示）。表示文言を変えたい場合はここを編集
  const labelDisplay = document.getElementById('quiz-subject-display');
  const subjectNames = {
    'japanese': '国語',
    'social': '社会',
    'science': '理科',
    'math': '算数',
    'apply': '総合'
  };

  if (labelDisplay) {
    labelDisplay.textContent = subjectNames[key] || "";
    labelDisplay.classList.add('active'); // CSSで display: block になる
  }

  // ② 画面演出（スプラッシュ画面を隠す）
  const splashContent = document.querySelector('.splash-content');
  if (splashContent) {
    splashContent.style.opacity = "0";
    splashContent.style.pointerEvents = "none";
  }

  // ③ データの存在確認と現在のキー保存
  if (!STAGE_DATA[key]) return;
  currentKey = key;
  const stage = STAGE_DATA[key];

  // ④ 問題セットの構築（シャッフル）
  if (key === 'apply') {
    const allQ = [
      ...STAGE_DATA.japanese.questions,
      ...STAGE_DATA.math.questions,
      ...STAGE_DATA.science.questions,
      ...STAGE_DATA.social.questions,
    ];
    currentSet = allQ.sort(() => Math.random() - 0.5).slice(0, 5);
  } else {
    currentSet = [...stage.questions].sort(() => Math.random() - 0.5);
  }

  // ⑤ ステータス・クラスの初期化
  monsterHP = MONSTER_MAX_HP;
  playerHP = PLAYER_MAX_HP;
  currentIdx = 0;

  // 重要：bodyに教科名を付与（これでCSSのデザインが変わる）
  document.body.className = key;

  // ⑥ HPバーとスプライトの更新
  updateHPBar('monster', monsterHP, MONSTER_MAX_HP);
  updateHPBar('player', playerHP, PLAYER_MAX_HP);
  updateSprite('monster', stage.assets.monster.normal);

  // ⑦ プレイヤー表示切り替え（単体 vs パーティ）
  const playerSprite = document.getElementById('player-sprite');
  const playerParty = document.getElementById('player-party');
  if (key === 'apply') {
    if (playerSprite) playerSprite.classList.add('hidden');
    if (playerParty) {
      playerParty.classList.remove('hidden');
      resetPartySprites();
    }
  } else {
    if (playerSprite) {
      playerSprite.classList.remove('hidden');
      updateSprite('player', stage.assets.player.normal);
    }
    if (playerParty) playerParty.classList.add('hidden');
  }

  // ⑧ クイズ画面へ遷移
  initQuizProgress();
  showPage('page-quiz');
  loadQuestion();
}
// ▼ メニュー画面に戻る。「降参」ボタンや結果画面から呼ばれる
// --- メニューに戻る ---
function backToMenu() {
  // 【追加】教科名ラベルを非表示にする
  const labelDisplay = document.getElementById('quiz-subject-display');
  if (labelDisplay) {
    labelDisplay.classList.remove('active');
  }

  const splashContent = document.querySelector('.splash-content');
  if (splashContent) {
    splashContent.style.opacity = "1";
    splashContent.style.pointerEvents = "auto";
  }
  document.getElementById('feedback-area').classList.add('hidden');
  document.body.className = 'menu-mode';
  showPage('page-menu');

  if (pendingBossIntro) {
    pendingBossIntro = false;
    // ...（以下、既存のボス登場演出へ続く）
    const allBtn = document.getElementById('btn-all');
    const enemyApply = document.getElementById('enemy-img-apply');
    if (allBtn) {
      allBtn.classList.remove('hidden');
      allBtn.style.display = 'flex';
      allBtn.onclick = () => startQuiz('apply');
    }
    if (enemyApply) {
      enemyApply.classList.remove('hidden');
      enemyApply.style.display = 'block';
    }
  }
}
// ▼ 現在の問題データを読み込み、画面に問題文・選択肢・画像を表示する
// --- 問題表示 ---
function loadQuestion() {
  const qData = currentSet[currentIdx];
  const stage = STAGE_DATA[currentKey];

  // ── プログレスドット更新 ──
  const progressContainer = document.getElementById('quiz-progress');
  if (progressContainer) {
    const dots = progressContainer.querySelectorAll('.step-dot');
    dots.forEach((dot, i) => {
      dot.classList.remove('active', 'cleared');
      if (i < currentIdx) dot.classList.add('cleared');
      if (i === currentIdx) dot.classList.add('active');
    });
  }

  // ── 表示エリア取得 ──
  const displayArea = document.getElementById('main-kanji');
  if (!displayArea) return;

  displayArea.innerHTML = ""; // 一旦中身を空にする
  const kanjiWindow = displayArea.closest('.kanji-window');

  // ── 理科・算数・社会（fileNameがある場合） ──
  if (qData.fileName) {
    kanjiWindow.classList.add('image-mode');

    const img = document.createElement('img');
    // 重要：パスが 'img/science/q01.png' になるように結合
    img.src = 'img/' + qData.fileName;

    // 画像が表示されない対策：スタイルを強制
    img.style.maxWidth = "100%";
    img.style.maxHeight = "100%";
    img.style.display = "block";
    img.style.margin = "auto";

    displayArea.appendChild(img);

  } else {
    // ── 国語：テキスト表示 ──
    kanjiWindow.classList.remove('image-mode');

    const match = qData.question.match(/「(.+?)」/);
    if (match) {
      const span = document.createElement('span');
      span.innerText = match[1];
      span.style.fontSize = "3.5rem";
      span.style.fontWeight = "900";
      span.style.color = "#000";
      displayArea.appendChild(span);
    } else {
      // 囲み文字がない場合、教科のデフォルト画像を表示
      const img = document.createElement('img');
      img.src = stage.mainImage;
      img.style.width = "80%";
      displayArea.appendChild(img);
    }
  }

  // ── 問題文・選択肢 ──
  document.getElementById('question-text').innerText = qData.question;
  const optionContainer = document.getElementById('option-container');
  optionContainer.innerHTML = '';

  qData.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = choice;
    btn.onclick = () => checkAnswer(choice);
    optionContainer.appendChild(btn);
  });
  document.getElementById('feedback-area').classList.add('hidden');
}

// 選択肢をランダムに組み替える関数
/**
 * 配列をシャッフルする関数（フィッシャー・イェーツ法）
 */
function shuffleChoices(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [array[i], array[r]] = [array[r], array[i]];
  }
  return array;
}
// STAGE_DATA 内のすべての教科とすべての問題をループで回す
Object.keys(STAGE_DATA).forEach(stageKey => {
  const stage = STAGE_DATA[stageKey];

  // 各ステージの questions 配列をループ
  stage.questions.forEach(q => {
    // choices 配列だけをシャッフル（answerやfileNameはそのまま保持される）
    shuffleChoices(q.choices);
  });
});

console.log("すべての選択肢のシャッフルが完了しました！");


// ▼ 選択肢ボタンを押したときに呼ばれる正誤判定関数
// ▼ HP増減・フィードバック表示・次の問題への遷移を制御する
// --- 判定 ---
function checkAnswer(selected) {
  const btns = document.querySelectorAll('#option-container .option-btn');
  btns.forEach(btn => btn.disabled = true);

  const qData = currentSet[currentIdx];
  const isCorrect = (selected === qData.answer);
  const assets = STAGE_DATA[currentKey].assets;
  const feedbackArea = document.getElementById('feedback-area');

  // ▼ 正解・不正解時のメッセージ。文言を変えたい場合はここを編集
  let feedbackHTML = '';
  if (isCorrect) {
    // ▼ 正解時メッセージ（apply = 総合ボス、それ以外 = 通常ステージ）
    const msg = (currentKey === 'apply') ? '✅ 次の問題へ進め！' : '敵にダメージを与えた';
    feedbackHTML += `<p style="color:#4cff72; font-size:1rem;">${msg}</p>`;
  } else {
    // ▼ 不正解時メッセージ
    const failMsg = (currentKey === 'apply') ? '❌ 不正解！全問正解が条件だ...！' : `❌ あなたの答え：「${selected}」`;
    feedbackHTML += `<p style="color:#ff4c4c; font-size:0.95rem;">${failMsg}</p>`;
    feedbackHTML += `<p style="color:#ffdd57; font-size:0.95rem;">⭕ 正解：「${qData.answer}」</p>`;
  }

  // 解説（expがあれば必ず表示）
  if (qData.exp) {
    feedbackHTML += `<p style="margin-top:10px; font-size:0.85rem; color:#ccc; border-top:1px solid #555; padding-top:8px;">${qData.exp}</p>`;
  }

  document.getElementById('feedback-title').innerText = isCorrect ? "🎉正解🎉" : "残念...💦";
  document.getElementById('feedback-text').innerHTML = feedbackHTML;

  if (isCorrect) {
    monsterHP--;
    updateSprite('monster', assets.monster.damage);
  } else {
    playerHP--;
    if (currentKey === 'apply') {
      updatePartyByHP(playerHP);
    } else {
      updateSprite('player', assets.player.damage);
    }
  }

  updateHPBar('monster', monsterHP, MONSTER_MAX_HP);
  updateHPBar('player', playerHP, PLAYER_MAX_HP);
  feedbackArea.classList.remove('hidden');

  // applyは1問でも間違えたら即ゲームオーバー
  const applyFailed = (currentKey === 'apply' && !isCorrect);
  if (monsterHP <= 0 || playerHP <= 0 || applyFailed) {
    showFinalResult(monsterHP <= 0 && !applyFailed);
  } else {
    document.getElementById('btn-next').classList.remove('hidden');
    document.getElementById('btn-retry').classList.add('hidden');
    document.getElementById('result-score-area').classList.add('hidden');
  }
}

// ▼ 「降参してメニューに戻る」ボタンから呼ばれる
// ▼ 総合ボス戦中に降参した場合はオープニングからやり直し
function askQuit() {
  if (currentKey === 'apply') {
    restartFromOpening();
  } else {
    backToMenu();
  }
}


function nextQuestion() {
  document.getElementById('feedback-area').classList.add('hidden');
  currentIdx++;
  const maxQ = (currentKey === 'apply') ? 5 : 10;
  if (currentIdx < currentSet.length && currentIdx < maxQ) {
    const assets = STAGE_DATA[currentKey].assets;
    updateSprite('monster', assets.monster.normal);
    if (currentKey === 'apply') {
      // パーティはupdatePartyByHPで現在HP状態を維持（倒れたキャラはそのまま）
      PARTY_MEMBERS.forEach((m, i) => {
        const el = document.getElementById(m.id);
        if (!el) return;
        const img = el.querySelector('img');
        const knockedCount = PLAYER_MAX_HP - playerHP;
        const reverseIdx = PARTY_MEMBERS.length - 1 - i;
        if (reverseIdx < knockedCount) {
          img.src = m.dead;
        } else {
          img.src = m.normal;
          el.classList.remove('damaged');
        }
      });
    } else {
      updateSprite('player', assets.player.normal);
    }
    loadQuestion();
  } else {
    if (currentKey === 'apply') {
      // 5問全問正解(一度もダメージなし)なら勝利
      showFinalResult(playerHP === PLAYER_MAX_HP);
    } else {
      showFinalResult(monsterHP <= 0);
    }
  }
}

// ▼ バトル終了後の結果画面を表示する（勝利 or 敗北）
// --- リザルト表示内の処理を修正 ---
function showFinalResult(isWin) {
  const assets = STAGE_DATA[currentKey].assets;
  document.getElementById('btn-next').classList.add('hidden');
  document.getElementById('btn-retry').classList.remove('hidden');
  document.getElementById('result-score-area').classList.add('hidden');

  if (isWin) {
    // applyはHP強制0でゲージも空に
    if (currentKey === 'apply') {
      monsterHP = 0;
      updateHPBar('monster', 0, MONSTER_MAX_HP);
    }
    updateSprite('monster', assets.monster.dead);
    if (currentKey === 'apply') {
      setPartyWin();
      // フィードバック画面を出さずにエンディングへ
      setTimeout(() => startEnding(), 1200);
      return;
    } else {
      updateSprite('player', assets.player.win);
    }

    const victoryMsg = '🎊勝利🎊！';
    document.getElementById('feedback-title').innerText = victoryMsg;
    document.getElementById('final-score').innerText = playerHP * 100;

    if (currentKey !== 'apply') {
      // クリア状況を更新して保存
      clearStatus[currentKey] = true;
      localStorage.setItem('stage_' + currentKey, 'true');

      const btn = document.querySelector(`.btn-${currentKey}`);
      if (btn) btn.classList.add('cleared');

      const img = document.getElementById(`monster-img-${currentKey}`);
      if (img) img.classList.add('cleared');

      checkAllCleared();
    }
  } else {
    // 負け処理
    document.getElementById('feedback-title').innerText = "GAME OVER";
    document.getElementById('final-score').innerText = "0";
    if (currentKey === 'apply') {
      setPartyDead();
      // applyゲームオーバー：ボタンをオープニングへ変更
      const retryBtn = document.getElementById('btn-retry');
      retryBtn.innerText = 'オープニングへ戻る';
      retryBtn.onclick = restartFromOpening;
    } else {
      updateSprite('player', assets.player.dead);
    }
    updateSprite('monster', assets.monster.win);
  }
}
// ▼ 4教科すべてクリアしたか確認し、全クリアなら最終ボス演出フラグを立てる
// 全クリアチェック
let pendingBossIntro = false;

function checkAllCleared() {
  const allCleared = Object.values(clearStatus).every(v => v === true);
  if (!allCleared) return;

  // メニューに戻った後に演出を起動するフラグを立てる
  pendingBossIntro = true;
}

// ==========================================
// Dr.Freeze 登場演出（全クリア後に自動再生）
// ==========================================

// ▼ ボス登場演出の開始。氷エフェクト → テキスト → ボス表示 → クイズ開始の順に実行
function showBossIntro() {
  const overlay = document.getElementById('boss-intro-overlay');
  const canvas = document.getElementById('ice-canvas');
  const msgBox = document.getElementById('boss-intro-message');
  const textEl = document.getElementById('boss-intro-text');
  const bossFullscreen = document.getElementById('boss-fullscreen');
  const blackout = document.getElementById('boss-blackout');

  overlay.classList.remove('hidden');

  // --- 1. 氷エフェクト（キャンバスで結晶を広げる） ---
  startIceEffect(canvas, () => {
    // ▼ ボス登場時のセリフ。文言を変えたい場合はここを編集
    typewriterText(textEl, '「Dr.Freeze」との戦いの時が来た！', 70, () => {
      // --- 3. 少し待ってからボス全画面へ ---
      setTimeout(() => {
        msgBox.style.transition = 'opacity 0.5s';
        msgBox.style.opacity = '0';
        setTimeout(() => {
          bossFullscreen.classList.remove('hidden');
          // 少し遅らせてフェードイン
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              bossFullscreen.classList.add('visible');
            });
          });
          // --- 4. 暗転してクイズへ ---
          setTimeout(() => {
            blackout.classList.remove('hidden');
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                blackout.classList.add('visible');
              });
            });
            setTimeout(() => {
              // 演出リセットしてクイズ開始
              overlay.classList.add('hidden');
              bossFullscreen.classList.remove('hidden', 'visible');
              blackout.classList.remove('visible');
              blackout.classList.add('hidden');
              msgBox.style.opacity = '1';
              canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
              startQuiz('apply');
            }, 1400);
          }, 2000);
        }, 600);
      }, 1200);
    });
  });
}

// ▼ テキストを1文字ずつ表示するタイプライター演出
// ▼ speed = 文字表示間隔（ミリ秒）。大きくするとゆっくりになる
// ドラクエ風タイプライター
function typewriterText(el, text, speed, onDone) {
  el.innerText = '';
  let i = 0;
  const timer = setInterval(() => {
    el.innerText += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(timer);
      if (onDone) onDone();
    }
  }, speed);
}

// ▼ キャンバスに氷の結晶エフェクトを描画する（ボス登場演出用）
// 氷の結晶エフェクト
function startIceEffect(canvas, onDone) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  const crystals = [];
  const MAX = 60;
  let count = 0;

  function spawnCrystal() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    crystals.push({ x, y, r: 0, maxR: 60 + Math.random() * 80, speed: 1.5 + Math.random() * 2, alpha: 0.7 + Math.random() * 0.3 });
  }

  function drawCrystal(c) {
    const arms = 6;
    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.globalAlpha = c.alpha * (1 - c.r / (c.maxR * 1.5));
    for (let i = 0; i < arms; i++) {
      ctx.rotate((Math.PI * 2) / arms);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -c.r);
      ctx.strokeStyle = `rgba(${150 + Math.random() * 50}, ${220 + Math.random() * 35}, 255, 1)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      // 枝
      for (let j = 1; j <= 3; j++) {
        const br = (c.r / 4) * j;
        ctx.beginPath();
        ctx.moveTo(0, -br);
        ctx.lineTo(c.r * 0.2, -br - c.r * 0.12);
        ctx.moveTo(0, -br);
        ctx.lineTo(-c.r * 0.2, -br - c.r * 0.12);
        ctx.stroke();
      }
    }
    ctx.restore();
  }

  const spawnInterval = setInterval(() => {
    spawnCrystal();
    count++;
    if (count >= MAX) clearInterval(spawnInterval);
  }, 80);

  let done = false;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 氷の霞オーバーレイ
    const progress = Math.min(count / MAX, 1);
    ctx.fillStyle = `rgba(0, 30, 80, ${progress * 0.45})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    crystals.forEach(c => {
      c.r += c.speed;
      drawCrystal(c);
    });

    if (!done && count >= MAX && crystals.every(c => c.r > 30)) {
      done = true;
      setTimeout(onDone, 400);
    }
    if (!done) requestAnimationFrame(animate);
  }
  animate();
} function backToMenu() {
  const splashContent = document.querySelector('.splash-content');
  if (splashContent) {
    splashContent.style.opacity = "1";
    splashContent.style.pointerEvents = "auto";
  }
  document.getElementById('feedback-area').classList.add('hidden');
  document.body.className = 'menu-mode';
  showPage('page-menu');

  // 全クリア演出が待機中なら、メニューに戻ってから起動
  if (pendingBossIntro) {
    pendingBossIntro = false;

    // ボタン・敵画像を表示
    const allBtn = document.getElementById('btn-all');
    const monsterApply = document.getElementById('monster-img-apply');
    if (allBtn) {
      allBtn.classList.remove('hidden');
      allBtn.style.display = 'flex';
      allBtn.onclick = () => startQuiz('apply');
    }
    if (monsterApply) {
      monsterApply.classList.remove('hidden');
      monsterApply.style.display = 'block';
    }

    // 少し間を置いてからボス演出スタート
    setTimeout(() => showBossIntro(), 600);
  }
}

// ==========================================
// エンディング演出（最終ボス撃破後に自動再生）
// ==========================================

// ▼ エンディング演出の開始。ボス撃破 → クレジット → フィナーレの順に進む
// ▼ ボスのセリフを変えたい場合は typewriterText の第2引数を編集
function startEnding() {
  const overlay = document.getElementById('ending-overlay');
  const bossMsgBox = document.getElementById('ending-boss-msg');
  const bossText = document.getElementById('ending-boss-text');
  const credits = document.getElementById('ending-credits');
  const finale = document.getElementById('ending-finale');
  const finaleLogo = document.getElementById('finale-logo');
  const finaleText = document.getElementById('finale-text');
  const finaleBtn = document.getElementById('finale-btn');

  overlay.classList.remove('hidden');

  // ▼ 最終ボス撃破時のセリフ。変えたい場合はここの文字列を編集
  typewriterText(bossText, '「アッチッチー！熱いひらめきでボクが溶ける〜！」', 80, () => {
    setTimeout(() => {
      // メッセージをフェードアウト
      bossMsgBox.style.transition = 'opacity 1.4s';
      bossMsgBox.style.opacity = '0';

      setTimeout(() => {
        bossMsgBox.style.display = 'none';

        // ② クレジット画面
        credits.classList.remove('hidden');
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            credits.classList.add('visible');

            // クレジット各アイテムを順番にフェードイン
            const items = credits.querySelectorAll('.credit-item');
            items.forEach((item, i) => {
              const delay = parseInt(item.dataset.delay || 0);
              setTimeout(() => item.classList.add('visible'), 600 + delay);
            });

            // ③ クレジット表示後フィナーレへ
            const lastDelay = Math.max(...Array.from(items).map(el => parseInt(el.dataset.delay || 0)));
            setTimeout(() => {
              credits.style.transition = 'opacity 1.2s';
              credits.style.opacity = '0';

              setTimeout(() => {
                credits.classList.add('hidden');

                // ④ フィナーレ
                finale.classList.remove('hidden');

                setTimeout(() => finaleLogo.classList.add('visible'), 300);
                setTimeout(() => finaleText.classList.add('visible'), 1800);
                setTimeout(() => {
                  finaleBtn.classList.remove('hidden');
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => finaleBtn.classList.add('visible'));
                  });
                }, 3200);

              }, 1200);
            }, lastDelay + 2400);
          });
        });
      }, 900);
    }, 1000);
  });
}

// ▼ 「もう一度はじめからあそぶ」ボタンから呼ばれる
// ▼ クリア状況・LocalStorage・表示をすべてリセットしてオープニングを再生する
// apply ゲームオーバー時：オープニングに戻る
function restartFromOpening() {
  // btn-retryをデフォルトに戻す
  const retryBtn = document.getElementById('btn-retry');
  retryBtn.innerText = 'メニューへ戻る';
  retryBtn.onclick = backToMenu;

  // ===== ゲームデータを完全リセット =====
  // クリア状況をリセット
  clearStatus = { japanese: false, math: false, science: false, social: false };
  pendingBossIntro = false;

  // LocalStorageもリセット
  ['japanese', 'math', 'science', 'social'].forEach(key => {
    localStorage.removeItem('stage_' + key);
  });

  // メニュー上の「クリア済み」見た目をリセット
  ['japanese', 'math', 'science', 'social'].forEach(key => {
    const btn = document.querySelector(`.btn-${key}`);
    if (btn) btn.classList.remove('cleared');
    const img = document.getElementById(`monster-img-${key}`);
    if (img) img.classList.remove('cleared');
  });

  // 総合問題ボタンと隠しボス敵を非表示に戻す
  const allBtn = document.getElementById('btn-all');
  if (allBtn) { allBtn.classList.add('hidden'); allBtn.style.display = ''; }
  const monsterApply = document.getElementById('monster-img-apply');
  if (monsterApply) { monsterApply.classList.add('hidden'); monsterApply.style.display = ''; }
  // ===== リセット完了 =====

  // エンディング画面をリセット
  const endingOverlay = document.getElementById('ending-overlay');
  if (endingOverlay) endingOverlay.classList.add('hidden');
  const endingCredits = document.getElementById('ending-credits');
  if (endingCredits) { endingCredits.classList.add('hidden'); endingCredits.style.opacity = ''; }
  const endingFinale = document.getElementById('ending-finale');
  if (endingFinale) endingFinale.classList.add('hidden');
  const finaleLogo = document.getElementById('finale-logo');
  if (finaleLogo) finaleLogo.classList.remove('visible');
  const finaleText = document.getElementById('finale-text');
  if (finaleText) finaleText.classList.remove('visible');
  const finaleBtn = document.getElementById('finale-btn');
  if (finaleBtn) { finaleBtn.classList.add('hidden'); finaleBtn.classList.remove('visible'); }
  const bossMsgBox = document.getElementById('ending-boss-msg');
  if (bossMsgBox) { bossMsgBox.style.opacity = '1'; bossMsgBox.style.display = ''; }
  const creditItems = document.querySelectorAll('.credit-item');
  creditItems.forEach(el => el.classList.remove('visible'));

  // タイマーをリセット
  introTimers.forEach(t => clearTimeout(t));
  introTimers = [];

  const introSeq = document.getElementById('intro-sequence');
  const teamLogo = document.getElementById('intro-team-logo');
  const gifBg = document.getElementById('intro-gif-bg');
  const splashContent = document.querySelector('.splash-content');

  // フィードバック・クイズを閉じてメニューに戻す
  document.getElementById('feedback-area').classList.add('hidden');
  document.body.className = 'menu-mode';
  showPage('page-menu');

  // splashとintroを初回起動と同じ状態にリセット
  if (splashContent) {
    splashContent.classList.remove('show', 'stay-top');
    splashContent.removeAttribute('style');
  }
  if (teamLogo) { teamLogo.classList.remove('show'); }
  if (gifBg) { gifBg.classList.remove('show'); }
  if (introSeq) { introSeq.removeAttribute('style'); }

  // 初回起動（DOMContentLoaded）と完全に同じロジックで再生
  const finishIntro = () => {
    introTimers.forEach(t => clearTimeout(t));
    if (introSeq && introSeq.style.display !== 'none') {
      introSeq.style.display = 'none';
      if (splashContent) splashContent.classList.add('show', 'stay-top');
      document.body.className = 'menu-mode';
    }
  };
  // setTimeout で次のイベントループに回す（ボタンクリックが即発火するのを防ぐ）
  setTimeout(() => {
    document.addEventListener('click', finishIntro, { once: true });
  }, 0);

  introTimers.push(setTimeout(() => {
    // チームロゴは黒背景で表示
    if (introSeq) introSeq.style.backgroundColor = '#000';
    if (teamLogo) teamLogo.classList.add('show');
  }, 800));
  introTimers.push(setTimeout(() => {
    if (teamLogo) teamLogo.classList.remove('show');
    introTimers.push(setTimeout(() => {
      // GIF表示時に背景を白へ切り替え
      if (introSeq) introSeq.style.backgroundColor = '#fff';
      if (gifBg) gifBg.classList.add('show');
    }, 1000));
  }, 3500));
  introTimers.push(setTimeout(() => { if (splashContent) splashContent.classList.add('show'); }, 6500));
  introTimers.push(setTimeout(() => {
    if (introSeq) {
      introSeq.style.transition = 'opacity 1.5s';
      introSeq.style.opacity = '0';
    }
    if (splashContent) splashContent.classList.add('stay-top');
    document.body.className = 'menu-mode';
    introTimers.push(setTimeout(() => { if (introSeq) introSeq.style.display = 'none'; }, 1500));
  }, 9500));

}

function updateHPBar(t, c, m) {
  const bar = document.getElementById(`${t}-hp`);
  if (bar) bar.style.width = `${Math.max(0, (c / m) * 100)}%`;
}

function updateSprite(t, s) {
  const img = document.querySelector(`#${t}-sprite img`);
  if (img) img.src = s;
}

// 4人パーティのキャラ定義
const PARTY_MEMBERS = [
  { id: 'party-shunsuke', normal: 'img/character/shunsuke_idle01.png', damage: 'img/character/shunsuke_lose01.png', dead: 'img/character/shunsuke_lose02.png', win: 'img/character/shunsuke_win01.png' },
  { id: 'party-zen', normal: 'img/character/zen_idle01.png', damage: 'img/character/zen_lose01.png', dead: 'img/character/zen_lose02.png', win: 'img/character/zen_win01.png' },
  { id: 'party-gigi', normal: 'img/character/gigi_idle01.png', damage: 'img/character/gigi_lose01.png', dead: 'img/character/gigi_lose02.png', win: 'img/character/gigi_win01.png' },
  { id: 'party-hikari', normal: 'img/character/hikari_idle01.png', damage: 'img/character/hikari_lose01.png', dead: 'img/character/hikari_lose02.png', win: 'img/character/hikari_win01.png' },
];

// 全員を通常立ち絵に戻す
function resetPartySprites() {
  PARTY_MEMBERS.forEach(m => {
    const el = document.getElementById(m.id);
    if (el) {
      el.querySelector('img').src = m.normal;
      el.classList.remove('damaged');
    }
  });
}

// プレイヤーHPに応じてダメージ演出（後ろから倒れていく）
function updatePartyByHP(hp) {
  // HP4→全員元気, HP3→4人目ダメージ, HP2→3人目もダメージ, HP1→2人目も, HP0→全員倒れる
  PARTY_MEMBERS.forEach((m, i) => {
    const el = document.getElementById(m.id);
    if (!el) return;
    const img = el.querySelector('img');
    // インデックスが (PLAYER_MAX_HP - hp) 以上なら倒れ状態
    const knockedCount = PLAYER_MAX_HP - hp;
    // 後ろ（右側）から倒れていく：i=3が最初に倒れる
    const reverseIdx = PARTY_MEMBERS.length - 1 - i;
    if (reverseIdx < knockedCount) {
      img.src = m.dead;
      el.classList.add('damaged');
    } else if (reverseIdx === knockedCount) {
      // ダメージを受けたばかりのキャラ
      img.src = m.damage;
      el.classList.add('damaged');
      setTimeout(() => { img.src = m.normal; el.classList.remove('damaged'); }, 800);
    } else {
      img.src = m.normal;
      el.classList.remove('damaged');
    }
  });
}

// 勝利時：全員勝利ポーズ
function setPartyWin() {
  PARTY_MEMBERS.forEach(m => {
    const el = document.getElementById(m.id);
    if (el) {
      el.querySelector('img').src = m.win;
      el.classList.remove('damaged');
    }
  });
}

// 敗北時：全員倒れ
function setPartyDead() {
  PARTY_MEMBERS.forEach(m => {
    const el = document.getElementById(m.id);
    if (el) {
      el.querySelector('img').src = m.dead;
    }
  });
}

// --- 起動演出 ---
window.addEventListener('DOMContentLoaded', () => {
  const introSeq = document.getElementById('intro-sequence');
  const teamLogo = document.getElementById('intro-team-logo');
  const gifBg = document.getElementById('intro-gif-bg');
  const splashContent = document.querySelector('.splash-content');

  const isQuizActive = () => {
    return ['japanese', 'math', 'science', 'social', 'all'].some(key => document.body.classList.contains(key));
  };

  const finishIntro = () => {
    introTimers.forEach(t => clearTimeout(t));
    if (introSeq && introSeq.style.display !== "none") {
      introSeq.style.display = "none";
      if (splashContent) splashContent.classList.add('show', 'stay-top');
      if (!isQuizActive()) {
        document.body.className = 'menu-mode';
      }
    }
  };

  document.addEventListener('click', finishIntro, { once: true });

  introTimers.push(setTimeout(() => {
    // チームロゴは黒背景で表示
    if (introSeq) introSeq.style.backgroundColor = '#000';
    if (teamLogo) teamLogo.classList.add('show');
  }, 800));
  introTimers.push(setTimeout(() => {
    if (teamLogo) teamLogo.classList.remove('show');
    introTimers.push(setTimeout(() => {
      // GIF表示時に背景を白へ切り替え
      if (introSeq) introSeq.style.backgroundColor = '#fff';
      if (gifBg) gifBg.classList.add('show');
    }, 1000));
  }, 3500));
  introTimers.push(setTimeout(() => { if (splashContent) splashContent.classList.add('show'); }, 6500));
  introTimers.push(setTimeout(() => {
    if (introSeq) {
      introSeq.style.transition = "opacity 1.5s";
      introSeq.style.opacity = "0";
    }
    if (splashContent) splashContent.classList.add('stay-top');
    if (!isQuizActive()) document.body.className = 'menu-mode';
    introTimers.push(setTimeout(() => { if (introSeq) introSeq.style.display = "none"; }, 1500));
  }, 9500));
});


// ==========================================
// カルーセル自動スワイプ
// ==========================================
// ▼ メニュー画面の左右カルーセルを自動でスライドさせる
// ▼ total = スライドの枚数（ループ用コピーを除いた実際の枚数）
// ▼ intervalMs = スライド切り替えの間隔（ミリ秒）
function startCarousel(trackId, total, intervalMs) {
  let current = 0;
  const track = document.getElementById(trackId);
  if (!track) return;

  // 初期化：CSSのtransitionを一度消しておく
  track.style.transition = "transform 0.6s ease-in-out";

  setInterval(() => {
    current++;

    // 次のスライドへ移動
    track.style.transition = "transform 0.6s ease-in-out";
    track.style.transform = `translateX(-${current * 100}%)`;

    // 最後のコピー（5枚目）に到達したら、一瞬で0枚目に戻す
    if (current === total) {
      setTimeout(() => {
        track.style.transition = "none"; // アニメーションをオフ
        current = 0;
        track.style.transform = `translateX(0)`;
      }, 600); // 0.6sのアニメーションが終わった直後に実行
    }
  }, intervalMs);
}// ▼ カルーセル起動。第3引数はスライド間隔（ミリ秒）。変えると切り替え速度が変わる
window.addEventListener('DOMContentLoaded', () => {
  startCarousel('monster-track', 4, 2000); // ← 2000 = 2秒ごとにスライド
  startCarousel('player-track', 4, 2500);  // ← 2500 = 2.5秒ごとにスライド
});
// ==========================================
// メニュー画面：マップキャラのidle切り替えアニメーション
// ==========================================
// ▼ マップ上の4人のキャラクターを idle01 ↔ idle02 交互に切り替えてアニメーションさせる
// ▼ キャラクター画像を追加・変更した場合は、charas 配列の img1 / img2 を更新すること
function startMapCharaAnimation() {
  const charas = [
    // ▼ id は HTML の id と一致させること。img1=通常、img2=差分フレーム
    { id: 'map-chara-shunsuke', img1: 'img/character/shunsuke_idle01.png', img2: 'img/character/shunsuke_idle02.png' },
    { id: 'map-chara-zen', img1: 'img/character/zen_idle01.png', img2: 'img/character/zen_idle02.png' },
    { id: 'map-chara-gigi', img1: 'img/character/gigi_idle01.png', img2: 'img/character/gigi_idle02.png' },
    { id: 'map-chara-hikari', img1: 'img/character/hikari_idle01.png', img2: 'img/character/hikari_idle02.png' },
  ];

  charas.forEach((chara, i) => {
    let isPattern1 = true;
    // キャラごとに少しタイミングをずらす
    setTimeout(() => {
      setInterval(() => {
        const el = document.getElementById(chara.id);
        if (!el) return;
        isPattern1 = !isPattern1;
        el.src = isPattern1 ? chara.img1 : chara.img2;
      }, 500); // 0.5秒ごとに切り替え
    }, i * 150); // 150msずつずらしてスタート
  });
}
window.addEventListener('DOMContentLoaded', () => {
  // カルーセル（エラーが起きても次へ進むように個別に呼び出す）
  try {
    startCarousel('monster-track', 4, 2000);
    startCarousel('player-track', 4, 2500);
  } catch (e) { console.error("Carousel error:", e); }

  // マップキャラクター
  try {
    startMapCharaAnimation();
  } catch (e) { console.error("Animation error:", e); }
});
