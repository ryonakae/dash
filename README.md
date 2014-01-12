# DASH

A simple and clean Sass/Compass-based framework

[RYO NAKAE](http://brdr.jp)がWebサイトを作る時に使っているSass/Compassなテンプレートファイル一式を、少しだけ汎用的にしたシンプルなフレームワークです。


## Concept / 名前の由来
~~最近はSass/CompassでWebサイトの制作をしていますが、設置やら初期設定やらが面倒だったので、使いまわせるフレームワークというかテンプレートを用意するか、というのがコンセプトです。  
そういう初期に活躍してくれるフレームワークということで、「スタートダッシュ」→「ダッシュ」→「DASH」という名前になりました。~~

**[名前の由来が変わりました](https://www.google.co.jp/search?q=start+dash+%E3%83%A9%E3%83%96%E3%83%A9%E3%82%A4%E3%83%96&espv=210&es_sm=122&source=lnms&tbm=isch&sa=X&ei=z9vQUub3DYfTkwXFvIHwAw&ved=0CAkQ_AUoAQ&biw=1239&bih=925#es_sm=122&espv=210&q=No+brand+girls%2FSTART:DASH!!&tbm=isch&imgdii=_)**



## Features / 特長
* シンプルで分厚くないフレームワーク
* Sass/Compassベースで開発が楽、面倒な初期の設置もファイルのコピペだけでOK
* [Grunt](http://gruntjs.com/)での開発もすぐ始められるように設定ファイル等を用意
* グリッドやボタンなどの基本的なスタイルが最初から用意されている&レスポンシブ対応
* アイコンフォント([Entypo](http://www.entypo.com/))が最初から用意されているのでアイコンを引っ張ってくる必要なし



## Usage / 使い方

### Download
[ダウンロード](https://github.com/ryonakae/dash/archive/master.zip)

### Setup
SassとCompassがお使いのPC/Macにインストールされていることが前提です。  
[ここ](http://ajike.co.jp/switch/sass_compass/)とかを見れば良いと思います。

### Sass/Compass
#### config.rb
Compassの設定ファイルです。  
これを弄ればディレクトリ構造やCSSの出力スタイルを変更できます。

#### \_compass_start
Compassの監視を開始するためのバッチファイルです。  

* \_compass_start.bat (Windows用)
* \_compass_start.command (Mac用)

サイトの制作を開始するときはこいつをダブルクリックで起動すれば、config.rbで指定したディレクトリの監視が始まり、SCSS(SASS)の変更がある度にcssを自動でコンパイルしてくれます。

### Grunt
Gruntを使えば、CSSのコンパイルやJSの圧縮などを自動化できます。  
PCにGrunt環境が構築されていることが前提です。

#### Grunt用ファイル
* package.json  
  プロジェクトの設定ファイル
* Gruntfile.js  
  gruntコマンドで実行するタスクの設定ファイル
* _grunt-install.bat, _grunt-install.command  
  gruntのプラグイン(モジュール)をインストールするためのバッチファイル(Windows用, Mac用)
* _grunt-start.bat, _grunt-start.command  
  gruntコマンドを実行するためのバッチファイル(Windows用, Mac用)

_grunt-startを実行するとgruntコマンドが実行され、ディレクトリの監視が始まります。

#### この設定ファイルでできること
* Sass/Compassのコンパイル
* ブラウザの自動リロード

を実行してくれます。その他のタスクを実行したい場合は、package.jsonとGruntfile.jsに適宜追記して下さい。

#### ブラウザの自動リロード
ファイル保存時にブラウザを自動リロードしてくれます。  
各ブラウザに自動リロード用の拡張機能をインストールする必要があります。例えばChrome用は[これ](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)です。


## SCSS
基本的に、インポートしたいscssをstyle.scssに書けば、それがstyle.cssにコンパイルされます。

### ファイル構成
ファイル構成は下記のとおりです。

    [project]
     ├[files]
     │ ├[_scss]
     │ │ ├[module]
     │ │ │ ├[fontello-entypo]
     │ │ │ ├_module__button.scss
     │ │ │ ├_module__common.scss
     │ │ │ ├_module__gridsystem.scss
     │ │ │ ├_module__iconfont.scss
     │ │ │ ├_module__margin.scss
     │ │ │ └_module__textalign.scss
     │ │ ├_media-queries.scss
     │ │ ├_mixin.scss
     │ │ ├_media-queries.scss
     │ │ ├_normalize.scss
     │ │ ├_user.scss
     │ │ ├_variable.scss
     │ │ └style.scss
     │ ├[font]
     │ ├[js]
     │ ├index.html
     │ └style.css
     ├[node_modules]
     ├config.rb
     ├Gruntfile.js
     └package.json

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

#### BEM
BEM記法をSassで書けるようなmixinを用意しています。  
\_mixin.scssの88行目に、

    // BEM (Require Sass 3.3)

という項目がありますので、コメントアウトを解除してください。Sass 3.3以上が必要です。Sass 3.3のインストールは、ターミナルにて

    gem install sass --pre

で可能です。

##### 使用例
こんな感じで書くことができます([ここ](http://howtohp.com/css/sass-bem.html)を参考にさせていただきました)

    .block {
      color:red;
      @include e(element) {
        color:gray;
        @include m(modifier) {
          color:green;
        } 
      }
      @include m(modifier) {
        color:white;
      }
    }

### \_user.scss
ここに各自スタイルを書いていくことができます。  
…という曖昧なルールを設けているだけで、使うか使わないかはご自由にどうぞ。

### module
便利なSCSSが用意されていてもこのサイトでは使わない、というニーズに応えたモジュール式SCSSです。個別に`@import`するかしないかをstyle.scssに記述し、必要なスタイルだけを読み込みます。

#### \_module__common.scss
一般的にどのサイトでも共通して適用するスタイルをまとめたものです。基本的に読み込んでおいて問題はないと思います

#### \_module__iconfont.scss
アイコンフォントを読み込んだりするscssです。普通の[Entypo](http://www.entypo.com/)から、[Fontello](http://fontello.com/)で生成したEntypoに変更しました(2013-12-10)。  
IE7に対応させたい場合は、\_module__iconfont.scssにて`// @import "fontello-entypo/_fontello-ie7";`のコメントアウトを解除してください。

#### \_module__gridsystem.scss
[960 Grid System](http://960.gs/)をベースにして、レスポンシブ対応させたグリッドシステムを用意していますので、グリッドを使いたい場合は下記のように書いてください。

    <div class="container">
   	  <div class="row">
        <div class="column-6">
          <p>.column-6</p>
        </div>
        <div class="column-6">
          <p>.column-6</p>
        </div>
      </div>
    </div>

カラムを右に寄せたい場合は、`.right`をクラス名に追記します。

    <div class="container">
   	  <div class="row">
        <div class="column-8">
          <p>.column-6</p>
        </div>
        <div class="column-3 right">
          <p>.column-6</p>
        </div>
      </div>
    </div>

#### \_module__margin.scss
`.mt-10`のようなmargin-top/margin-bottom用のクラスを用意していますので、必要であればお使いください(多用は禁物)。  
個人的に、昔よく使われていたこのクラスの振り方はレスポンシブデザインには不適合だと思います。`.mt-50 { margin-top: 30px; }`とかが多発するので。あくまで補助的にお使い下さい

    margin-top
    .mt-5 〜 .mt100 (margin-top:5px; 〜 margin-top:100px;)
    
    margin-bottom
    mb-5 〜 .mb-100 (margin-bottom:5px; 〜 margin-bottom:100px;)
    
#### \_module__button.scss
aタグなどに`.btn`を付与すると自動的にボタンになりますので、よければお使いください。  
4つのサイズがあります。

| class名 | 説明 |
|-----|-----|
| .btn.small | 小さいボタン |
| .btn | 普通のボタン |
| .btn.large | 大きいボタン |
| .btn.x-large | 超大きいボタン |

#### \_module__textalign.scss
クラス名を付加するとテキストや要素の右揃え/左揃えなどを設定できるSCSSです。

| class名 | 説明 |
|-----|-----|
| .align-center | 中央揃え |
| .align-left | 左揃え |
| .align-right | 右揃え |
| .align-justify | 両端揃え |

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
片方だけ記述した場合、もう片方のタグは削除して下さい。

#### og:type
og:typeの一覧は[ここ](http://www.inventory.co.jp/labo/facebook/facebook-open-graph-protocol-ogtype.html)とかを見れば良いです。  
ほとんどの場合は`article`か`blog`か`website`だと思います。`blog`と`website`はブログ/サイトのトップページ、下層ページは`article`です。

#### og:image
サイトがシェアされた時に表示されるサムネイル的な画像です。いい感じの画像を用意してください。  
**URLは絶対パスで書く必要があります。**  
画像の大きさは、[ここ](http://snowadays.jp/2013/09/2106)とかを見れば良いです。(多分500x500px以上なら問題なし)  
[OGP画像シミュレータ](http://ogimage.tsmallfield.com/)という便利なサイトもあります

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
### 2.0 (2014-1-12)
* SCSSをモジュール式に、フォルダ構造も変更
* グリッドシステムの書き直し、構造とクラス名も変更
* \_mixin.scssのMedia Queriesを修正
* .sass-cache作らないようにした
* Grunt Ready
* BEM Ready
* その他小さな不具合の修正
* どの程度のアップデートから2.0とか3.0にすればいいのか悩む

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