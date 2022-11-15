type Flatten<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [First, ...Flatten<Rest>]
  : T

type ss = Flatten<[1, 2, [3, 4], [[[5]]]]>
