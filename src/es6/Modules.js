// module : 하나의 자바스크립트 파일에서 다른 자바스크립트의 내용을 사용하기 위한 방식
// 자바스크립트는 원래 html을 지원하기 위해서 개발된 언어이었기 때문에 html 문서에서 <script></script>나
//      <script src='파일경로'> </script> 형태로 다른 자바스크립트의 내용을 사용했음
// 자바스크립트가 발전하면서 자바스크립트를 단순히 웹에서만 사용하는 것이 아니게되어 외부 자바스크립트 내용을 사용하기 위한 방법이 여러가지로 개발됨
// ES6부터 export, import를 지원함
// 각각의 자바스크립트 파일은 모듈이라고 불리움
// 하나의 모듈에는 하나의 export default가 존재함


// node.js 가 ES6 버전이 나오기 이전부터 모듈화 시스템을 사용하고 있었음
// node.js 가 기본적으로 사용하던 방식이 CommonJS 방식의 모듈 시스템을 사용하고 있었음
// ES6 가 발표되면서 import/export 를 지원하게 됨
// 기본 방식은 CommonJS 로 사용되고 ES6 방식을 사용하려면 확장자를 .mjs를 사용하던지, package.json 파일에 type:module를 추가하여 설정을 해야 함


// html 문서 내에서 import를 사용하고자 할 경우 <script type='module'>을 사용하여 해당 파일이 모듈을 사용한다는 것을 알려줘야 함
// <script type='module' src='파일경로'></script>


// export : 변수, 함수, 클래스를 다른 자바스크립트 파일에서 사용할 수 있도록 설정
// 사용법 :
//         export 함수명;
//         export {함수명1, 함수명2, ...};
//         export default 함수명;


// import : 다른 자바스크립트 파일이 제공하는 변수, 함수, 클래스를 불러와서 사용하도록 설정
// 사용법 :
//         import {함수명1, 함수명2, ...} from 파일경로; (일반 export로 지정된 것을 불러옴)
//         import 함수명 form 파일경로; (export default로 지정된 것을 불러옴)









