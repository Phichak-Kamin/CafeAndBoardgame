export default {
	category: () => {
		const category = ['milk', 'coffee', 'tea', 'soda', 'dessert']
		return category.map(r => ({label: r, value: r}))
	}
}