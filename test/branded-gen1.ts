import type { t1, t2, valid, invalid } from '../src/Demo.gen.ts';

type Valid = t1<valid>
type Invalid = t1<invalid>
type Either = t2<valid, invalid>

declare let v1: Valid;
declare let v2: Invalid;

let foo: string = v1;

// @ts-expect-error
v1 = v2;

declare let v3: Either;

// @ts-expect-error
v3 = v1