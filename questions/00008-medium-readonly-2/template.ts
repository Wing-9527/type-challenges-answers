type MyReadonly2<T, K extends keyof T = keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
} & {
  readonly [Q in K]: T[Q]
}

// test type
interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

type R2 = MyReadonly2<Todo1>
