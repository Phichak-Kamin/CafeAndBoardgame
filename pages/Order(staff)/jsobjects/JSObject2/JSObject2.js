export default {
    async handleCheckout() {
        try {
            await delete_orderdetails.run(); // ลบ order details
            await updateTableStatus.run(); // อัปเดตสถานะโต๊ะ
            showAlert("Check out!", "success"); // แสดงแจ้งเตือน
            closeModal("Modal1"); // ปิด Modal1

            // รอ 1 วินาที (1000 มิลลิวินาที) ก่อน navigate ไปหน้า Order(staff)
            await new Promise(resolve => setTimeout(resolve, 1000));

            navigateTo("Order(staff)", {}, "SAME_WINDOW"); // ไปหน้า Order (staff)
        } catch (error) {
            showAlert("เกิดข้อผิดพลาด: " + error.message, "error");
            console.error("Error:", error);
        }
    }
};
