type TupleToUnion<T extends unknown[]> = T[number]

type Array1 = [123, '456', true]

type TTU = TupleToUnion<Array1>
