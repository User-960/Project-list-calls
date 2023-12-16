import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import useSound from 'use-sound'

import audioFinishGame from '../../assets/audio/audioFinishGame.mp3'

import styles from './SoundPlayer.module.scss'

interface ISoundPlayerProps {
	closeSoundPlayer: () => void
}

const SoundPlayer: FC<ISoundPlayerProps> = ({ closeSoundPlayer }) => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [time, setTime] = useState({
		min: '',
		sec: ''
	})
	const [currTime, setCurrTime] = useState({
		min: '',
		sec: ''
	})

	const [seconds, setSeconds] = useState()

	const [play, { pause, duration, sound }] = useSound(audioFinishGame)

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
		if (isPlaying) {
			pause()
			setIsPlaying(false)
		} else {
			play()
			setIsPlaying(true)
		}
	}

	return (
		<div className={styles.soundPlayer}>
			<div className={styles.time}>
				<p>
					{currTime.min}:{currTime.sec}
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
				<button className={styles.closeBtn} onClick={closeSoundPlayer}></button>
			</div>
		</div>
	)
}

export default SoundPlayer
