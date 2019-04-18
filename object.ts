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

      return format;
    } catch (e) {
      console.log(e);
      return OObject.empty;
    }
  }

  private static getMatches(string, regex) {
    var matches = [];
    var match;
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
    console.log('matches', matches);
    console.log('arg', arg);

    const mret = matches.map(o => {
      const exp = o[1].split('|');
      console.log('exp', exp);

      const retExp = exp.map(obj => {
        console.log('obj=>', obj, 'arg=>', arg);
        if (obj === '.') {
          return arg;
        }
        return deepGet(arg, obj, obj);
      });

      console.log('retExp=>', retExp);
      const result = retExp.reduce((p, k) => {
        // console.log('p=', p, 'k=', k);
        const pret = processPipe(p, k);
        // console.log('   return=>', pret);
        return pret;
      });
      return result;
      //args.reduce(()=>);
    });
    try {
      console.log('-->', format);
      matches.forEach((m, i) => {
        console.log('m[0]=>', m[0], 'mret=>', JSON.stringify(mret[i]));
        format = format.replace(m[0], JSON.stringify(mret[i]));
      });
      console.log('-->format=>', format);
      if (toObject) {
        console.log('==>', JSON.parse(format));
        return JSON.parse(format);
      }else{
        return format;
      }
    } catch (e) {
      return format;
    }
  }
}
