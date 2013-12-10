# DASH

A simple and clean Sass/Compass-based framework

[RYO NAKAE](http://brdr.jp)がWebサイトを作る時に使っているSass/Compassなテンプレートファイル一式を、少しだけ汎用的にしたシンプルなフレームワークです。


## Concept
最近はSass/CompassでWebサイトの制作をしていますが、設置やら初期設定やらが面倒だったので、使いまわせるフレームワークというかテンプレートを用意するか、というのがコンセプトです。  
そういう初期に活躍してくれるフレームワークということで、「スタートダッシュ」→「ダッシュ」→「DASH」という名前になりました。スタートダッシュが和製英語なんて知らなかった…。



## Features
* シンプルで分厚くないフレームワーク
* Sass/Compassベースで開発が楽、面倒な初期の設置もファイルのコピペだけでOK
* グリッドやボタンなどの基本的なスタイルが最初から用意されている&レスポンシブ対応
* アイコンフォント([Entypo](http://www.entypo.com/))が最初から用意されているのでアイコンを引っ張ってくる必要なし



## Usage

### Download
[ダウンロード](https://github.com/ryonakae/dash/archive/master.zip)

### Setup
SassとCompassがお使いのPC/Macにインストールされていることが前提です。  
[ここ](http://ajike.co.jp/switch/sass_compass/)とかを見れば良いと思います。

### config.rb
Compassの設定ファイルです。  
これを弄ればディレクトリ構造やCSSの出力スタイルを変更できます。

### \_compass_start
Compassの監視を開始するためのバッチファイルです。  

* \_compass_start.bat (Windows用)
* \_compass_start.command (Mac用)

サイトの制作を開始するときはこいつをダブルクリックで起動すれば、config.rbで指定したディレクトリの監視が始まり、SCSS(SASS)の変更がある度にcssを自動でコンパイルしてくれます。

#### Windows環境での\_compass_start.bat (2013-11-25)
コマンドプロンプトにて「文字コードがおかしい」とか言われてコンパイル出来ない場合があります。  
修正版の\_compass_start.batをコミットしたので大丈夫だと思いますが、もしダメなら[ここ](http://d.hatena.ne.jp/factal/20131011)とかを見ると良いと思います。

\_compass_start.batに下記のように書いて保存→実行  
(コミットしてるbatファイルには既に書かれています)

    set LANG=ja_JP.UTF-8
    compass watch

それでもダメなら

    chcp 65001
    compass w



## SCSS
基本的に、インポートしたいscssをstyle.cssに書けば、それがstyle.cssにコンパイルされます。  
構成は下記のとおりです。

    style.scss
    ┣ _normalize.scss
    ┣ _variable.scss
    ┣ _mixin.scss
    ┣ _dash.scss
    ┣ _user.scss
    ┣ _media-queries.scss
    ┗ fontello-entypo
        ┣ _fontello.scss
        ┣ (_fontello-codes.scss)
        ┣ (_fontello-embedded.scss)
        ┣ (_fontello-ie7.scss)
        ┗ (_fontello-ie7-codes.scss)

### \_normalize.scss
[normalize.css](http://necolas.github.io/normalize.css/)をSCSSに拡張子を変えたものです。

「ぶっちゃけnormalize.cssが使いにくい」という場合は、[Compassに内蔵されているCSS Reset](http://compass-style.org/reference/compass/reset/)を使ってください。

style.scssの7行目あたりに、

    // Reset or Normalize
    // parameter: "compass/reset" / "_normalize"
    @import "_normalize";
    
という記述がありますので、それを

    // Reset or Normalize
    // parameter: "compass/reset" / "_normalize"
    @import "compass/reset";
    
にすればNormalizeではなくResetになります。

### \_fontello-entypo.scss
アイコンフォントを読み込んだりするscssです。普通の[Entypo](http://www.entypo.com/)から、[Fontello](http://fontello.com/)で生成したEntypoに変更しました(2013-12-10)。  
IE7に対応させたい場合は、\_fontello-entypo.scssにて`// @import "fontello-entypo/_fontello-ie7";`のコメントアウトを解除してください。

### \_variable.scss
変数を格納したSCSSです。変数を使いたい場合はここに書くと良いです。

### \_mixin.scss
僕が比較的よく使うmixinをまとめてあります。またご自身でmixinを作られる場合はここに書くと良いです。  
\_variable.scssをこれより上で読み込んでいるため、\_variable.scssに書いた変数を\_mixin.scssで使えるので便利だと思います。

| Mixin | 説明 |
|-----|-----|
| @include clearfix; | clearfix |
| @include textHide; | テキストの画像置換 |
| @include hoverEffect($speed, $opacity); | マウスオーバーでアニメーション(CSS3)しながら半透明になります |
| @include gradient($direction, $lighten, $color, $percent); | 要素の背景をグラデーションで塗りたい時に使えます |
| @include inline-block | IE7に対応したdisplay: inline-block;が入ります |

### \_dash.css
このフレームワーク特有のあれこれが書いてあるSCSSです。  
**できれば編集せずにお使い下さい**(あちこちで不具合が出る可能性があります)。

#### 960 Grid System
[960 Grid System](http://960.gs/)をベースにして、レスポンシブ対応させたグリッドシステムを用意していますので、グリッドを使いたい場合は下記のように書いてください。

    <div class="container">
      <div class="grid-6">.grid-6</div>
      <div class="grid-6">.grid-6</div>
    </div>

横並びをさせずに折り返したい場合は、下記のようにします。

    <div class="container">
      <div class="grid-3">.grid-3</div>
      <div class="grid-3">.grid-3</div>
      <div class="grid-4 clear">.grid-4</div>
    </div>

一番最後のブロック(div.grid-4)が折り返されます。

#### margin
`.mt-10`のようなmargin-top/margin-bottom用のクラスを用意していますので、必要であればお使いください(多用は禁物)。  
個人的に、昔よく使われていたこのクラスの振り方はレスポンシブデザインには不適合だと思います。`.mt-50 { margin-top: 30px; }`とかが多発するので。あくまで補助的にお使い下さい

    margin-top
    .mt-5 〜 .mt100 (margin-top:5px; 〜 margin-top:100px;)
    
    margin-bottom
    mb-5 〜 .mb-100 (margin-bottom:5px; 〜 margin-bottom:100px;)
    
#### Button
aタグなどに`.btn`を付与すると自動的にボタンになりますので、よければお使いください。  
4つのサイズがあります。

| class名 | 説明 |
|-----|-----|
| .btn.small | 小さいボタン |
| .btn | 普通のボタン |
| .btn.large | 大きいボタン |
| .btn.x-large | 超大きいボタン |

### \_user.scss
制作するサイト独自のスタイルはここに書くと捗ります。

### \_media-queries.scss
Media Queries用のスタイルを記述します。  
僕は要素ごとに`@media`を書く人なので本来これは使用しませんが、こうやってファイルを分けないとフレームワークっぽくならないのでこうしました。が、この書き方もそこまで不便ではなかったのでこれからはこの書き方に変えてもいいかも知れません。

* Retinaディスプレイ用のスタイル
* PC用のスタイル
* タブレット用のスタイル
* スマートフォン用のスタイル

を書く場所を用意しています。

ちなみにスタイルを切り替えるブレークポイントとなる横幅ですが、\_variable.scssの一番上に書いてあります。



## アイコンフォント
Fontelloにて生成したEntypoを使用しています。

### 使い方
[Fontello](http://fontello.com/)に行き、「Entypo」の蘭から使いたいアイコンを選び、クラスを調べます。  
アイコンクリック→「Customize Names」から調べられます。

    <p><i class="icon-chrome"></i>左にアイコンが表示されているはず</p>

こんな感じでアイコンが表示されます。



## Facebook OGP & Twitter Meta
Facebook OGPとTwitter Meta用のmetaタグが最初から用意されているので空欄を埋めるだけでFacebook/Twitterに最適化できます。

### Facebook OGP

    <meta property="fb:admins" content="FacebookアプリのID">
    <meta property="fb:app_id" content="FacebookのユーザーID">
    <meta property="og:url" content="ページのURL">
    <meta property="og:type" content="サイトの種類">
    <meta property="og:title" content="ページのタイトル">
    <meta property="og:locale" content="ja_JP">
    <meta property="og:image" content="画像のURL">
    <meta property="og:description" content="ページの説明">
    <meta property="og:site_name" content="サイトのタイトル">
    <meta property="article:publisher" content="FacebookページのURL">

#### fb:admins & fb:app_id
これは**どちらかだけ**を記述すれば良いです。  
[FacebookアプリのIDを調べる場合はこちら](https://developers.facebook.com/apps)  
[FacebookのユーザーIDを調べる場合はこちら](http://biz.comlog.jp/manual2/20400.html)

#### og:type
og:typeの一覧は[ここ](http://www.inventory.co.jp/labo/facebook/facebook-open-graph-protocol-ogtype.html)とかを見れば良いです。  
ほとんどの場合は`article`か`blog`か`website`だと思います。`blog`と`website`はブログ/サイトのトップページ、下層ページは`article`です。

#### og:image
サイトがシェアされた時に表示されるサムネイル的な画像です。いい感じの画像を用意してください。  
**URLは絶対パスで書く必要があります。**  
画像の大きさは、[ここ](http://snowadays.jp/2013/09/2106)とかを見れば良いです。(多分500x500px以上なら問題なし)

#### article:publisher
投稿がシェアされてタイムラインに載った時、Facebookページのフォローボタンが表示されます。FacebookページのURLを入力して下さい。  
**og:typeが`article`じゃないとエラーが出ます。** ("article":publisherだから)  
Facebookページではなく個人アカウントの場合は、`article:author`にすれば良いです。

#### URL Linter
[URL Linter - Facebook Developers](https://developers.facebook.com/tools/debug)

入力が済んだらURL Linterでデバッグして下さい。エラーが出なければOK、出たらおかしい箇所を直して再デバッグ。

### Twitter Meta

    <meta name="twitter:site" value="サイトのTwitterアカウント(@付き)">
    <meta name="twitter:creator" value="投稿者のTwitterアカウント(@付き)">
    <meta name="twitter:url" value="ページのURL">
    <meta name="twitter:card" value="投稿の種類">
    <meta name="twitter:title" value="ページのタイトル">
    <meta name="twitter:image" value="画像のURL">
    <meta name="twitter:description" value="ページの説明">

#### twitter:site & twitter:creator
これは**どちらかだけ**を記述すれば良いです。  
`@ryo_dg`のように@付きのTwitterのユーザーIDを入力して下さい。

#### twitter:card
表示スタイルの種類です。  
[ここ](https://dev.twitter.com/docs/cards/validation/validator)に飛ぶとどんな種類があるのか分かります。ほとんどの場合は`summary`か`summary_large_image`で良いと思います。

#### twitter:image
タイムラインに表示される画像です。ほとんどの場合、FacebookのOGP画像と同じで良いと思います。

#### Twitter Cardsの申請
**Facebook OGPと違って申請が必要です。**  
[ここ](https://dev.twitter.com/docs/cards/validation/validator)から申請してください。運が良いとすぐ申請が通ります。



## Changelog
### 1.1 (2013-12-10)
* linkタグの修正
* \_mixin.scssのMedia Queriesを修正、inline-blockを追加
* アイコンフォントを[Fontello](http://fontello.com/)のEntypoに変更
* ↑に併せて_scss内を整理、各SCSSを修正
* \_user.scssの追加
* README.md加筆修正

### 1.0 (2013-11-25)
* 公開



## License
[LICENSE.md](https://github.com/ryonakae/dash/blob/master/LICENSE.md)