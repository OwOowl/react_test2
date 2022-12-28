// TemplateString :

// ES6에 새로 추가된 문자열 사용 방식
// `` 기호 안에 문자열을 입력하는 방식
// `` 안에 ${변수명}을 사용하여 바로 변수 내용 출력
// ${} 내부에서 간단한 연산도 가능

console.log('----- ES5 버전 -----');

var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = string1 + ' ' + string2;
console.log(greeting);

var product = {name: '도서', price: '4200원'};
var message = '제품 ' + product.name + "의 가격은 " + product.price + '입니다.';
console.log(message);

var multiLine = '문자열1\n문자열2';
console.log(multiLine);

var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = '곱셈값은 ' + (value1 * value2) + '입니다';
console.log(operator1);
var operator2 = '불리언 값은 ' + (boolValue ? '참' : '거짓') + '입니다';
console.log(operator2);

console.log()
console.log('----- ES6 버전 -----');
console.log()

var string1 = '안녕하세요';
var string2 = '반갑습니다.';
var greeting = `${string1}${string2}`;
console.log(greeting);

var product = {name: '도서', price: '4200원'};
var message = `제품 ${product.name}의 가격은 ${product.price}입니다.`;
console.log(message);

var multiLine = `문자열1
문자열2`;
console.log(multiLine);

var value1 = 1;
var value2 = 2;
var boolvalue = false;
var operator1 = `곱셈값은 ${value1 * value2}입니다`;
console.log(operator1);
var operator2 = `불리언 값은 ${boolvalue ? '참' : '거짓'}입니다`;
console.log(operator2);
