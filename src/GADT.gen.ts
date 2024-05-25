/* TypeScript file generated from GADT.res by genType. */

/* eslint-disable */
/* tslint:disable */

import * as GADTJS from './GADT.js';

export type t = 
    { TAG: "Int"; _0: number }
  | { TAG: "Float"; _0: number };

export const fn: (v:t<number>) => void = GADTJS.fn as any;
