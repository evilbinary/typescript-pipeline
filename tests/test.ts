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

/*
const exp = 'hello={""},gaga={a},test={$b},test={_b},toUrl=>{ee|toUrl:noEncode}';
const data = JSON.parse(
  '{"a":{"c":"ccccc"},"_b":"_b_b_","$b":"bbbbbbb","c":"{c.a}","ee":{"a":"aaaaaaaa","b":"bbbbbbb","cccc":"哈哈"}}'
);
const result = OObject.Format(exp, data, true);
console.log('#result:', result, ' =>', typeof result);*/

// const exp = '{.|map:objectId}';
// const data = JSON.parse(
//   '[{"SFZJYXQ":"","CSRQ":"2019-04-11","GH":"yufengli001","ISINITIALPASSWORD":true,"XM":"asdfasd","SFZJH":"12341234123","SFZJLX":"士兵证","XB":"男性","MZ":"汉族","LASTCHANGEPASSWORDTIME":"2019-04-23T16:00:00.000+0000","objectId":"5cbfd61e1acd5d271fdf89c1","_values":[{"text":"yufengli001","org":"yufengli001"},{"text":"yufengli001","org":"yufengli001"},{"text":"asdfasd","org":"asdfasd"},{"text":""},{"text":"男性","org":"男性"},{"text":"2019-04-11","org":"2019-04-11"},{"text":"士兵证","org":"士兵证"},{"text":"12341234123","org":"12341234123"},{"text":""}],"checked":true},{"GH":"ceshi1","ISINITIALPASSWORD":true,"LASTCHANGEPASSWORDTIME":"2019-04-23T16:00:00.000+0000","objectId":"5cbfd9b61acd5d271fdf89d6","_values":[{"text":"ceshi1","org":"ceshi1"},{"text":"ceshi1","org":"ceshi1"},{"text":""},{"text":""},{"text":""},{"text":""},{"text":""},{"text":""},{"text":""}],"checked":true},{"CSRQ":"2019-04-05","SFZJYXQ":"2019-04-02","ISINITIALPASSWORD":true,"SFLBDM":"01","XM":"BCH","SFZJH":"123010101010101025","SFZJLX":"军官证","XB":"男性","MZ":"汉族","LASTCHANGEPASSWORDTIME":"2019-04-23T16:00:00.000+0000","objectId":"5cbfdc0c1acd5d271fdf89e5","_values":[{"text":""},{"text":""},{"text":"BCH","org":"BCH"},{"text":""},{"text":"男性","org":"男性"},{"text":"2019-04-05","org":"2019-04-05"},{"text":"军官证","org":"军官证"},{"text":"123010101010101025","org":"123010101010101025"},{"text":""}],"checked":true},{"SFZJYXQ":"2020-04-01","GJ":"中国","SFZJLX":"居民身份证","XB":"男性","MZ":"汉族","CSRQ":"2019-04-19","ISINITIALPASSWORD":true,"SFLBDM":"01","XM":"110","SFZJH":"1234567890","JG":["上海市","县","崇明县"],"LASTCHANGEPASSWORDTIME":"2019-04-23T16:00:00.000+0000","objectId":"5cbffc0d1acd5d271fdf8a2e","_values":[{"text":""},{"text":""},{"text":"110","org":"110"},{"text":""},{"text":"男性","org":"男性"},{"text":"2019-04-19","org":"2019-04-19"},{"text":"居民身份证","org":"居民身份证"},{"text":"1234567890","org":"1234567890"},{"text":""}],"checked":true},{"CSRQ":"2019-04-03","SFZJYXQ":"","ISINITIALPASSWORD":true,"SFLBDM":"01","XM":"err","SFZJH":"12131313","SFZJLX":"护照","XB":"女性","MZ":"汉族","LASTCHANGEPASSWORDTIME":"2019-04-23T16:00:00.000+0000","objectId":"5cbffec51acd5d271fdf8a4b","_values":[{"text":""},{"text":""},{"text":"err","org":"err"},{"text":""},{"text":"女性","org":"女性"},{"text":"2019-04-03","org":"2019-04-03"},{"text":"护照","org":"护照"},{"text":"12131313","org":"12131313"},{"text":""}],"checked":true},{"GH":"error1","ISINITIALPASSWORD":true,"LASTCHANGEPASSWORDTIME":"2019-04-23T16:00:00.000+0000","objectId":"5cc000371acd5d271fdf8a5a","_values":[{"text":"error1","org":"error1"},{"text":"error1","org":"error1"},{"text":""},{"text":""},{"text":""},{"text":""},{"text":""},{"text":""},{"text":""}],"checked":true},{"SFZJYXQ":"","CSRQ":"2019-04-02","GH":"dahai","ISINITIALPASSWORD":true,"SFLBDM":"01","XM":"dahai","SFZJH":"371081198401282611","SFZJLX":"居民身份证","XB":"男性","MZ":"朝鲜族","LASTCHANGEPASSWORDTIME":"2019-04-23T16:00:00.000+0000","objectId":"5cc001a4375a33c76493d0ab","_values":[{"text":"dahai","org":"dahai"},{"text":"dahai","org":"dahai"},{"text":"dahai","org":"dahai"},{"text":""},{"text":"男性","org":"男性"},{"text":"2019-04-02","org":"2019-04-02"},{"text":"居民身份证","org":"居民身份证"},{"text":"371081198401282611","org":"371081198401282611"},{"text":""}],"checked":true},{"SFZJYXQ":"2019-04-30","CSRQ":"2019-04-24","GH":"zt001","ISINITIALPASSWORD":true,"SFLBDM":"01","XM":"zt","SFZJH":"4112223","SFZJLX":"居民身份证","XB":"男性","MZ":"苗族","LASTCHANGEPASSWORDTIME":"2019-04-23T16:00:00.000+0000","objectId":"5cc0021f1acd5d271fdf8a62","_values":[{"text":"zt001","org":"zt001"},{"text":"zt001","org":"zt001"},{"text":"zt","org":"zt"},{"text":""},{"text":"男性","org":"男性"},{"text":"2019-04-24","org":"2019-04-24"},{"text":"居民身份证","org":"居民身份证"},{"text":"4112223","org":"4112223"},{"text":""}],"checked":true},{"SFZJYXQ":"","CSRQ":"","GH":"444444","ISINITIALPASSWORD":true,"SFLBDM":"01","XM":"BCH","SFZJH":"33","SFZJLX":"护照","XB":"男性","MZ":"布依族","LASTCHANGEPASSWORDTIME":"2019-04-23T16:00:00.000+0000","objectId":"5cc003cd375a33c76493d0ac","_values":[{"text":"444444","org":"444444"},{"text":"444444","org":"444444"},{"text":"BCH","org":"BCH"},{"text":""},{"text":"男性","org":"男性"},{"text":"","org":""},{"text":"护照","org":"护照"},{"text":"33","org":"33"},{"text":""}],"checked":true},{"SFZJYXQ":"","CSRQ":"","GH":"bch","ISINITIALPASSWORD":true,"SFLBDM":"01","XM":"bch","SFZJH":"311","SFZJLX":"护照","XB":"男性","MZ":"布依族","LASTCHANGEPASSWORDTIME":"2019-04-23T16:00:00.000+0000","objectId":"5cc00b93375a33c76493d0ae","_values":[{"text":"bch","org":"bch"},{"text":"bch","org":"bch"},{"text":"bch","org":"bch"},{"text":""},{"text":"男性","org":"男性"},{"text":"","org":""},{"text":"护照","org":"护照"},{"text":"311","org":"311"},{"text":""}],"checked":true}]'
// );
// const result = OObject.Format(exp, data, true);
// console.log('#result:', result, ' =>', typeof result);

const exp = '{.|toUrl}';
const data = JSON.parse('{"a":"a1","b":"a2","c":"a3"}');
const result = OObject.Format(exp, data, true);
console.log('#result:', result, ' =>', typeof result);
