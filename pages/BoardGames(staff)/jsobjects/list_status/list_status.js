export default {
	status: () => {
		const status = ['available', 'unavailable', 'broken']
		return status.map(r => ({label: r, value: r}))
	}
}