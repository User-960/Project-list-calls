import React from 'react'

import styles from './Filter.module.scss'

const Filter = () => {
	return (
		<>
			<div className={styles.filterWrapper}>
				<div className={styles.filterType}>Все типы</div>
				<div className={styles.filterDays}>3 дня</div>
			</div>
		</>
	)
}

export default Filter
