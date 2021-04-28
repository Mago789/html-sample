console.log("Hello World");

alert("Hello World!!");

console.log(5 + 3);
console.log(5 - 3);
console.log(4 * 2);
console.log(4 / 2);
console.log(9 / 5);
console.log("5 + 3");
console.log("5" + "3");
console.log("ABC" + "DEF");

var name = "tanaka";
console.log(name);

var name ="tanaka"
console.log(name + "tarou");

var x =1 + 100;
alert(x);

x = 2;
alert(x);

x = x + 2;
alert(x);

//x = x + 1 ... x += 1 省略した記述方法　他の四則演算も可能

a === b //aとbが等しい
a !== b //aとbが等しくない
a < 0

// && = かつ
// xが2の時 x > 1 && x < 3 複数の条件が全て真

// | | = または
// xが2の時 x < 1 || x < 3 複数の条件のうち片方が真

if1 = 5
if (if1 > 0){ // 条件式がtrueの時実行
    if1 = if1
} else if (if1 < 0 && if1 > -2){ // 条件1がfalse,条件2がtrue
    if1 = if1 * 2
} else { // 条件1,2がfalse
    if1 = -if1
}

for (var x = 1; x <= 1; x += 1){
    // for (変数の定義;条件式;変数の更新)
    console.log(x);
}

var food = "チョコレート";
switch (food){
    case "チョコレート": // 式の結果が値1に等しい時
        console.log("チョコレートは食べ物です");
        bleak;
    case "コーラ": // 式の結果が値２に等しい時
        console.log("コーラは飲み物です");
        bleak;
    default:　// 式の結果がどれにも当てはまらない時
        console.log("食べ物でも飲み物でもありません")
}

var x = 1;
while (x <= 5){ // 条件の真偽
    console.log(x); // 繰り返す処理
    x += 1; // 変数の更新
}

var name1 = "tanaka";
var name2 = "sasaki";
var name3 = "yamada"; // 配列を使うとシンプルになる
var name = ["tanaka", "sasaki", "yamada"]
console.log(name); // 配列の出力
var name = ["tanaka", "sasaki", "yamada"]
console.log(name[0]); // 配列の要素を取り出す

var name = ["tanaka", "sasaki", "yamada"]
console.log(name[0]); // 出力結果tanaka

var name = ["tanaka", "sasaki", "yamada"]
name.push("suzuki")
console.log(name); //出力結果tanaka,sasaki,yamada,suzuki

var fruit = {
    "name": "banana",
    "color": "yellow"
}; // 連想配列は複数の値それぞれにキーと呼ばれる名前をつけて管理する
console.log(fruit.name); // 出力結果; banana

function hello(){ // 関数
    console.log("こんにちは")
}
hello(); // 出力結果:こんにちは
