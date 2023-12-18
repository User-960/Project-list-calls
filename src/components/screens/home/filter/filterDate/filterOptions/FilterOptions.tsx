import { DatePicker } from 'antd'
import React from 'react'

import styles from './FilterOptions.module.scss'

const { RangePicker } = DatePicker

const cn = require('clsx')

const FilterOptions = () => {
	return (
		<div className={styles.filterOptionsWrapper}>
			<ul className={styles.filterOptions}>
				<li className={styles.itemOptions}>3 дня</li>
				<li className={styles.itemOptions}>Неделя</li>
				<li className={styles.itemOptions}>Месяц</li>
				<li className={styles.itemOptions}>Год</li>
				<li className={styles.itemOptions}>
					<label htmlFor='dataPicker' className={styles.labelInput}>
						Указать даты
					</label>

					<RangePicker
						id='dataPicker'
						placeholder={['__.__.__', '__.__.__']}
						bordered={false}
						className={styles.dataPicker}
						separator={'-'}
					/>
				</li>
			</ul>
		</div>
	)
}

export default FilterOptions
