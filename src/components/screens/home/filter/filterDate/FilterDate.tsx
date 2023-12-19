import React, { useState } from 'react'

import { useOnClickOutside } from '@/components/hooks/useOnClickOutside'

import styles from './FilterDate.module.scss'
import FilterOptions from './filterOptions/FilterOptions'

const cn = require('clsx')

const FilterDate = () => {
	const [dateCount, setDateCount] = useState<string>('3 дня')
	const { ref, isShow, setIsShow } = useOnClickOutside(false)

	return (
		<>
			<div className={styles.filterDays} ref={ref}>
				{isShow && (
					<FilterOptions
						closeFilterOptions={() => setIsShow(false)}
						dateCount={dateCount}
						setDateCount={setDateCount}
					/>
				)}
				<button
					className={cn(styles.filterBtn, styles.filterLeftBtn)}
					onClick={() => setIsShow(prev => !prev)}
				></button>
				<button
					className={styles.daysBtn}
					onClick={() => setIsShow(prev => !prev)}
				>
					<div className={styles.iconCalendar}></div>
					<p className={styles.daysMount}>{dateCount}</p>
				</button>
				<button
					className={cn(styles.filterBtn, styles.filterRightBtn)}
					onClick={() => setIsShow(prev => !prev)}
				></button>
			</div>
		</>
	)
}

export default FilterDate
