type TrimLeft<S extends string> = S extends `${infer Left}${infer Right}` ? (Left extends ' ' | '\n' | '\t' ? TrimLeft<Right> : S) : S
