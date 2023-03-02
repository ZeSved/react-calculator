import styles from './styles/Buttons.module.css'

export default function Buttons({ buttons }: ButtonsProps) {
	function defaultOperation() {
		console.log('hgeuyi')
	}

	return (
		<div className={styles.wrapper}>
			{buttons.map((button) => (
				<button onClick={button.func ? button.func : defaultOperation}>{button.content}</button>
			))}
		</div>
	)
}

interface ButtonsProps {
	buttons: Button[]
}

export type Button = {
	content: string
	func?: () => void
}
