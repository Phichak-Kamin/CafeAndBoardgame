export default {
  InsertMemberData: async function () {
    try {
      // Trigger the query to get the latest member_id
      const maxMember = await getMaxMember.run();
      console.log("Max Member:", maxMember); // Debugging

      // ตรวจสอบว่า maxMember มีค่าและอยู่ในรูป JSON object ที่ถูกต้อง
      if (!maxMember || typeof maxMember !== "object") {
        throw new Error("Invalid response from getMaxMember");
      }

      // Prepare the new member data
      const newMemberData = {
        member_id: maxMember.member_id + 1, // หรือค่าที่เหมาะสม
        // เพิ่มฟิลด์อื่นๆ ตามที่ `add_member` ต้องการ
      };

      // Insert into the database
      await add_member.run(newMemberData);

      // Navigate to login page
      navigateTo("Login");

      // Show a success message
      showAlert("Member successfully inserted!");
    } catch (error) {
      console.error("Error inserting member:", error);
      showAlert("Failed to insert member. Please try again.");
    }
  }
};
