import Buttons, { Button } from './components/Buttons'
import { MouseEvent, useState } from 'react'
import { arithmeticFunc, square, power, equal } from './utils/helpers'

import styles from './App.module.css'

const ARITHMETIC_ARR = ['/', '-', '*', '+']
const NUMBER_ARR = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

function App() {
	const [input, setInput] = useState<string | null>('')

	const buttons: Button[] = [
		{
			content: 'x²',
			func: () => {
				if (square(ARITHMETIC_ARR, input)) setInput(input + '**2')
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
			func: () => {
				setInput(input + `${Math.PI}`)
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
				<input
					type='checkbox'
					name='lightmode'
					id='lightmode'
					className={styles.lightmode}
				/>
			</main>
		</>
	)
}

export default App
