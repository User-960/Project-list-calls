import React, { useEffect } from 'react'

import { useListCalls } from '@/components/hooks/useListCalls'

import styles from '../ListCalls.module.scss'

import { ICall } from '@/interfaces/calls'

const cn = require('clsx')

const NavList = () => {
	const {
		listCalls,
		downloadRecord,
		filteredListCalls,
		setFilteredListCalls,
		sortDurationUpDown,
		setSortDurationUpDown,
		sortDateUpDown,
		setSortDateUpDown,
		setIsSortDuration,
		setIsSortDate
	} = useListCalls()

	useEffect(() => {
		setSortDurationUpDown('down')
		setSortDateUpDown('down')
	}, [])

	return (
		<>
			<div className={styles.navList}>
				<div className={cn(styles.navListColumn, styles.navListType)}>Тип</div>
				<div className={cn(styles.navListColumn, styles.navListTime)}>
					Время
					{sortDateUpDown === 'up' ? (
						<button
							onClick={() => {
								setIsSortDate(true)
								setSortDateUpDown('down')
							}}
							className={cn(styles.durationBtn, styles.durationUpArrow)}
						></button>
					) : (
						<button
							onClick={() => {
								setIsSortDate(true)
								setSortDateUpDown('up')
							}}
							className={cn(styles.durationBtn, styles.durationDownArrow)}
						></button>
					)}
				</div>
				<div className={cn(styles.navListColumn, styles.navListEmployee)}>
					Сотрудник
				</div>
				<div className={cn(styles.navListColumn, styles.navListCall)}>
					Звонок
				</div>
				<div className={cn(styles.navListColumn, styles.navListSource)}>
					Источник
				</div>
				<div className={cn(styles.navListColumn, styles.navListEstimation)}>
					Оценка
				</div>
				<div className={cn(styles.navListColumn, styles.navListDuration)}>
					Длительность
					{sortDurationUpDown === 'up' ? (
						<button
							onClick={() => {
								setIsSortDuration(true)
								setSortDurationUpDown('down')
							}}
							className={cn(styles.durationBtn, styles.durationUpArrow)}
						></button>
					) : (
						<button
							onClick={() => {
								setIsSortDuration(true)
								setSortDurationUpDown('up')
							}}
							className={cn(styles.durationBtn, styles.durationDownArrow)}
						></button>
					)}
				</div>
			</div>
		</>
	)
}

export default NavList
