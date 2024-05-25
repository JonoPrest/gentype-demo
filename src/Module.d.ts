export type MT$Type = {
  x: number,
  t: number,
  XXX: MT_XXX$Type,
  EmptyInnerModule: MT_EmptyInnerModule$Type,
  InnerModule2: MT_InnerModule2$Type,
  InnerModule3: MT_InnerModule3$Type,
  TT: MT_TT$Type,
  Z: MT_TT$Type,
  y: string,
};

type MT_XXX$Type = {
  tt: string,
};

type MT_EmptyInnerModule$Type = {
};

type MT_InnerModule2$Type = {
  k: MT$Type['t'],
};

type MT_InnerModule3$Type = {
  inner: number,
  k3: (arg1: MT_InnerModule3$Type['inner']) => MT_InnerModule3$Type['inner'],
};

type MT_TT$Type = {
  u: [number, number],
};

export const M: {
  y: string,
  EmptyInnerModule: M_EmptyInnerModule,
  InnerModule2: M_InnerModule2,
  InnerModule3: M_InnerModule3,
  Z: M_Z,
  x: number,
};

export type M$Type = {
  y: string,
  t: number,
  XXX: M_XXX$Type,
  EmptyInnerModule: M_EmptyInnerModule$Type,
  InnerModule2: M_InnerModule2$Type,
  InnerModule3: M_InnerModule3$Type,
  TT: M_TT$Type,
  Z: M_Z$Type,
  x: number,
};

type M_XXX$Type = {
  tt: string,
};

type M_EmptyInnerModule$Type = {
};

type M_EmptyInnerModule = {
};

type M_InnerModule2$Type = {
  k: number,
};
type M_InnerModule2 = {
  k: number,
};

type M_InnerModule3$Type = {
  inner: number,
  k3: (arg1: M_InnerModule3$Type['inner']) => M_InnerModule3$Type['inner'],
};

type M_InnerModule3 = {
  k3: (arg1: M_InnerModule3$Type['inner']) => M_InnerModule3$Type['inner'],
};

type M_TT$Type = {
  u: [number, number],
};

type M_Z$Type = M_TT$Type

type M_Z = M_TT$Type

export type firstClassModule = MT$Type;

export const firstClassModule: firstClassModule;