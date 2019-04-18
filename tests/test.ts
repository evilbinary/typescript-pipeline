import { multiData } from './data';
import { processPipe } from '../pipeline';
import { OObject } from '../object';

//const exp = 'pick:XM,XB|map:XM';
// const exp = 'omit:_values|pick:SFZJYXQ,XB,XM|object:first,second,third|value:XM,XB|map:XM,XB';
// const exp = 'pick:XM,XB|value:XM,XB|last|nth:0,1';

// let exp = 'pick:XM,XB|dict:"a":b,"c":c,"d":d';
// let exp = 'pick:XM,XB|value:b,c,d';

// const obj = processPipe(multiData, exp);
// var arr = Object.keys(obj).map(key => obj[key]);
// console.log(arr);
// const data = [{ a: { c: 'oooo' } }, { b: 'bbbbbbb' }, { c: '{c.a}', d: 'ddd' },{ a: 'ccc' }];
const data = { a: { c: 'ccccc' }, b: 'bbbbbbb', c: '{c.a}', ee: {a:'aaaaaaaa=>'} };

// const exp='{a:{a}},b:{a}}';
// |pick:a|test:b,c,d
// const exp = '{"a":"{.}","b":"{.}"}';
// const exp = '{"a":{a} }';
// const exp = '{"body":{"first":{a},"second":{b},"third":{.|pick:ee}}}';
const exp = 'a={.|pick:ee}';
const ret = OObject.Format(exp, data,true);
console.log('>>>>>>>>>>>', ret, ' =>', typeof ret);
