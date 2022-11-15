type AppendToObject<
  T,
  U extends string | number | symbol,
  V,
  Raw = Record<U, V>,
  Result = T & Raw,
> = {
  [Key in keyof Result]: Result[Key]
}
