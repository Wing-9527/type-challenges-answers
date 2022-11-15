type ToString<T extends number | string | bigint> = `${T}`

type Absolute<T extends number | string | bigint> = T extends `${infer First}${infer Rest}`
  ? First extends '-'
    ? `${Rest}`
    : `${First}${Rest}`
  : Absolute<ToString<T>>
