import React from 'react'

import { useListCalls } from '@/components/hooks/useListCalls'

import styles from '../ListCalls.module.scss'

const cn = require('clsx')

const NavList = () => {
	const { listCalls, downloadRecord, filteredListCalls } = useListCalls()

	return (
		<>
			<div className={styles.navList}>
				<div className={cn(styles.navListColumn, styles.navListType)}>Тип</div>
				<div className={cn(styles.navListColumn, styles.navListTime)}>
					Время
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
				</div>
			</div>
		</>
	)
}

export default NavList
