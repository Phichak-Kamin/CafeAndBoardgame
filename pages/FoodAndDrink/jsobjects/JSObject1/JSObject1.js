export default {
	confirm_btt() {

		// ดึงค่า max_details_id จาก getMaxDetails
		getMaxDetails.run()
			.then(data => {
				let max_details_id = data?.[0]?.details_id || 0; // ถ้าไม่มีข้อมูล ให้ใช้ค่า 0
			
				if (Table2.tableData.length === 0) {
				showAlert("ไม่มีเมนู!", "error");
				storeValue("last_details", max_details_id)
				return; // หยุดการทำงานต่อ
				}

				if (max_details_id >= 0) {
					storeValue("last_details", max_details_id); // เก็บค่าไว้ใน Store
					// showAlert("Stored last_details: " + max_details_id, "success");

					// รัน get_cart
					get_cart.run().catch(error => {
						showAlert("เกิดข้อผิดพลาดในการดึงตะกร้า: " + error.message, "error");
					});
				} else {
					showAlert("error");
				}
			})
			.catch(error => {
				showAlert("เกิดข้อผิดพลาด: " + error.message, "error");
			});
		get_cart.run()
		closeModal(Menu.name)
	}
}
