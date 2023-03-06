export function arithmeticFunc(ARITHMETIC_ARR: string[], input: string) {
  for (const arith of ARITHMETIC_ARR) {
    if (input.endsWith(arith)) return true
  }

  return false
}
