export default {
{
  "filter": { "_id": ObjectId("{{ Table1.selectedRow._id }}") },
  "update": {
    "$set": {
      "status": "unavailable",
      "borrowed_by_table": "{{ TableDropdown.selectedOptionValue }}"
    }
  }
}

}