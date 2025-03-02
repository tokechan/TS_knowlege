# TS_knowlege

## メリット

型定義できるので、チーム開発時に効率化できる

プロパティなどがいちいち読み解かなくて定義されているから

## デメリット

JS の柔軟なコードスタイルが使えないので不自由さを感じる

型を定義するので、時間がかかる

[tsc]が JS へコンパイルしてブラウザに JS が認識される

CLI で使用する　 webpack がビルドしてくれる

ファイル拡張子　 ts、tsx

## プリミティブ型　基本的な値のこと　データ型

`文字列　let str: string =”Hello”;`

`数値  let num: number = 100;`

`巨大な数値 let bignum: bigint = 103n; (tsconfig,json で target を指定できる　em2021)`

`真偽値 let bool: boolean = true;`

`null let nullish: null = null;`

`undefined  let undefineValue: undifinde = undefined;`

## リテラル型　特定の値を設定できる　文字列、数値

`let trueVal: true = true;`

`let num123: 123 = 123;  OK`

number の数値で 123 しか受けつけない

`num123 = 456; NG これを書くとエラーになる`

`let strHello: ‘Hello’ = ‘Hello’;  OK`

`‘Hello’ = ‘Hi’; NG エラーを吐く`

## ユニオン型は複数の方を組み合わせて「型 T または型 U」のような、「または」の意味を表すことができる

ポイントは T | U というように、| を用いてユニオン型を表す

ユニオン型はリテラル型組み合わせることでリテラル型の必要性がわかる

`let strOrNum: string | number = ‘Hello’;`

`strOrNum = 123; OK`

エラーはでない！コンソールに出すと 123 が表示される

`strOrNum = ’Hello’;  OK`

`strOrNum = true; NG 型定義されてないから`

`let helloOrNumOrBool: ‘Hello’ | number | boolean = false;`

`type HelloOrNum =  ‘Hello’ | number;`

`const hello: HelloOrNum = ‘Hello’;`

## 配列の定義

`const arry1: number[] = [1,2,3];`

`const arry2: string[] = [’hello’,’bye’];`

`const aary3: Array<nmber> = [1,2,3,]; ジェネリック型`

`const aary4: (string | number)[] = [1,’hello’];ユニオン型を使用した配列`

## オブジェクトの定義

`const obj1: {name: string, age: number } = {name: ‘toke’ , age: 38 };`

[`obj1.name](http://obj1.name) = 38; NG 型が違うのでエラー`

`type Person ＝ { name: strign, age: number }`

`const obj2: Person = { name: ‘toke’ };` NG これは Person 型で定義されている age: number が記述されていないので型エラーが起きる

`type Person ＝ { name: strign, age？: number }`

`const obj2: Person = { name: ‘toke’ };` OK。？を入れるだけで、age プロパティを任意にできるという意味なり

入れてもいいし、入れなくてもいいとなるので型エラーは起きない

また、存在しないプロパティを書くとエラーになる

## オブジェクトを含む配列

`const users: Person[] = [`

`{ name: ‘toke’ },`

`{ name: ‘nori’ },`

`]`

## 関数の定義

`function add(a: number, b: number): number {`

`return a + b;`

`}`

`const add2 = (a: number, b: number): number => {`

`return a + b;`

`}`
