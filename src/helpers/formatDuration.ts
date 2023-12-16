export const formatDuration = (sec: number) => {
	let date = new Date(1970, 0, 0, 0, 0, +sec || 0)
	let time = date.toLocaleTimeString('ru')

	return time.slice(3)
}
