let hello = 'Hello World';
alert(hello);

let int1 = 1;
let int2 = -10;
let float1 = 3.14;
let str1 = 'JavaScriptを覚えよう';

alert(int2);

alert(4 + 3);

let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else {
  alert('みかんの値段がりんごより高い');
}

let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num*2;
  count = count + 1;
}

alert('2をかけ続けて' + max + 'を越えるのに必要だった回数は' + count + '回です');

let i;
let num1 = 0;

for(i = 1; i < 11 ; i++ ){
  num1 = num1 + i;
}

alert('1から10まで足した結果は' + num1 + 'です');