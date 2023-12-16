import Image from 'next/image'
import React, { useEffect } from 'react'

import Loader from '@/ui/loader/Loader'

import { useGetCalls } from '@/components/hooks/useGetCalls'

import avatarOne from '../../../../../public/images/avatarOne.jpg'
import outgoingCall from '../../../../../public/images/outgoingCall.svg'

import styles from './ListCalls.module.scss'

const cn = require('clsx')

const ListCalls = () => {
	const { isLoading, mutateAsync } = useGetCalls()

	useEffect(() => {
		mutateAsync()
	}, [])

	return (
		<>
			<div className={styles.listCallsWrapper}>
				<div className={styles.navList}>
					<div className={cn(styles.navListColumn, styles.navListType)}>
						Тип
					</div>
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
					<div className={cn(styles.navListColumn)}>Длительность</div>
				</div>

				{isLoading ? (
					<div className={styles.loaderWrapper}>
						<Loader />
					</div>
				) : (
					<ul className={styles.listCalls}>
						<li className={styles.listCallsItem}>
							<div className={styles.itemType}>
								<Image
									className={styles.itemTypeCallIcon}
									src={outgoingCall}
									alt='type of call'
									draggable={false}
								/>
							</div>

							<div className={styles.itemTime}>19:00</div>

							<div className={styles.itemEmployee}>
								<Image
									className={styles.itemAvatar}
									src={avatarOne}
									alt='type of call'
									draggable={false}
								/>
							</div>

							<div className={styles.itemCall}>+7 (987) 567-17-12</div>

							<div className={styles.itemSource}>Rabota.ru</div>

							<div className={styles.itemEstimation}>
								<div
									className={cn(
										styles.itemEstimationBlock,
										styles.itemEstimationSuccess
									)}
								>
									Отлично
								</div>
							</div>

							<div className={styles.itemDuration}>12:06</div>
						</li>
					</ul>
				)}
			</div>
		</>
	)
}

export default ListCalls
