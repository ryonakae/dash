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
    ┗ _media-queries.scss

### \_normalize.scss
[normalize.css](http://necolas.github.io/normalize.css/)をSCSSに拡張子を変えたものです。

「ぶっちゃけnormalize.cssが使いにくい」という場合は、compassに内蔵されているCSS Resetを使ってください。

style.scssの7行目あたりに、

    // Reset or Normalize
    // parameter: "compass/reset" / "_normalize"
    @import "_normalize";
    
という記述がありますので、それを

    // Reset or Normalize
    // parameter: "compass/reset" / "_normalize"
    @import "compass/reset";
    
にすればnormalizeではなくresetになります。

余談ですが僕はresetの方をよく使いますが、ありとあらゆるスタイルをリセットしてしまうので、ぶっちゃけ記述量はresetしない時より増えるから色々面倒だなとかは思っています。


### \_variable.scss
変数を格納したSCSSです。変数を使いたい場合はここに書くと良いです。


### \_mixin.scss
僕が比較的よく使うmixinをまとめてあります。ご自身でmixinを作られる場合はここに書くと良いです。  
\_variable.scssをこれより上で読み込んでいるため、\_variable.scssに書いた変数を\_mixin.scssで使えるので便利だと思います。

| Mixin | 説明 |
|-----|-----|
|@include clearfix;|clearfix|
|@include textHide;|テキストの画像置換|
|@include hoverEffect($speed, $opacity);|マウスオーバーでアニメーション(CSS3)しながら半透明になります|
|@include gradient($direction, $lighten, $color, $percent);|要素の背景をグラデーションで塗りたい時に使えます|


### \_dash.css
このフレームワーク特有のあれこれが書いてあるSCSSです。

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

一番最後のブロックが折り返されます。

#### margin
`.mt-10`のようなmargin-top/margin-bottom用のクラスを用意していますので、必要であればお使いください(多用は禁物)。

    margin-top
    .mt-5 〜 .mt100 (margin-top:5px; 〜 margin-top:100px;)
    
    margin-bottom
    mb-5 〜 .mb-100 (margin-bottom:5px; 〜 margin-bottom:100px;)
    
#### Button
aタグなどに`.btn`を付与すると自動的にボタンになりますので、よければお使いください。  
4つのサイズがあります。

    .btn.small   …小さいボタン
    .btn         …普通のボタン
    .btn.large   …大きいボタン
    .btn.x-large …超大きいボタン


### _media-queries.scss
Media Queries用のスタイルを記述します。  
僕は要素ごとに`@media`を書く人なので本来これは使用しませんが、こうやってファイルを分けないとフレームワークっぽくならないのでこうしました。が、この書き方もそこまで不便ではなかったのでこれからはこの書き方に変えてもいいかも知れません。

* Retinaディスプレイ用のスタイル
* PC用のスタイル
* タブレット用のスタイル
* スマートフォン用のスタイル

を書く場所を用意しています。

ちなみにスタイルを切り替えるブレークポイントとなる横幅ですが、_variable.scssの一番上に書いてあります。

   

## Changelog
### 1.0 (2013-11-25)

* 公開


## License
[LICENSE.md](https://github.com/ryonakae/dash/blob/master/LICENSE.md)