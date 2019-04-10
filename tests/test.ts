import { multiData } from './data';
import { processPipe } from '../pipeline';

//const exp = 'pick:XM,XB|map:XM';
// const exp = 'omit:_values|pick:SFZJYXQ,XB,XM|object:first,second,third|value:XM,XB|map:XM,XB';
const exp = 'pick:XM,XB|value:XM,XB|last|nth:0,1';

// let exp = 'pick:XM,XB|dict:"a":b,"c":c,"d":d';
// let exp = 'pick:XM,XB|value:b,c,d';

console.log(processPipe(multiData, exp));

// const obj = processPipe(multiData, exp);
// var arr = Object.keys(obj).map(key => obj[key]);
// console.log(arr);
