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

export function power(ARITHMETIC_ARR: string[], input: string, NUMBER_ARR: string[]) {
  if (input.endsWith('**')) return false

  if (arithmeticFunc(ARITHMETIC_ARR, input)) return false

  for (const number of NUMBER_ARR) {
    if (input.endsWith(`**${number}`)) return false
  }

  return true
}

export function equal(input: string) {
  input = input.replaceAll('²', '**2')

  try {
    return Function('return ' + input)()
  } catch (error) {
    return error
  }
}