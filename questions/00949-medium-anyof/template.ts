import { type } from 'os'

/** answer 1 × */
// type AnyOf<T extends readonly any[]> = T extends Array<0 | false | '' | [] | Record<string, never>> ? false : true

/** answer 2 √ 但是识别范围有限 */
type ObjName = {
  'name': string
}

interface ObjOne {
  '1': string
}

type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest]
  ? First extends 1 | true | `${infer S}${infer SS}` | [any] | ObjName | ObjOne
    ? true
    : AnyOf<Rest>
  : false

/** answer 3 √ */
// type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
//   ? F extends 0 | '' | false | []
//     ? AnyOf<R>
//     : keyof F extends never
//       ? AnyOf<R>
//       : true
//   : false

export { AnyOf }
