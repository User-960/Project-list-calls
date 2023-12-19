import Image from 'next/image'
import React, { useState } from 'react'

import { useListCalls } from '@/components/hooks/useListCalls'

import iconCalendar from '../../../../../../public/images/iconCalendar.svg'

import styles from './FilterDate.module.scss'
import FilterOptions from './filterOptions/FilterOptions'

const cn = require('clsx')

const FilterDate = () => {
	const [openFilterOptions, setOpenFilterOptions] = useState<boolean>(false)
	const [dateCount, setDateCount] = useState<string>('')

	return (
		<>
			<div className={styles.filterDays}>
				{openFilterOptions && (
					<FilterOptions
						closeFilterOptions={() => setOpenFilterOptions(false)}
						setDateCount={setDateCount}
					/>
				)}
				<button className={cn(styles.filterBtn, styles.filterLeftBtn)}></button>
				<button
					className={styles.daysBtn}
					onClick={() => setOpenFilterOptions(prev => !prev)}
				>
					<Image
						src={iconCalendar}
						alt='icon of calendar'
						width={16}
						height={18}
						draggable={false}
					/>
					<p className={styles.daysMount}>{dateCount}</p>
				</button>
				<button
					className={cn(styles.filterBtn, styles.filterRightBtn)}
				></button>
			</div>
		</>
	)
}

export default FilterDate
