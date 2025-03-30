export default {
	status: () => {
		const status = ['available', 'unavailable', 'out of stock']
		return status.map(r => ({label: r, value: r}))
	}
}