import { MouseEvent } from 'react'
import styles from './styles/Buttons.module.css'

export default function Buttons({ buttons, defaultFunction }: ButtonsProps) {
	return (
		<div className={styles.wrapper}>
			{buttons.map((button, i) => (
				<button
					key={i}
					onClick={button.func ? button.func : defaultFunction}>
					{button.content}
				</button>
			))}
		</div>
	)
}

interface ButtonsProps {
	buttons: Button[]
	defaultFunction: (event: MouseEvent) => void
}

export type Button = {
	content: string
	func?: () => void
}
