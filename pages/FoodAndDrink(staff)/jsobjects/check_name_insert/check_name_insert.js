export default {
	InsertBottonClick () {
		const menuNames = Table1.tableData.map(row => row.name);

		const newMenuName = new_name.text;

		if (menuNames.includes(newMenuName)) {
			closeModal(Insert.name);
			setTimeout(() => {
				get_menu.run();
        showAlert("ชื่อเมนูมีอยู่ในรายการแล้ว!", "error");;
    	}, 2000);
		} else {
			getMaxMenu.run()
    	insert_menu.run();
			closeModal(Insert.name);
			setTimeout(() => {
				get_menu.run();
        showAlert("Successfully Insert");
    	}, 2000);
		}
	}
}