# old-js
## これは何？
古いJSをテストできるか検証したもの。  
ブランチ`master`はできるだけ簡単にカウンターアプリを作ってみた。  
ブランチ`mixed`は二つのカウンターが依存するケースについて作ってみた。  
どちらも、局所的にテスト可能な感じ  

## how to test
```
$ ndenv local v8.5.0
$ npm install
テスト実行
$ `npm bin`/mocha  tests/test_index.js
```

## 動作確認
index.htmlをブラウザで開く。
