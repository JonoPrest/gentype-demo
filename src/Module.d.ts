type MT = {
  /* let */ x: number,
  /* type t: number, */
  /* module type XXX: MT_XXX$Type, */
  /* module */ EmptyInnerModule: MT_EmptyInnerModule,
  /* module */ InnerModule2: MT_InnerModule2,
  /* module */ InnerModule3: MT_InnerModule3,
  /* module type TT: MT_TT$Type, */
  /* module */ Z: MT_TT,
  /* let */ y: string,
};
export type MT$Type = {
  /* let */ x: number,
  /* type */ t: number,
  /* module type */ XXX: MT_XXX$Type,
  /* module */ EmptyInnerModule: MT_EmptyInnerModule$Type,
  /* module */ InnerModule2: MT_InnerModule2$Type,
  /* module */ InnerModule3: MT_InnerModule3$Type,
  /* module type */ TT: MT_TT$Type,
  /* module */ Z: MT_TT$Type,
  /* let */ y: string,
};

type MT_XXX = {
  /* type tt: string, */
};
type MT_XXX$Type = {
  /* type */ tt: string,
};

type MT_EmptyInnerModule = {
};
type MT_EmptyInnerModule$Type = {
};

type MT_InnerModule2 = {
  /* let */ k: MT$Type['t'],
};
type MT_InnerModule2$Type = {
  /* let */ k: MT$Type['t'],
};

type MT_InnerModule3 = {
  /* type inner: number, */
  /* let */ k3: (arg1: MT_InnerModule3$Type['inner']) => MT_InnerModule3$Type['inner'],
};
type MT_InnerModule3$Type = {
  /* type */ inner: number,
  /* let */ k3: (arg1: MT_InnerModule3$Type['inner']) => MT_InnerModule3$Type['inner'],
};

type MT_TT = {
  /* let */ u: [number, number],
};
type MT_TT$Type = {
  /* let */ u: [number, number],
};

type M = {
  /* let */ y: string,
  /* module type XXX: M_XXX$Type, */
  /* module */ EmptyInnerModule: M_EmptyInnerModule,
  /* module */ InnerModule2: M_InnerModule2,
  /* module */ InnerModule3: M_InnerModule3,
  /* module type TT: M_TT$Type, */
  /* module */ Z: M_Z,
  /* type t: number, */
  /* let */ x: number,
};
export type M$Type = {
  /* let */ y: string,
  /* module type */ XXX: M_XXX$Type,
  /* module */ EmptyInnerModule: M_EmptyInnerModule$Type,
  /* module */ InnerModule2: M_InnerModule2$Type,
  /* module */ InnerModule3: M_InnerModule3$Type,
  /* module type */ TT: M_TT$Type,
  /* module */ Z: M_Z$Type,
  /* type */ t: number,
  /* let */ x: number,
};
export const M: M;

type M_XXX = {
  /* type tt: string, */
};
type M_XXX$Type = {
  /* type */ tt: string,
};

type M_EmptyInnerModule = {
};
type M_EmptyInnerModule$Type = {
};

type M_InnerModule2 = {
  /* let */ k: number,
};
type M_InnerModule2$Type = {
  /* let */ k: number,
};

type M_InnerModule3 = {
  /* type inner: number, */
  /* let */ k3: (arg1: M_InnerModule3$Type['inner']) => M_InnerModule3$Type['inner'],
};
type M_InnerModule3$Type = {
  /* type */ inner: number,
  /* let */ k3: (arg1: M_InnerModule3$Type['inner']) => M_InnerModule3$Type['inner'],
};

type M_TT = {
  /* let */ u: [number, number],
};
type M_TT$Type = {
  /* let */ u: [number, number],
};

type M_Z = {
  /* let */ u: [number, number],
};
type M_Z$Type = {
  /* let */ u: [number, number],
};

export type firstClassModule = MT;

export const firstClassModule: firstClassModule;
