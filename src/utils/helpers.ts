export function arithmeticFunc(ARITHMETIC_ARR: string[], input: string) {
  for (const arith of ARITHMETIC_ARR) {
    if (input.endsWith(arith)) return true
  }

  return false
}

export function square(ARITHMETIC_ARR: string[], input: string | null) {
  if (input === null) return false

  if (input.endsWith('**2')) return false

  for (const arith of ARITHMETIC_ARR) {
    if (input.endsWith(arith)) return false
  }

  return true
}
