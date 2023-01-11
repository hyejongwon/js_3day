let num1 = 50; 
const num2 = 6.1256; 
console.log(num2.toFixed(2)) //123456.13
console.log(num2.toPrecision(4))
console.log(num2.toString()) 
console.log(Number.MAX_VALUE)

console.log(Math.ceil(10.33))  //올림 11
console.log(Math.floor(10.73)) //내림 10
console.log(Math.round(10.53)) //반올림 11
console.log(Math.min(1,5,10)) //1
console.log(Math.max(1,5,10)) //10
console.log(Math.round(Math.random()*100)) // 0 - 1 사이 무작위 수 
//random 이용해서 5자리 인증번호출력 

let pass="";
for(let i=1 ; i<6 ;i++){
    pass+=(Math.floor(Math.random()*10));
}
console.log(pass)

const text = 'Hello World!';
console.log(text.length);
console.log(text.charAt(0)); 
console.log(text.charAt(6));
console.log(text.indexOf('')) ; 
console.log(text.toUpperCase());
console.log(text.substring(-2, 3));
console.log(text.slice(-2,6));
console.log(text.slice(-2));
console.log(text.slice(2,-2));
console.log(text.substring(2,-2));
const spacetxt1 = '       aaaa      bbbb ';
console.log(spacetxt1.trim());
const spacetxt2='aaaa-bbbb-cccc-dddd';
console.log(spacetxt2.split('-'));

  //slice(n) n 번째 인덱스 부터 끝까지 추출  
  //slice(n , m) n번째 부터 m 까지 추출 
  //slice 음수면  뒤부터 계산 
 //substring   음수가 오면 0 
 
