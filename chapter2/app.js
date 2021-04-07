
var hello = "Hello World";
alert(hello);

// 変数
var int1 = 1;
var int2 = -10;
var float1 = 3.14;
var str1 = "JavaScriptを覚えよう";

alert(str1)


// 四則演算
alert(4 + 3);
alert(8 - 5);
alert(2 * 6);
alert(10 / 2);


// 文字列の結合
alert("Hello" + "World");

var str1 = "Hello";
var str2 = "World!!!";
alert(str1 + str2);


// 条件分岐
var orange = 100;
var apple = 120;

if(orange < apple){
  alert("みかんの値段がりんごより安い");
} else if(orange == apple){
  alert("みかんとりんごが同じ値段");
} else{
  alert("みかんの値段がりんごより高い")
}


// 繰り返し処理
var max = 100;
var num = 1;
var count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert("2を掛け続けて" + max + "を超えるのに必要だった回数は" + count + "回です");


// for文の記述
var i;
var num = 0;

for(i = 1; i < 11; i ++){
  num = num + i;
}

alert("1から10まで足し算した結果は" + num + "です");


// 確認問題
var plus = 10 + 2;
var minus = 10 - 2;
var multiple = 10 * 2;
var div = 10 / 2;

alert(plus);
alert(minus);
alert(multiple);
alert(div);