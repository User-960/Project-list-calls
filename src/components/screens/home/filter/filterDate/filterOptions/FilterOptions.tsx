import { DatePicker } from 'antd'
import React, { Dispatch, FC, SetStateAction } from 'react'

import { useListCalls } from '@/components/hooks/useListCalls'

import styles from './FilterOptions.module.scss'
import { calcStartEndDate } from '@/helpers/calcStartEndDate'

const { RangePicker } = DatePicker

interface IFilterOptionsProps {
	closeFilterOptions: () => void
	setDateCount: Dispatch<SetStateAction<string>>
}

const FilterOptions: FC<IFilterOptionsProps> = ({
	closeFilterOptions,
	setDateCount
}) => {
	const { setStartEndDateFilter } = useListCalls()

	const saveStartEndDate = (
		date: any,
		dateString: string[],
		option?: string
	) => {
		let newDates = { date_start: dateString[0], date_end: dateString[1] }
		setStartEndDateFilter(newDates)

		setDateCount(option ? option : `${dateString[0]} / ${dateString[1]}`)
		closeFilterOptions()
	}

	return (
		<div className={styles.filterOptionsWrapper}>
			<ul className={styles.filterOptions}>
				<li
					className={styles.itemOptions}
					onClick={() =>
						saveStartEndDate([], calcStartEndDate('3 дня'), '3 дня')
					}
				>
					3 дня
				</li>
				<li
					className={styles.itemOptions}
					onClick={() =>
						saveStartEndDate([], calcStartEndDate('7 дней'), 'Неделя')
					}
				>
					Неделя
				</li>
				<li
					className={styles.itemOptions}
					onClick={() =>
						saveStartEndDate([], calcStartEndDate('30 дней'), 'Месяц')
					}
				>
					Месяц
				</li>
				<li
					className={styles.itemOptions}
					onClick={() =>
						saveStartEndDate([], calcStartEndDate('365 дней'), 'Год')
					}
				>
					Год
				</li>
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
						onChange={saveStartEndDate}
					/>
				</li>
			</ul>
		</div>
	)
}

export default FilterOptions
