type Space = ' ' | '\t' | '\n'

type Trim<S extends string> = S extends `${Space}${infer Right}`
  ? Trim<Right>
  : S extends `${infer Left}${Space}`
    ? Trim<Left>
    : S
