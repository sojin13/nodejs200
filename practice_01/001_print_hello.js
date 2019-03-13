console.log('hello');

// ES5 스타일
function printHelloEs5() {
    console.log('hello es5');
}

// ES6 스타일
const printHelloEs6 = () => {
    console.log('hello es6');
}

printHelloEs5();
printHelloEs6();

//005

console.log('name:%s', 'sojin'); // 템플릿형식
console.log('age:%d', 31); // 숫자는 %d
console.log('pi:%d', 3.14); // 숫자는 %d
console.log('math:%d science:%d', 92, 84); //2가지 같이 쓰기
console.log('name:%s age:%d', 'sojin', 29); //여러가지 같이 쓰기
console.log('name:%s math:%d science:%d', 'sojin', 92, 91); //%s로 다 쓰기