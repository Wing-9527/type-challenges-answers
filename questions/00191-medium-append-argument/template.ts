type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (...args: infer Args) => infer T ? (...args: [...Args, A]) => T : never
