import { MouseEvent, useState } from 'react'
import styles from './App.module.css'
import Buttons, { Button } from './components/Buttons'

function App() {
	const [input, setInput] = useState<string | null>('')

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

		if (input === null) setInput(elem.textContent)
		else setInput(input + elem.textContent)
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
