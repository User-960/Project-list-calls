import { FC, useEffect, useState } from 'react'
import useSound from 'use-sound'

import styles from './SoundPlayer.module.scss'

const audioMock = require('../../assets/audio/audioMock.mp3')

interface ISoundPlayerProps {
	closeSoundPlayer: () => void
	downloadRecord: string
}

const SoundPlayer: FC<ISoundPlayerProps> = ({
	closeSoundPlayer,
	downloadRecord
}) => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [time, setTime] = useState({
		min: '0',
		sec: '0'
	})
	const [currTime, setCurrTime] = useState({
		min: '0',
		sec: '0'
	})

	const [seconds, setSeconds] = useState()

	// const [play, { pause, duration, sound }] = useSound(
	// 	!downloadRecord ? downloadRecord : audioMock
	// )

	const [play, { pause, duration, sound }] = useSound(audioMock)

	useEffect(() => {
		if (duration) {
			const sec = duration / 1000
			const min = Math.floor(sec / 60)
			const secRemain = Math.floor(sec % 60)
			setTime({
				min: `${min}`,
				sec: `${secRemain}`
			})
		}
	}, [isPlaying])

	useEffect(() => {
		const interval = setInterval(() => {
			if (sound) {
				setSeconds(sound.seek([]))
				const min = String(Math.floor(sound.seek([]) / 60))
				const sec = String(Math.floor(sound.seek([]) % 60))
				setCurrTime({
					min,
					sec
				})
			}
		}, 1000)
		return () => clearInterval(interval)
	}, [sound])

	const playingButton = () => {
		if (isPlaying && downloadRecord) {
			pause()
			setIsPlaying(false)
		} else if (!isPlaying && downloadRecord) {
			play()
			setIsPlaying(true)
		}
	}

	const stopPlayingButton = () => {
		if (isPlaying && downloadRecord) {
			pause()
			setIsPlaying(false)
		}
	}

	// const createMarkup = () => {
	// 	return { __html: downloadRecord }
	// }

	return (
		<div className={styles.soundPlayer}>
			{/* <audio id='audio' controls>
				<source src={downloadRecord} type='audio/mpeg; codecs=vorbis' />
				<source src={downloadRecord} type='audio/mpeg' />
				<source src={downloadRecord} type='audio/ogg'></source>
			</audio> */}

			{/* {downloadRecord && <div dangerouslySetInnerHTML={createMarkup()}></div>} */}

			<div className={styles.time}>
				<p>
					{Number(currTime.min) === 0 ? '00' : currTime.min}:
					{Number(currTime.sec) < 10 ? `0${currTime.sec}` : currTime.sec}
				</p>
				{/* <p>
						{time.min}:{time.sec}
					</p> */}
			</div>

			<div className={styles.playPauseBtnWrapper}>
				{!isPlaying ? (
					<button
						className={styles.playButton}
						onClick={playingButton}
					></button>
				) : (
					<button
						className={styles.pauseButton}
						onClick={playingButton}
					></button>
				)}
			</div>

			<div className={styles.timeWrapper}>
				<input
					type='range'
					min='0'
					max={duration / 1000}
					value={seconds}
					className={styles.timeline}
					onChange={e => {
						sound.seek([e.target.value])
					}}
				/>
			</div>

			<div className={styles.btnWrapper}>
				<button className={styles.downloadBtn}></button>
				<button
					className={styles.closeBtn}
					onClick={() => {
						stopPlayingButton()
						closeSoundPlayer()
					}}
				></button>
			</div>
		</div>
	)
}

export default SoundPlayer
