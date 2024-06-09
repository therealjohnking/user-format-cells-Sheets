function onEdit(e) {
  // Get the active spreadsheet and the active cell
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var activeCell = ss.getActiveCell();
  
  // Get the email of the person who edited the cell
  var email = Session.getActiveUser().getEmail();
  
  // Check if the email matches person's email
  if(email === "person@email.com") {                  // Replace with actual email
    // Apply formatting
    activeCell.setFontColor("green");
  }

  // Check if the email matches person2's email
  if(email === "person2@email.com") {                 // Replace with actual email
  // Apply formatting
  activeCell.setFontColor("blue");
  }

  // Check if the email matches person3's email
  if(email === "person3@email.com") {                  // Replace with actual email
  // Apply formatting
  activeCell.setFontColor("purple");
  }

  // Repeat as many times as needed for additional users
}
