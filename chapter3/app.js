// 変数の宣言
var alertString;
// 宣言した変数に関数を代入
alertString = addString("WebCamp");


// 作成した関数を呼び出す
alert(alertString);


// 関数の作成
function addString(strA){
  var addStr = "Hello" + strA;
  return addStr;
}


//文字の入力＆出力
var promptStr = prompt("何か好きな文字を入力してください。");
alert(promptStr);





//じゃんけん
//じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");

// グー・チョキ・パー以外の文字列の場合
while((user_hand != "グー")&&(user_hand == "チョキ")&&(user_hand == "パー")&&(user_hand != null)){
  alert("グー・チョキ・パーのいずれかを入力してください。");
  user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
}

// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();

// ユーザーの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = winLose(user_hand, js_hand);

// 結果を表示する
if(user_hand != null){
  alert("あなたの選んだ手は" + user_hand + "です。\nJavaScriptの選んだ手は" + js_hand + "です。\n結果は" + judge + "です。");
} else{
  alert("またチャレンジしてね。")
}


// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  var js_hand_num = Math.floor(Math.random() * 3);

  if(js_hand_num == 0){
    hand = "グー";
  } else if(js_hand_num == 1){
    hand = "チョキ";
  } else if(js_hand_num == 2){
    hand = "パー";
  }

  return hand;
}

// ユーザーの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user,js){
  var winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}