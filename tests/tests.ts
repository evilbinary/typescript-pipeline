import 'mocha';
import { processPipe } from '../src/pipeline';
import { multiData } from './data';
import { expect } from 'chai';
import { OObject } from '../src/object';

describe('test pipe', () => {
  it('should return true on null string', () => {
    let exp = 'omit:_values|pick:SFZJYXQ,XB,XM|pick:XM';
    let result = processPipe(multiData, exp);
    const expectedValue = [
      { XM: 'eraaaa' },
      { XM: '小学生' },
      { XM: '临时人员老王' }
    ];
    expect(result).to.deep.equals(expectedValue);
  });
});
const munipulate = (exp, data, expectValue?) => {
  const result = OObject.Format(exp, data, true);
  if (expectValue) {
    expect(result).to.deep.equals(expectValue);
  }
  return result;
};
describe('test json manipulate', () => {
  it('to any body', () => {
    const exp = 'hello={ee|omit:a},gaga={a}';
    const data = JSON.parse(
      '{"a":{"c":"ccccc"},"b":"bbbbbbb","c":"{c.a}","ee":{"a":"aaaaaaaa","b":"bbbbbbb","cccc":"ccccc"}}'
    );
    const result = OObject.Format(exp, data, true);
    const expectedValue =
      'hello={"b":"bbbbbbb","cccc":"ccccc"},gaga={"c":"ccccc"}';
    expect(result).to.deep.equal(expectedValue);
  });

  it('to any body', () => {
    const result = munipulate(
      '{a:{a}},b:{a}}',
      {
        a: { c: 'ccccc' },
        b: 'bbbbbbb',
        c: '{c.a}',
        ee: { a: 'aaaaaaaa' }
      },
      '{a:{"c":"ccccc"}},b:{"c":"ccccc"}}'
    );
  });
  it('should be string', () => {
    munipulate(
      '{pathConfig.linkPath}/api/user/delete/{objectId},{gaga}',
      multiData[0],
      'pathConfig.linkPath/api/user/delete/5cac093d587bfc276cf9dbc0,12341234'
    );
  });

  it('test omit', () => {
    munipulate(
      'hello={ee|omit:a},gaga={a}',
      JSON.parse(
        '{"a":{"c":"ccccc"},"b":"bbbbbbb","c":"{c.a}","ee":{"a":"aaaaaaaa","b":"bbbbbbb","cccc":"ccccc"}}'
      ),
      'hello={"b":"bbbbbbb","cccc":"ccccc"},gaga={"c":"ccccc"}'
    );
  });

  it('test .', () => {
    munipulate(
      '{"a":{.},"b":{.}}',
      {
        a: { c: 'ccccc' },
        b: 'bbbbbbb',
        c: '{c.a}',
        ee: { a: 'aaaaaaaa' }
      },
      {
        a: {
          a: { c: 'ccccc' },
          b: 'bbbbbbb',
          c: '{c.a}',
          ee: { a: 'aaaaaaaa' }
        },
        b: {
          a: { c: 'ccccc' },
          b: 'bbbbbbb',
          c: '{c.a}',
          ee: { a: 'aaaaaaaa' }
        }
      }
    );
  });

  it('test base64', () => {
    munipulate(
      'hello="{ee|omit:a|base64}",gaga={a|base64}',
      JSON.parse(
        '{"a":{"c":"ccccc"},"b":"bbbbbbb","c":"{c.a}","ee":{"a":"aaaaaaaa","b":"bbbbbbb","cccc":"ccccc"}}'
      ),
      'hello="eyJiIjoiYmJiYmJiYiIsImNjY2MiOiJjY2NjYyJ9",gaga=eyJjIjoiY2NjY2MifQ=='
    );
  });

  it('test html', () => {
    munipulate(
      '<html><head></head><div>编号：{IDCARD}</div><div>性别：{XB}</div></head><body><body></html>',
      multiData[0],
      '<html><head></head><div>编号：34234234</div><div>性别：男性</div></head><body><body></html>'
    );
  });
});
