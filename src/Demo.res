%%private(let value = 123)

@genType
let foo = () => value

@genType
type myRecord = Types.myRecord

@genType
module Mynamespace = {
  type t = option<int>

  let foo = Some(123)
}

@genType
type valid

@genType
type invalid

@genType.opaque
type t1<'base> = string

@genType
type t2<'base1, 'base2>
