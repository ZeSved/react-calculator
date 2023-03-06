import { MouseEvent, useState } from 'react'
import styles from './App.module.css'
import Buttons, { Button } from './components/Buttons'
import { arithmeticFunc } from './utils/systemwork'

function App() {
	const [input, setInput] = useState<string | null>('')
	const arithmeticArr = ['/', '-', '*', '+']

	const buttons: Button[] = [
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
			content: 'CE',
			func: clear,
		},
		{
			content: '0',
		},
		{
			content: '=',
			func: equal,
		},
		{
			content: '-',
		},
	]

	function normalOperation(event: MouseEvent) {
		const elem = event.target as HTMLButtonElement
		const lastPressedButton = elem.textContent

		for (let i = 0; i >= arithmeticArr.length; i++) {
			if (lastPressedButton == arithmeticArr[i]) {
				arithmeticFunc(arithmeticArr, lastPressedButton, setInput, input)
				return
			}
		}

		if (input === null) setInput(lastPressedButton)
		else setInput(input! + lastPressedButton)
	}

	function equal() {
		setInput(Function('return ' + input)())
	}

	function clear() {
		setInput(null)
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
