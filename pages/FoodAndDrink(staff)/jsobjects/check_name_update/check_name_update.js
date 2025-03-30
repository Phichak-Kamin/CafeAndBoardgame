export default {
	Button4CopyonClick: function () {
		const menuNames = Table1.tableData ? Table1.tableData.map(row => row.name) : [];
		const newMenuName = new_nameCopyCopy?.text || "";

		if (!menuNames.includes(newMenuName)) {
			showAlert("ชื่อเมนูไม่มีอยู่ในรายการ!", "error");
		} else {
			update_menu.run().then(() => {
				get_menu.run();
				showAlert("Successfully Update");
			}).catch(() => {
				showAlert("Update Failed", "error");
			});
		}
	}
}
