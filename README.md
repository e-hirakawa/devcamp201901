# 構成案 - 開発合宿201901

## 概要
以下、３アプリケーションを別々のパッケージとして開発する案。
- ゲーム画面アプリケーション  
javascriptの物理エンジンを使って、ボールの投てき、および物体の衝突処理を実装する画面。  
- プレイヤー画面アプリケーション  
加速度や傾きセンサーAPIを利用して、デバイスの動きをボールの投てき処理を実装する画面。  
- サーバーアプリケーション  
上記２つの画面アプリケーションのルーティングとレンダリングをする。  
WebSocketクライアント同士の通信の中継を行う。
（ゲーム画面 ⇄ プレイヤー画面）

## 構成に関しての提案
３アプリケーションはそれぞれでパッケージ管理を行う。  
（つまり、package.jsonをそれぞれで持つ）  
この構成のメリットは、、、
- 依存ライブラリの競合を気にしなくてよいため、分担作業がしやすい
- リポジトリへのpush/pullに際して、コンフリクトが起きにくい
- 画面毎に使いやすいフレームワークを選択できる。
(Angular, Vue, React, あるいは素のHTML・JSの構成など)

対するデメリットは、、、
- ソースの共有がしずらい
- deployが（若干）面倒い

開発合宿という短期間、且つ分担作業になることを考えると、  
別々のパッケージ管理をする方が良いと考える。  
「deployが（若干）面倒い」というデメリットに関しては、
次項でdeploy方法を提案する。

## deploy方法
基本的に以下の５ステップ
- 【画面側】アプリケーションをビルドして、サーバーアプリケーションへ置く
``` sh
$ npm run build
       or
$ ng build
```
``` sh
$ mv [build module path] [server app path]/views
```
- ビルドしたモジュールのパスの公開設定をする
``` index.js
app.use('/game', express.static(path.join(__dirname, 'views/pong-game')));
app.use('/player', express.static(path.join(__dirname, 'views/device-event-with-angular')));
```
- ビルドしたモジュールのルーティングをサーバーアプリケーションに記述する
``` index.js
app.get('/game', (req, res) => res.render('game/index'));
app.get('/player', (req, res) => res.render('player/index'));
```
- ビルドしたindex.html内で、別リソース（js, css）を参照している場合、パスの変更を行う  
例
``` html
<script type="text/javascript" src="runtime.js"></script>
```
↓置換
``` html
<script type="text/javascript" src="player/runtime.js"></script>
```
- サーバーアプリケーションを起動する
``` sh
$ node index.js
// serve http://*.*.*.*:3000
```
