export function square(ARITHMETIC_ARR: string[], input: string) {
  if (input!.endsWith('**2')) return false

  for (const arith of ARITHMETIC_ARR) {
    if (input!.endsWith(arith)) return false
  }

  return true
}