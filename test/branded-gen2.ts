import type { t1, t2, valid, invalid } from '../src/Demo.js';

type Valid = t1<valid>
type Invalid = t1<invalid>

declare let v1: Valid;
declare let v2: Invalid;

let foo: string = v1;

// @ts-expect-error
v1 = v2;

type Either1 = t2<valid, invalid>
type Either2 = t2<invalid, valid>
declare let v3: Either1;
declare let v4: Either2;

// @ts-expect-error
v3 = v4;