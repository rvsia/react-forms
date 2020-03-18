/* eslint-disable no-unused-vars */
import { isValidElement } from 'react';
import Validators from '../files/validators';

const HAS_PROP = {}.hasOwnProperty;
export const TO_STRING = {}.toString;

const isObject = (obj) => typeof obj === 'object' && TO_STRING.call(obj) === '[object Object]' && obj !== null;

const stringify = (args) => {
  let arr = [];
  let value;
  let options = args;
  if (typeof options === 'number') {
    options = options.toString();
  }

  for (let k in options) {
    if (HAS_PROP.call(options, k)) {
      value = options[k];
      arr.push(k, isValidElement(value) ? stringify(value.props) : isObject(value) ? stringify(value) : value.toString());
    }
  }

  return JSON.stringify(arr);
};

export const memoize = (func) => {
  if (!func.cache) {
    func.cache = {};
  }

  return (options) => {
    const key = stringify(options);
    return HAS_PROP.call(func.cache, key) ? func.cache[key] : (func.cache[key] = func(options));
  };
};

const defaultMessage = (type, values) => {
  let msg = Validators.messages[type];
  return typeof msg === 'string' ? { defaultMessage: msg, values } : Object.assign({}, msg, { values });
};

export const prepareMsg = (msg, type, values) => {
  if (msg == null) {
    return defaultMessage(type, values);
  }

  if (HAS_PROP.call(msg, 'props') && isValidElement(msg)) {
    msg = msg.props;
  }

  if (msg[type] != null) {
    msg = msg[type];
  }

  if (isObject(msg)) {
    if (HAS_PROP.call(msg, 'id') || HAS_PROP.call(msg, 'defaultMessage')) {
      return Object.assign({}, msg, { values });
    }

    return defaultMessage(type, values);
  }

  return { id: msg, defaultMessage: msg, values };
};

export const assign =
  Object.assign ||
  /* istanbul ignore next */
  function(obj) {
    for (let i = 1, len = arguments.length; i < len; ++i) {
      let source = arguments[i];
      if (source != null) {
        for (let key in source) {
          if (HAS_PROP.call(source, key)) {
            obj[key] = source[key];
          }
        }
      }
    }

    return obj;
  };

export const prepare = (func) => (value, allValues, ...args) => func(value, allValues, ...args);

export const isNumber = (num) => !isNaN(num) && (num !== 0 || ('' + num).trim() !== '');

export const selectNum = (var1, var2) => (isNumber(var1) ? +var1 : arguments.length > 1 && isNumber(var2) ? +var2 : null);

export const trunc = (num) => (Math.trunc ? Math.trunc(num) : num < 0 ? Math.ceil(num) : Math.floor(num));
