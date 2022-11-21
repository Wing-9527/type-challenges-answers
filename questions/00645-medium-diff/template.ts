type Diff<O, O1, Exc = Exclude<keyof O, keyof O1>, Exc1 = Exclude<O1, O>, Type = O & O1> = Exc extends never
  ? Exc1 extends never
    ? never
    : Exc1 extends keyof Type
      ? {
          [K in Exc1]: Type[K]
        }
      : never
  : Exc1 extends never
    ? Exc extends never
      ? never
      : Exc extends keyof Type
        ? {
            [K in Exc]: Type[K]
          }
        : never
    : (Exc & Exc1) extends keyof Type
        ? {
            [K in (Exc & Exc1)]: Type[K]
          }
        : never

// case
type Foo1 = {
  name: string
  age: string
}
type Bar1 = {
  name: string
  age: string
  gender: number
}
type Coo1 = {
  name: string
  gender: number
}

type A1 = Diff<Foo, Bar>
type A2 = Diff<Bar, Foo>
