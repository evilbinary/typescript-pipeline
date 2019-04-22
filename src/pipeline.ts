import * as pick from 'object.pick';
import * as omit from 'object.omit';
import { deepMerge, deepGet } from './other';

const pickData = (data, col) => {
  if (data instanceof Array) {
    return data.map(o => pick(o, col));
  } else {
    return pick(data, col);
  }
};
const omitData = (data, col) => {
  if (data instanceof Array) {
    return data.map(o => omit(o, col));
  } else {
    return omit(data, col);
  }
};

// copy all ,ignore params
const copyData = (record, args, data) => {
  return record;
};

// merge from params to record
const mergeData = (record, args, data) => {
  return deepMerge({}, record, data);
};

// merge from  record to params
const overrideData = (record, args, data) => {
  return deepMerge({}, data, record);
};

const mergeToRecord = (record, args, data) => {
  const ret = deepMerge(record, data);
  return ret;
};

const map = (record, args, data) => {
  if (record instanceof Array) {
    return record.map(o => {
      return o[args[0]];
    });
  } else {
    return pick(record, args);
  }
};

const value = (record, args, data) => {
  if (record instanceof Array) {
    return record.map(obj => {
      if (args.length > 0) {
        obj = pick(obj, args);
      }
      return Object.keys(obj).map(key => obj[key]);
    });
  } else {
    const ret = Object.keys(record).map(key => record[key]);
    if (args.length > 0) {
      return pickData(ret, args);
    }
    return ret;
  }
};

const nth = (record, args, data) => {
  if (record instanceof Array) {
    let array = null;
    args.forEach(i => {
      if (array == null) {
        array = record[i];
      } else {
        if (array instanceof Array) {
          array = array.concat(record[i]);
        } else {
          array = [array].concat(record[i]);
        }
      }
    });
    return array;
  }
  return record;
};
const first = (record, args, data) => {
  if (record instanceof Array) {
    if (args.length > 0) {
    } else {
      args = [0];
    }
    return nth(record, args, data);
  }
  return record;
};
const last = (record, args, data) => {
  if (record instanceof Array) {
    if (args.length > 0) {
      args.forEach(e => {
        e = record.length - e;
      });
    } else {
      args = [record.length - 1];
    }
    return nth(record, args, data);
  }
  return record;
};
const decode = (record, args, data) => {
  const coder = args instanceof Array ? args[0] : args;
  return Buffer.from(JSON.stringify(record)).toString(coder);
};

const base64 = (record, args, data) => {
  return decode(record, 'base64', data);
};

// function getGet(obj: any, path: string | string[], defaultValue?: any) {
//   if (!obj || path == null || path.length === 0) return defaultValue;
//   if (!Array.isArray(path)) {
//     path = ~path.indexOf('.') ? path.split('.') : [path];
//   }
//   if (Array.isArray(obj)) {
//     console.log('is array path=>',path);
//     return obj.map(e=>{
//       console.log('ee=>',e, 'path=>',path);
//       const ret= getGet(e,path,defaultValue);
//       console.log('ret=>',ret);
//     })
//   } else {
//     if (path.length === 1) {
//       const checkObj = obj[path[0]];
//       return typeof checkObj === 'undefined' ? defaultValue : checkObj;
//     }
//     return (
//       path.reduce((o, k) => {
//         console.log('o=>', o, 'k=>', k);
//         return (o || {})[k], obj;
//       }) || defaultValue
//     );
//   }
// }

// const get = (record, args, data) => {
//   console.log('args=>', args);
//   return getGet(record, args[0], data);
// };

const toObj = (ks, vs) =>
  ks.reduce((o, k, i) => {
    o[k] = vs[i];
    return o;
  }, {});

const object = (record, args, data) => {
  if (record instanceof Array) {
    return toObj(args, record);
  }
  return record;
};
const string = (record, args, data) => {
  return JSON.stringify(object(record, args, data));
};

const fpipe = {
  pick: pickData,
  omit: omitData,
  copy: copyData,
  merge: mergeData,
  override: overrideData,
  mergeToRecord: mergeToRecord,
  map: map,
  value: value,
  nth: nth,
  object: object,
  string: string,
  last: last,
  first: first,
  decode: decode,
  base64: base64
  // get: get
};
// const exp = 'pick:XM,GH';
export const processPipe = (record, exp, data?) => {
  const funs = exp.split('|');
  let ret = record;
  funs.forEach(e => {
    const ee = e.split(':');
    const fname = ee[0];
    let args = [];
    if (ee[1]) {
      args = ee[1].split(',');
    }
    if (fpipe[fname]) {
      // console.log('fname:', fname, args, data);
      ret = fpipe[fname](ret, args, data);
      // console.log('ret:', ret);
    }
  });
  return ret;
};
export const pipeApply = (fname, args, data) => {
  let ret = null;
  // console.log('fname:', fname, args, data);
  if (fpipe[fname]) {
    ret = fpipe[fname](data, args, data);
  }
  return ret;
};
