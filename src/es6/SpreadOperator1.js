// 전개 연산자(...)
// 나열형 자료를 추출하거나 연결할 때 사용
// 배열, 객체, 병수명 앞에 ... 기호를 사용하여 사용
// 배열 객체 함수 인자 ( [ ] ) 표현식 안에서만 동작함

console.log('-----ES5-----');

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined = [array1[0], array1[1], array2[0], array2[1]];
// 배열의 각 요소를 하나씩 추출하여 새로운 배열에 대입
console.log(combined);

var combined = array1.concat(array2);
console.log(combined);

var combined = [].concat(array1, array2);
console.log(combined);

var first = array1[0];
var second = array1[1];
// 배열값이 없어 false 일 때 empty 출력되도록 사용
var three = array1[2] || 'empty';
console.log(first);
console.log(second);
console.log(three);

console.log();
console.log('----- ES6 -----');

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined = [...array1, ...array2];
console.log(combined);

// three 의 기본값 empty 설정
var [first, second, three = 'empty', ...others] = array1;
console.log(first);
console.log(second);
console.log(three);
console.log(others);

var [first, second, three = 'empty', ...others] = [...array1, ...array2];
console.log(first);
console.log(second);
console.log(three);
console.log(others);

// 잘못 사용한 예
//[]
// var wrongArr = ...array1;

var [first, second] = [second, first]; // 데이터 스와핑
console.log(first);
console.log(second);

// 이전에 데이터 스와핑하던 방식
var first = 10;
var second = 20;
var tmp = 0;
tmp = first;
first = second;
second = tmp