import Buttons, { Button } from './components/Buttons'
import { MouseEvent, useState } from 'react'

import { arithmeticFunc } from './utils/helpers'
import styles from './App.module.css'

const ARITHMETIC_ARR = ['/', '-', '*', '+']

function App() {
	const [input, setInput] = useState<string | null>('')

	const buttons: Button[] = [
		{
			content: 'x²',
			func: () => {
				if (input!.endsWith('**2')) return

				for (const arith of ARITHMETIC_ARR) {
					if (input!.endsWith(arith)) return
				}

				setInput(input! + '**2')
			},
		},
		{
			content: 'xʸ',
			// func: power,
		},
		{
			content: '←',
			func: () => {
				const inputVar = input!.slice(0, -1)
				setInput(inputVar)
			},
		},
		{
			content: '()',
			// func: parantheses,
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
				setInput((input) => {
					try {
						return Function('return ' + input)()
					} catch (error) {
						return error
					}
				})
			},
		},
		{
			content: 'CE',
			func: () => setInput(null),
		},
	]

	function normalOperation(event: MouseEvent) {
		const elem = event.target as HTMLButtonElement
		const lastPressedButton = elem.textContent!

		if (input === null) return setInput(lastPressedButton)

		if (ARITHMETIC_ARR.includes(lastPressedButton)) {
			if (arithmeticFunc(ARITHMETIC_ARR, input)) return
		}

		setInput(input! + lastPressedButton)
	}

	return (
		<>
			<main className={styles.wrapper}>
				<div className={styles.calculatorContainer}>
					<input
						value={input ? input : '0'}
						type='text'
						disabled
						className={styles.output}
					/>
					<Buttons
						defaultFunction={normalOperation}
						buttons={buttons}
					/>
				</div>
			</main>
		</>
	)
}

export default App
