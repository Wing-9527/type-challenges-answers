type Last<T extends any[]> = T extends [...infer Rest, infer End] ? End : never
