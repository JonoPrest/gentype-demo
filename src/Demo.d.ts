import type {myRecord as Types_myRecord} from './Types.js';

export const foo: () => number;

export type myRecord = Types_myRecord;

type Mynamespace_t = number | undefined;

export type Mynamespace$Type = {
  t: Mynamespace_t,
}

export type Mynamespace = {
  foo: Mynamespace$Type["t"]
}

export const Mynamespace: Mynamespace;

declare global {
  namespace $Demo {
    const valid: unique symbol
    const invalid: unique symbol
    const t1: unique symbol
    const t2: unique symbol
  }
}
export type valid = typeof $Demo.valid

export type invalid = typeof $Demo.invalid

export type t1<base> = string & { [$Demo.t1]: [base] }

export type t2<base1, base2> = { [$Demo.t2]: [base1, base2] }
