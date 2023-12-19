import { DatePicker } from 'antd'
import React, { FC } from 'react'

import { useListCalls } from '@/components/hooks/useListCalls'

import styles from './FilterOptions.module.scss'

const { RangePicker } = DatePicker

// const cn = require('clsx')

interface IFilterOptionsProps {
	closeFilterOptions: () => void
}

const FilterOptions: FC<IFilterOptionsProps> = ({ closeFilterOptions }) => {
	const { setStartEndDateFilter } = useListCalls()

	const onChange = (date: any, dateString: string[]) => {
		let newDates = { date_start: dateString[0], date_end: dateString[1] }
		setStartEndDateFilter(newDates)
		closeFilterOptions()
	}

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
						onChange={onChange}
					/>
				</li>
			</ul>
		</div>
	)
}

export default FilterOptions
