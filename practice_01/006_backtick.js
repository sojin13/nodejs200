const greeting1 = 'hello';
const greeting2 = 'bye';
const name1 = 'sojin';
const name2 = 'jiny';

const statement = `${greeting1}! my name is ${name2}`;
const statement2 = `${greeting2}! my name is ${name2}`;

console.log(`${greeting1}! my name is ${name1}`);
console.log(`${greeting2}! my name is ${name1}`)
console.log('statement:', statement);
console.log('statement2:', statement2);

const string10 = '10';
const string20 = '20';
const number10 = 10;
const number20 = 20;

console.log('string:%s', string10 + string20);
console.log('number:%d', number10 + number20);
console.log('string + number:%s', string10 + number20);

const isNaN123 = isNaN(123);
const isNaNMinus123 = isNaN(-123);
const isNaN234 = isNaN('234');
const isNaNHello = isNaN('hello');

console.log('isNaN123:', isNaN123);
console.log('isNaNMinus123:', isNaNMinus123);
console.log('isNaN234:', isNaN234);
console.log('isNaNHello', isNaNHello);