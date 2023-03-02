import styles from './App.module.css'
import Buttons, { Button } from './components/Buttons'

function App() {
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
			content: '4',
		},
		{
			content: '5',
		},
		{
			content: '6',
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
			content: '0',
		},
		{
			content: '+',
		},
		{
			content: '=',
			func() {
				console.log('=')
			},
		},
	]

	return (
		<>
			<main className={styles.wrapper}>
				<div className={styles.calculatorContainer}>
					<input
						type='text'
						disabled
						className={styles.output}
						placeholder='somehting'
					/>
					<Buttons buttons={buttons} />
				</div>
			</main>
		</>
	)
}

export default App
