//関数を宣言
const today = new Date();

// 各部品の取得
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

// コンソールで出力
console.log(year + '年' + month + '月' + day + '日');


