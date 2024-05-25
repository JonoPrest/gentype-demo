type t$Int = { TAG: "Int"; _0: number }
type t$Float = { TAG: "Float"; _0: number }
export type t =
  | t$Int
  | t$Float

export const fn: (v:t$Int) => void;
