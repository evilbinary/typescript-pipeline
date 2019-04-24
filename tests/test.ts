import { multiData } from './data';
import { processPipe } from '../src/pipeline';
import { OObject } from '../src/object';

//const exp = 'pick:XM,XB|map:XM';
// const exp = 'omit:_values|pick:SFZJYXQ,XB,XM|object:first,second,third|value:XM,XB|map:XM,XB';
// const exp = 'pick:XM,XB|value:XM,XB|last|nth:0,1';

// let exp = 'pick:XM,XB|dict:"a":b,"c":c,"d":d';
// let exp = 'pick:XM,XB|value:b,c,d';

// const obj = processPipe(multiData, exp);
// var arr = Object.keys(obj).map(key => obj[key]);
// console.log(arr);

// const data = [{ a: { c: 'oooo' } }, { b: 'bbbbbbb' }, { c: '{c.a}', d: 'ddd' },{ a: 'ccc' }];
// const data = {
//   a: { c: 'ccccc' },
//   b: 'bbbbbbb',
//   c: '{c.a}',
//   ee: { a: 'aaaaaaaa' }
// };
// const data = JSON.parse(
//   '{"a":{"c":"ccccc"},"b":"bbbbbbb","c":"{c.a}","ee":{"a":"aaaaaaaa","b":"bbbbbbb","cccc":"ccccc"}}'
// );
// const exp='{a:{a}},b:{a}}';
// |pick:a|test:b,c,d
// const exp = '{"a":{.},"b":{.}}';
// const exp = '{"a":{a} }';
// const exp = '{"body":{"first":{a},"second":{b},"third":{.|pick:ee|string}}}';
// const exp = '{.|string}';
// const exp = '{"test":{a}}';
// const exp = '{ee|omit:a}';

/*
const data = multiData[0];
const exp ='{pathConfig.linkPath|obj}/api/user/delete/{objectId},{gaga},{pathConfig.linkPath}';
// const exp = 'hello="{ee|omit:a|base64}",gaga={a|base64}';
const data2 = {
  pathConfig: {
    linkPath: 'hello'
  }
};
console.log('#exp:', exp);
const test = OObject.Format(exp, data, true);
console.log('#exp test:', test);
const result = OObject.Format(test, data2, true);
// console.log('data:', data);
console.log('#result:', result, ' =>', typeof result);
*/

/*
const exp = 'hello={ee|omit:a},gaga={a}';
const data = JSON.parse(
  '{"a":{"c":"ccccc"},"b":"bbbbbbb","c":"{c.a}","ee":{"a":"aaaaaaaa","b":"bbbbbbb","cccc":"ccccc"}}'
);
const result = OObject.Format(exp, data, true);
console.log('#result:', result, ' =>', typeof result);
*/


const exp = 'hello={""},gaga={a},test={$b},test={_b},toUrl=>{ee|toUrl:noEncode}';
const data = JSON.parse(
  '{"a":{"c":"ccccc"},"_b":"_b_b_","$b":"bbbbbbb","c":"{c.a}","ee":{"a":"aaaaaaaa","b":"bbbbbbb","cccc":"哈哈"}}'
);
const result = OObject.Format(exp, data, true);
console.log('#result:', result, ' =>', typeof result);