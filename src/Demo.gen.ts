/* TypeScript file generated from Demo.res by genType. */

/* eslint-disable */
/* tslint:disable */

import * as DemoJS from './Demo.js';

import type {myRecord as Types_myRecord} from './Types.gen';

export type myRecord = Types_myRecord;

export type Mynamespace_t = (undefined | number);

export abstract class valid { protected opaque!: any }; /* simulate opaque types */

export abstract class invalid { protected opaque!: any }; /* simulate opaque types */

export abstract class t1<base> { protected opaque!: base }; /* simulate opaque types */

export abstract class t2<base1,base2> { protected opaque!: base1 | base2 }; /* simulate opaque types */

export const foo: () => number = DemoJS.foo as any;

export const Mynamespace_foo: (undefined | number) = DemoJS.Mynamespace.foo as any;

export const Mynamespace: { foo: (undefined | number) } = DemoJS.Mynamespace as any;
