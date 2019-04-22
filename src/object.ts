import { deepGet } from './other';
import { processPipe } from './pipeline';

const regexObject = /{([\w|\.|\\|:|,]*)}/g;

export class OObject {
  public static empty: any = null;

  public static Format(
    format: string,
    args: any,
    toObject: boolean = false
  ): string {
    try {
      return OObject.format(regexObject, format, args, toObject);
    } catch (e) {
      console.log(e);
      return OObject.empty;
    }
  }

  private static getMatches(string, regex) {
    const matches = [];
    let match = null;
    // tslint:disable-next-line: no-conditional-assignment
    while ((match = regex.exec(string))) {
      matches.push(match);
    }
    return matches;
  }

  private static format(
    regex: any,
    format: string,
    arg: any,
    toObject: boolean = false
  ): any {
    const matches = OObject.getMatches(format, regexObject);
    const mret = matches.map(o => {
      const exp = o[1].split('|');
      // console.log('exp==>:', o[0]);
      const retExp = exp.map(obj => {
        if (obj === '.') {
          return arg;
        }
        // console.log('obj=>', '{' + obj + '}');
        return deepGet(arg, obj, obj);
      });
      // console.log('retExp:', retExp);
      let result = null;
      if (retExp.length != 1) {
        result = retExp.reduce((p, k) => {
          // console.log('p=', p, 'k=', k);
          const pret = processPipe(p, k);
          // console.log('   return=>', pret);
          return pret;
        });
        if (result == null || result == {} || Object.keys(result).length == 0) {
          // console.log('result is null');
          return o[0];
        }
      } else {
        // console.log('o[0]', o[1], ' retExp[0]', retExp[0]);
        result = o[1] === retExp[0] ? o[0] : retExp[0];
      }
      // console.log('result:', result);
      return result;
      // args.reduce(()=>);
    });
    try {
      matches.forEach((m, i) => {
        if (typeof mret[i] === 'string' || typeof mret[i] === 'number') {
          format = format.replace(m[0], mret[i]);
        } else {
          format = format.replace(m[0], JSON.stringify(mret[i]));
        }
      });
      if (toObject) {
        return JSON.parse(format);
      } else {
        return format;
      }
    } catch (e) {
      return format;
    }
  }
}
