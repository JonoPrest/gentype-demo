/* TypeScript file generated from Module.res by genType. */

/* eslint-disable */
/* tslint:disable */

import * as ModuleJS from './Module.js';

export type MT_t = number;

export type MT_InnerModule3_inner = number;

export type M_XXX_tt = string;

export type M_InnerModule3_inner = number;

export type M_t = number;

export type firstClassModule = {
  readonly x: number; 
  readonly EmptyInnerModule: {
  }; 
  readonly InnerModule2: {
    readonly k: MT_t
  }; 
  readonly InnerModule3: {
    readonly k3: (_1:MT_InnerModule3_inner) => MT_InnerModule3_inner
  }; 
  readonly Z: unknown; 
  readonly y: string
};

export const M_y: string = ModuleJS.M.y as any;

export const M_InnerModule2_k: number = ModuleJS.M.InnerModule2.k as any;

export const M_InnerModule3_k3: (x:number) => number = ModuleJS.M.InnerModule3.k3 as any;

export const M_Z_u: [number, number] = ModuleJS.M.Z.u as any;

export const M_x: number = ModuleJS.M.x as any;

export const firstClassModule: firstClassModule = ModuleJS.firstClassModule as any;

export const M: {
  x: number; 
  y: string; 
  InnerModule2: {
    k: number
  }; 
  InnerModule3: {
    k3: (x:number) => number
  }; 
  Z: {
    u: [number, number]
  }
} = ModuleJS.M as any;
