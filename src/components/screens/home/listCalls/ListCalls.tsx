import Image from 'next/image'
import React, { useEffect } from 'react'

import Loader from '@/ui/loader/Loader'

import { useGetCalls } from '@/components/hooks/useGetCalls'
import { useListCalls } from '@/components/hooks/useListCalls'

import avatarOne from '../../../../../public/images/avatarOne.jpg'
import incomingCall from '../../../../../public/images/incomingCall.svg'
import missedCall from '../../../../../public/images/missedCall.svg'
import noAnswerCall from '../../../../../public/images/noAnswerCall.svg'
import outgoingCall from '../../../../../public/images/outgoingCall.svg'

import styles from './ListCalls.module.scss'
import { formatDate } from '@/helpers/formatDate'
import { formatDuration } from '@/helpers/formatDuration'
import { formatPhone } from '@/helpers/formatPhone'

const cn = require('clsx')

const ListCalls = () => {
	const { isLoading, queryListCalls } = useGetCalls()
	const { listCalls } = useListCalls()

	useEffect(() => {
		queryListCalls()
	}, [])

	useEffect(() => {
		console.log(listCalls.map(call => console.log(call)))
	}, [listCalls])

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
						{listCalls.map(call => (
							<li key={call.id} className={styles.listCallsItem}>
								{call.in_out === 1 ? (
									<div className={styles.itemType}>
										{call.status === `Не дозвонился` ? (
											<Image
												className={styles.itemTypeCallIcon}
												src={noAnswerCall}
												alt='type of call'
												draggable={false}
											/>
										) : (
											<Image
												className={styles.itemTypeCallIcon}
												src={outgoingCall}
												alt='type of call'
												draggable={false}
											/>
										)}
									</div>
								) : (
									<div className={styles.itemType}>
										{call.status === `Не дозвонился` ? (
											<Image
												className={styles.itemTypeCallIcon}
												src={missedCall}
												alt='type of call'
												draggable={false}
											/>
										) : (
											<Image
												className={styles.itemTypeCallIcon}
												src={incomingCall}
												alt='type of call'
												draggable={false}
											/>
										)}
									</div>
								)}

								<div className={styles.itemTime}>{formatDate(call.date)}</div>

								<div className={styles.itemEmployee}>
									<Image
										className={styles.itemAvatar}
										src={call.person_avatar || avatarOne}
										alt='avatar of employee'
										width={32}
										height={32}
										draggable={false}
									/>
								</div>

								<div className={styles.itemCall}>
									{formatPhone(call.from_number)}
								</div>

								<div className={styles.itemSource}>
									{call.source ? call.source : ''}
								</div>

								<div className={styles.itemEstimation}>
									{!call.results?.length ? (
										<div
											className={cn(
												styles.itemEstimationBlock,
												styles.itemEstimationSuccess
											)}
										>
											Отлично
										</div>
									) : (
										<div
											className={cn(
												styles.itemEstimationBlock,
												styles.itemEstimationFailure
											)}
										>
											Плохо
										</div>
									)}
								</div>

								<div className={styles.itemDuration}>
									{formatDuration(call.time)}
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
		</>
	)
}

export default ListCalls
