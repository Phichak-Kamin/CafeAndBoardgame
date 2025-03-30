export default {
  selectTableAndLoadData: async () => {
    await getLatestOrderByTable.run();
		
		await get_allcart.run();
    
    setTimeout(() => {
      showModal(Modal1.name);
    }, 10);
  }
};
