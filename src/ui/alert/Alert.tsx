import cn from 'clsx'
import { FC } from 'react'

import styles from './Alert.module.scss'

interface IAlertProps {
	type?: string
	text: string
	status: string
}

const Alert: FC<IAlertProps> = ({ type = 'success', text, status }) => {
	return (
		<div className={cn(styles.notif, styles[type], styles[status])}>
			<p className={styles.notifText}>{text}</p>
			<div className={styles.notifProgress}></div>
		</div>
	)
}

export default Alert
