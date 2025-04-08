/* eslint-disable @typescript-eslint/no-explicit-any */
export const isString = (value: any) => typeof value === 'string' || value instanceof String;

export const isNumber = (value: any) => typeof value === 'number' && isFinite(value);

export const isBoolean  = (value: any) => typeof value === 'boolean';

export const isArray = (value: any) => value && typeof value === 'object' && value.constructor === Array;

export const isFunction = (value: any) => typeof value === 'function';

export const isObject = (value: any) => value && typeof value === 'object' && value.constructor === Object;

export const isNull = (value: any) => value === null;

export const isUndefined = (value: any) => typeof value === 'undefined';

export const isRegExp = (value: any) => value && typeof value === 'object' && value.constructor === RegExp;

export const isError = (value: any) => value instanceof Error && typeof value.message !== 'undefined';

export const isDate = (value: any) => value instanceof Date;

export const isSymbol  = (value: any) => typeof value === 'symbol';
