let array = new Array(3); 
array[0] = 'A';
array[1] = 'B';
array[2] = 'C';
console.log(array);

let array2 = new Array(1,2,3);
console.log(array2);

let array3 = [1,2,3,4,5]
console.log(array3.length);//5
console.log(array3[2]);//3
array3[4]=10;
console.log(array3[4]);//10


const subway = ['1호선','2호선','3호선','4호선','5호선'];
subway.push('6호선'); //pop()
subway.unshift('0호선');//shift()
subway.splice(2,0,'7호선','8호선');//splice(2,1)
//splice(시작인덱스,삭제할 갯수,추가될 값)
let tatal=""
for(let i = 0 ; i<subway.length ; i++) {
    tatal+=subway[i]
}
console.log(tatal)