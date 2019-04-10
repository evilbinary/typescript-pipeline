import 'mocha';
import { processPipe } from '../pipeline';
import { multiData } from './data';
import { expect } from 'chai';

describe('test pipe', () => {
  it('should return true on null string', () => {
    let exp = 'omit:_values|pick:SFZJYXQ,XB,XM|map:XM';
    let result = processPipe(multiData, exp);

    const expectedValue = [
      { XM: 'eraaaa' },
      { XM: '小学生' },
      { XM: '临时人员老王' }
    ];
    expect(result).to.equal(expectedValue);
  });
});
