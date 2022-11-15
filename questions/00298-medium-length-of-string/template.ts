type LengthOfString<S extends string, T extends string[] = []> = S extends `${infer First}${infer Rest}`
  ? First extends ''
    ? 0
    : LengthOfString<Rest, [First, ...T]>
  : T['length']

/**
 * step
 *    1. kumiko, [] => k umiko => umiko, [k, ...[]]
 *    2. umiko, [k] => u miko => miko, [u, k]
 *    3. miko, [u, k] => m iko => iko, [m, u, k]
 *    4. iko, [m, u, k] => i ko => ko, [i, m, u, k]
 *    5. ko, [i, m, u, k] => k o => o, [k, i, m, u, k]
 *    6. o, [k, i, m, u, k] => o '' => '', [o, k, i, m, u, k]
 *    7. '', [o, k, i, m, u, k] => false => [o, k, i, m, u, k]['length']
 */

type Res = LengthOfString<'kumiko'>

export {
  LengthOfString,
}
