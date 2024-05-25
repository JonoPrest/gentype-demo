@genType
module type MT = {
  let x: int
  type t = int
  @module("foo") external f: int => int = "f"
  module type XXX = {
    type tt = string
  }
  module EmptyInnerModule: {

  }
  module InnerModule2: {
    let k: t
  }
  module InnerModule3: {
    type inner = int
    let k3: inner => inner
  }
  module type TT = {
    let u: (int, int)
  }
  module Z: TT
  let y: string
}

@genType
module M = {
  let y = "abc"

  @genType
  module type XXX = {
    type tt = string
  }
  module EmptyInnerModule = {}
  module InnerModule2 = {
    let k = 4242
  }
  module InnerModule3 = {
    type inner = int
    let k3 = x => x + 1
  }

  module type TT = {
    let u: (int, int)
  }
  module Z = {
    let u = (0, 0)
  }
  type t = int
  @module("foo") external f: int => int = "f"
  let x = 42
}

@genType
type firstClassModule = module(MT)

@genType
let firstClassModule: firstClassModule = module(M)
