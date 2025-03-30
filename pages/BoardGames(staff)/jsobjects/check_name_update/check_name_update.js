export default {
	Button4CopyonClickGame () {
		const menuNames = Table1.tableData.map(row => row.name);

		const newMenuName = new_gameCopy.text;

		if (!menuNames.includes(newMenuName)) {
    	showAlert("ชื่อเมนูไม่มีอยู่ในรายการ!", "error");
		} else {
    	update_game.run();
			setTimeout(() => {
				get_game.run();
        showAlert("Successfully Update");
    	}, 2000);
		}
	}
}