export const isArray = Array.isArray;

export const isObject = (value: unknown) => {
  return value !== null && typeof value === 'object';
}

export const hasChanged = (value: any, oldValue: any): boolean => {
  return !Object.is(value, oldValue);
}

export const isFunction = (value: unknown): value is Function => {
  return typeof value === 'function';
}