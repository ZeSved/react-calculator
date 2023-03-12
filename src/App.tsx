import Buttons, { Button } from './components/Buttons'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { arithmeticFunc, equal, power, square } from './utils/helpers'

import styles from './App.module.css'

const ARITHMETIC_ARR: string[] = ['/', '-', '*', '+']
const NUMBER_ARR: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

function App() {
  const [input, setInput] = useState<string | null>('')
  const inputRef = useRef(null)

  const buttons: Button[] = [
    {
      content: 'x²',
      func: () => {
        if (square(ARITHMETIC_ARR, input)) setInput(input + '²')
      },
    },
    {
      content: 'xʸ',
      func: () => {
        if (input === null) return false

        if (power(ARITHMETIC_ARR, input, NUMBER_ARR)) setInput(input + '**')
      },
    },
    {
      content: '←',
      func: () => {
        if (input === null) return

        if (input.endsWith('**2')) {
          const inputVar = input.slice(0, -3)
          setInput(inputVar)
        } else {
          const inputVar = input.slice(0, -1)
          setInput(inputVar)
        }
      },
    },
    {
      content: '()',
      // func: parentheses,
    },
    {
      content: '1',
    },
    {
      content: '2',
    },
    {
      content: '3',
    },
    {
      content: '*',
    },
    {
      content: '4',
    },
    {
      content: '5',
    },
    {
      content: '6',
    },
    {
      content: '/',
    },
    {
      content: '7',
    },
    {
      content: '8',
    },
    {
      content: '9',
    },
    {
      content: '+',
    },
    {
      content: '+/-',
      // func: negate,
    },
    {
      content: '0',
    },
    {
      content: '.',
    },
    {
      content: '-',
    },
    {
      content: '=',
      func: () => {
        if (input === null) return
        setInput(equal(input))
      },
    },
    {
      content: 'CE',
      func: () => setInput(null),
    },
    {
      content: 'π',
      func: () => setInput(input + `${Math.PI}`),
    },
    {
      content: '√',
      func: () => {
        if (input === null) return

        setInput(`${Math.sqrt(parseInt(input))}`)
      },
    },
  ]

  function normalOperation(event: MouseEvent) {
    const elem = event.target as HTMLButtonElement
    const lastPressedButton = elem.textContent!

    if (input === null) return setInput(lastPressedButton)

    if (ARITHMETIC_ARR.includes(lastPressedButton)) {
      if (arithmeticFunc(ARITHMETIC_ARR, input)) return
    }

    setInput(input + lastPressedButton)
  }

  useEffect(() => {
    const elem = inputRef.current as HTMLParagraphElement | null
    if (!elem) return
    elem.scrollTo({ left: elem.scrollWidth })
  }, [input, inputRef.current])

  return (
    <>
      <main className={styles.wrapper}>
        <div className={styles.calculatorContainer}>
          <p ref={inputRef} className={styles.output}>
            {input ? input : '0'}
          </p>
          <Buttons defaultFunction={normalOperation} buttons={buttons} />
        </div>
      </main>
    </>
  )
}

export default App
