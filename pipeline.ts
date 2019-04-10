import * as pick from 'object.pick';
import * as omit from 'object.omit';
import { deepMerge } from './other';

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
    return record.map(o => pick(o, args));
  } else {
    return pick(record, args);
  }
};

const value = (record, args, data) => {
  if (record instanceof Array) {
    return record.map(o => o[args[0]]);
  } else {
    return record[args[0]];
  }
};

const nth = (record, args, data) => {
  if (record instanceof Array) {
    let array = [];
    args.forEach(i => {
      array = array.concat(record[i]);
    });
    return array;
  }
  return record;
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
  nth: nth
};
// const exp = 'pick:XM,GH';
export const processPipe = (record, exp, data?) => {
  const funs = exp.split('|');
  let ret = record;
  funs.forEach(e => {
    const ee = e.split(':');
    const fname = ee[0];
    let args = {};
    if (ee[1]) {
      args = ee[1].split(',');
    }
    if (fpipe[fname]) {
      ret = fpipe[fname](ret, args, data);
    }
  });
  return ret;
};
