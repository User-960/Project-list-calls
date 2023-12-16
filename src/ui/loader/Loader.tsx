import Image from 'next/image'
import { FC } from 'react'

const Loader: FC = () => {
	return (
		<Image
			src={'/images/spinner.svg'}
			alt='loader'
			width={220}
			height={130}
			priority={true}
			draggable={false}
		/>
	)
}

export default Loader
