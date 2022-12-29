import {name, job, gender, getInfo} from "./Mymod1.mjs";
import {num1, num2, sum} from './Mymod2.mjs';
import sub from './Mymod2.mjs';


console.log(name);
console.log(job);
console.log(gender);
getInfo();

console.log(`첫 번째 숫자 : ${num1} + 두 번째 숫자 : ${num2} 의 값 : ${sum()}`);
console.log(`sub() 실행 : ${sub()}`);