export default {
  SurnameonClick: function () {
    // เรียกใช้งาน edit_name.run() และจัดการกับผลลัพธ์
    edit_surname.run().then(() => {
      // ตรวจสอบค่าจากการทำงานของ edit_name.run() ก่อนที่จะทำการเก็บค่าใหม่
      if (newsurname.text !== '') {  // ตรวจสอบว่าชื่อใหม่ไม่ว่าง
        // เก็บค่าใน storeValue
        storeValue('staff', { 
					staff_id: appsmith.store.staff.staff_id,
					name: appsmith.store.staff.name,  // เก็บชื่อใหม่ที่อัปเดต
					surname: newsurname.text,
					tel: appsmith.store.staff.tel,
          email: appsmith.store.staff.email,  // เก็บ email เดิม
					password: appsmith.store.staff.password
        });

        // ปิด modal หลังจากเก็บค่าเสร็จ
        closeModal('editsurname');

        // แสดงการแจ้งเตือนว่าอัปเดตสำเร็จ
        showAlert("Successfully Update");
      } else {
        // ถ้าชื่อใหม่ไม่ถูกต้องหรือเป็นค่าว่าง
        showAlert("Please enter a valid name.", "error");
      }
    }).catch((error) => {
      // ถ้ามีข้อผิดพลาดในการเรียกใช้งาน edit_name.run()
      showAlert("Update Failed: " + error.message, "error");
    });
  }
};
