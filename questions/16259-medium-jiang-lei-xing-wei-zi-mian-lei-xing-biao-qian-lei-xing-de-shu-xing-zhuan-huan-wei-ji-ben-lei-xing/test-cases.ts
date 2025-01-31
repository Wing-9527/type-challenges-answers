import type { Equal, Expect } from '@type-challenges/utils'

type PersonInfo = {
  name: 'Tom',
  age: 30,
  married: false,
  addr: {
    home: '123456',
    phone: '13111111111'
  },
  hobbies: ["sing","dance"]
}

type ExpectedResult = {
  name: string,
  age: number,
  married: boolean,
  addr: {
    home: string,
    phone: string
  },
  hobbies: [string, string]
}

type cases = [
  Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>
]
