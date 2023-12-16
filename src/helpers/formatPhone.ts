export const formatPhone = (phone: string) => {
	if (phone.length === 11) {
		let countryCode = phone.slice(0, 1)
		let operatorCode = phone.slice(1, 4)
		let triade = phone.slice(4, 7)
		let pair1 = phone.slice(7, 9)
		let pair2 = phone.slice(9, 11)
		return (
			'+' +
			countryCode +
			' (' +
			operatorCode +
			') ' +
			triade +
			'-' +
			pair1 +
			'-' +
			pair2
		)
	}

	if (phone.length === 6) {
		let countryCode = '7'
		let cityCode = '8443'
		let pair1 = phone.slice(0, 2)
		let pair2 = phone.slice(2, 4)
		let pair3 = phone.slice(4, 6)
		return (
			'+' +
			countryCode +
			'(' +
			cityCode +
			')' +
			pair1 +
			'-' +
			pair2 +
			'-' +
			pair3
		)
	}
	return phone
}
