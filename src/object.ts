import { deepGet } from './other';
import { processPipe, pipeApply } from './pipeline';

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
    // console.log('format', format);
    const matches = OObject.getMatches(format, regex);
    // console.log('matches=>', matches);
    const mret = matches.map(o => {
      // console.log('\n$$$$$$$$$$exp==>:', o[1]);

      const exp = o[1].split('|');
      const retExp = exp.map(obj => {
        if (obj === '.') {
          return arg;
        }
        // console.log(' obj=>', obj);
        return deepGet(arg, obj, obj);
      });
      // console.log(' retExp:', retExp);
      let result = null;
      if (retExp.length !== 1) {
        result = retExp.reduce((p, k, index) => {
          let pret = null;
          // console.log('   p=', p, 'k=', k, 'index=', index);
          pret = processPipe(p, k, p);
          // console.log('   return=>', pret);
          if (p === exp[index - 1]) {
            return null;
          }
          return pret;
        });
        // console.log('result is ', result);
        if (result === null || result === {}) {
          return o[0];
        }
        return result;
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
