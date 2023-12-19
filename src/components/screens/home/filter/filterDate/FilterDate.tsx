import Image from 'next/image'
import React, { useState } from 'react'

import { useListCalls } from '@/components/hooks/useListCalls'

import iconCalendar from '../../../../../../public/images/iconCalendar.svg'

import styles from './FilterDate.module.scss'
import FilterOptions from './filterOptions/FilterOptions'

const cn = require('clsx')

const FilterDate = () => {
	const [openFilterOptions, setOpenFilterOptions] = useState<boolean>(false)
	const [dateCount, setDateCount] = useState<string>('3 дня')

	return (
		<>
			<div className={styles.filterDays}>
				{openFilterOptions && (
					<FilterOptions
						closeFilterOptions={() => setOpenFilterOptions(false)}
						dateCount={dateCount}
						setDateCount={setDateCount}
					/>
				)}
				<button
					className={cn(styles.filterBtn, styles.filterLeftBtn)}
					onClick={() => setOpenFilterOptions(prev => !prev)}
				></button>
				<button
					className={styles.daysBtn}
					onClick={() => setOpenFilterOptions(prev => !prev)}
				>
					{/* <Image
						src={iconCalendar}
						alt='icon of calendar'
						width={16}
						height={18}
						draggable={false}
					/> */}
					<div className={styles.iconCalendar}></div>
					<p className={styles.daysMount}>{dateCount}</p>
				</button>
				<button
					className={cn(styles.filterBtn, styles.filterRightBtn)}
					onClick={() => setOpenFilterOptions(prev => !prev)}
				></button>
			</div>
		</>
	)
}

export default FilterDate
