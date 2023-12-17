import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import Loader from '@/ui/loader/Loader'
import SoundPlayer from '@/ui/soundPlayer/SoundPlayer'

import { useGetCalls } from '@/components/hooks/useGetCalls'
import { useGetRecord } from '@/components/hooks/useGetRecord'
import { useListCalls } from '@/components/hooks/useListCalls'

import avatarOne from '../../../../../public/images/avatarOne.jpg'
import incomingCall from '../../../../../public/images/incomingCall.svg'
import missedCall from '../../../../../public/images/missedCall.svg'
import noAnswerCall from '../../../../../public/images/noAnswerCall.svg'
import outgoingCall from '../../../../../public/images/outgoingCall.svg'

import styles from './ListCalls.module.scss'
import NavList from './navList/NavList'
import { formatDate } from '@/helpers/formatDate'
import { formatDuration } from '@/helpers/formatDuration'
import { formatPhone } from '@/helpers/formatPhone'

const cn = require('clsx')

const ListCalls = () => {
	const { isLoading, queryListCalls } = useGetCalls()
	const {
		listCalls,
		downloadRecord,
		filteredListCalls,
		openSound,
		setOpenSound,
		setSortDurationUpDown
	} = useListCalls()
	const { queryRecord } = useGetRecord()
	// const [openSoundPlayer, setOpenSoundPlayer] = useState<boolean>(false)
	// const [openSound, setOpenSound] = useState<number>(0)

	useEffect(() => {
		queryListCalls()
	}, [])

	const downloadRecordServer = (call_id: string | number): any => {
		const currentCall = listCalls.filter(call => call.id === call_id)

		const recordId = currentCall[0].record
		const partnershipId = currentCall[0].partnership_id

		queryRecord({ recordId, partnershipId })
	}

	// useEffect(() => {
	// 	console.log(
	// 		listCalls.map(call => console.log(call.record, call.partnership_id))
	// 	)
	// }, [listCalls])

	// useEffect(() => {
	// 	console.log(downloadRecord)
	// }, [downloadRecord])

	return (
		<>
			<div className={styles.listCallsWrapper}>
				<NavList />

				{isLoading ? (
					<div className={styles.loaderWrapper}>
						<Loader />
					</div>
				) : (
					<ul className={styles.listCalls}>
						{filteredListCalls.map(call => (
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
									{call.record && call.partnership_id ? (
										<>
											{!openSound && (
												<button
													className={styles.playButton}
													onClick={() => {
														downloadRecordServer(call.id)
														setOpenSound(call.id)
													}}
												></button>
											)}
											{openSound !== call.id && (
												<p>{formatDuration(call.time)}</p>
											)}
										</>
									) : (
										<p>{formatDuration(call.time)}</p>
									)}

									{call.record &&
										call.partnership_id &&
										openSound === call.id &&
										downloadRecord !== '' && (
											<SoundPlayer
												closeSoundPlayer={() => setOpenSound(0)}
												downloadRecord={downloadRecord}
											/>
										)}
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
