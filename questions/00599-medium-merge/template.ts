type Merge<F, S, Type = Omit<F, keyof S> & S> = {
  [K in keyof Type]: Type[K]
}

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type S = Merge<Foo, Bar>
