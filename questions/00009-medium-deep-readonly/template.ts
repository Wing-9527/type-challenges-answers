type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown> | unknown[] ? DeepReadonly<T[P]> : T[P]
}

type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}

type DR = DeepReadonly<X>
