export const calcStartEndDate = (option: string) => {
	const currentDate = new Date()
	let currentDateStart: any

	if (option === '3 дня') {
		currentDateStart = currentDate.setDate(currentDate.getDate() - 3)
		const dateStart = new Date(currentDateStart)
		const dateEnd = new Date()

		let dayStart = dateStart.getDate()
		let monthStart = dateStart.getMonth() + 1
		let yearStart = dateStart.getFullYear()

		let dayEnd = dateEnd.getDate()
		let monthEnd = dateEnd.getMonth() + 1
		let yearEnd = dateEnd.getFullYear()

		const dateStartFormat = yearStart + '-' + monthStart + '-' + dayStart
		const dateEndFormat = yearEnd + '-' + monthEnd + '-' + dayEnd

		return [dateStartFormat, dateEndFormat]
	}

	if (option === '7 дней') {
		currentDateStart = currentDate.setDate(currentDate.getDate() - 7)
		const dateStart = new Date(currentDateStart)
		const dateEnd = new Date()

		let dayStart = dateStart.getDate()
		let monthStart = dateStart.getMonth() + 1
		let yearStart = dateStart.getFullYear()

		let dayEnd = dateEnd.getDate()
		let monthEnd = dateEnd.getMonth() + 1
		let yearEnd = dateEnd.getFullYear()

		const dateStartFormat = yearStart + '-' + monthStart + '-' + dayStart
		const dateEndFormat = yearEnd + '-' + monthEnd + '-' + dayEnd

		return [dateStartFormat, dateEndFormat]
	}

	if (option === '30 дней') {
		currentDateStart = currentDate.setDate(currentDate.getDate() - 30)
		const dateStart = new Date(currentDateStart)
		const dateEnd = new Date()

		let dayStart = dateStart.getDate()
		let monthStart = dateStart.getMonth() + 1
		let yearStart = dateStart.getFullYear()

		let dayEnd = dateEnd.getDate()
		let monthEnd = dateEnd.getMonth() + 1
		let yearEnd = dateEnd.getFullYear()

		const dateStartFormat = yearStart + '-' + monthStart + '-' + dayStart
		const dateEndFormat = yearEnd + '-' + monthEnd + '-' + dayEnd

		return [dateStartFormat, dateEndFormat]
	}

	if (option === '365 дней') {
		currentDateStart = currentDate.setDate(currentDate.getDate() - 365)
		const dateStart = new Date(currentDateStart)
		const dateEnd = new Date()

		let dayStart = dateStart.getDate()
		let monthStart = dateStart.getMonth() + 1
		let yearStart = dateStart.getFullYear()

		let dayEnd = dateEnd.getDate()
		let monthEnd = dateEnd.getMonth() + 1
		let yearEnd = dateEnd.getFullYear()

		const dateStartFormat = yearStart + '-' + monthStart + '-' + dayStart
		const dateEndFormat = yearEnd + '-' + monthEnd + '-' + dayEnd

		return [dateStartFormat, dateEndFormat]
	}

	return []
}
