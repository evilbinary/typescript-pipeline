import { multiData } from './data';
import { processPipe } from '../pipeline';

const exp = 'pick:XM,XB|value:XM,XB|nth:0,1';
// const exp = 'omit:_values|pick:SFZJYXQ,XB,XM|map:XM';

console.log(processPipe(multiData, exp));
