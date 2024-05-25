@genType
type rec t<_> =
  | Int(int): t<int>
  | Float(float): t<float>

module Unary = {}

module Infix = {}

@genType
let fn: t<int> => unit = v => {
  switch v {
  | Int(i) => Js.log(i)
  }
}

@val external nan: t<'a> = "NaN"
@val external infinity: t<'a> = "Infinity"

@send external toString: (t<'a>, ~radix: int=?) => string = "toString"
