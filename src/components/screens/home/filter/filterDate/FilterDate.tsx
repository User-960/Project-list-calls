import Image from 'next/image'
import React from 'react'

import { useListCalls } from '@/components/hooks/useListCalls'

import iconCalendar from '../../../../../../public/images/iconCalendar.svg'

import styles from './FilterDate.module.scss'

const cn = require('clsx')

const FilterDate = () => {
	const { currentTypeCallFilter, setCurrentTypeCallFilter } = useListCalls()

	return (
		<>
			<div className={styles.filterDays}>
				<button className={cn(styles.filterBtn, styles.filterLeftBtn)}></button>
				<button className={styles.daysBtn}>
					<Image
						src={iconCalendar}
						alt='icon of calendar'
						width={16}
						height={18}
						draggable={false}
					/>
					<p className={styles.daysMount}>3 дня</p>
				</button>
				<button
					className={cn(styles.filterBtn, styles.filterRightBtn)}
				></button>
			</div>
		</>
	)
}

export default FilterDate
