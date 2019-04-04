//자바스크립트 함수의 성질(일급객체)

function plus(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

let p = plus;
console.log("typeof plus : %s", typeof plus);
console.log("type of p : %s", typeof p);
console.log("10 _ 20 = %d", p(10, 20));

//함수를 파라미터로 받는 함수
function calculate(a, b, func) {
    return func(a, b);
}

//함수를 넘겨서 계산
console.log(calculate(10, 20, minus));
console.log(calculate(10, 20, plus));
