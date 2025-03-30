export default {
  handleTableSelection: function () {
    if (!appsmith.store.selectedTableId) {
      showAlert("กรุณาเลือกโต๊ะก่อน!", "error");
      return;
    }

    updateTableStatus.run()
		getMaxOrders.run()
      .then(() => {
        insertOrders.run();
      })
      .then(() => {
        return getTableStatus.run(); 
      })
		  .then(data => {
    			storeValue("id_order", data[0]);
			})
      .then(() => {
        showAlert("อัปเดตสถานะโต๊ะเรียบร้อย!", "success");
        navigateTo('Home', {}, 'SAME_WINDOW');
      })
      .catch((error) => {
        showAlert("ไม่สามารถอัปเดตได้: " + error.message, "error");
      });
		
  }
};
