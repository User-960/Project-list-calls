export const formatDate = (date: string) => {
	if (date.length === 19) {
		return date.slice(11, 16)
	}
}
