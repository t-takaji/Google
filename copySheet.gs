/**
 * 先頭シートを複製します。
 */
function copySheet() {
  // 先頭シート取得
  const spreadsheet = SpreadsheetApp.openById("1sH3iyw75CWY7x51yl8lt0x3wvvPzblGZ0a1sPNKLQds");
  const targetSheet = spreadsheet.getSheets()[0];

  // 先頭シート複製し、現在日時で改名
  const newSheet = targetSheet.copyTo(spreadsheet);
  newSheet.setName(Utilities.formatDate(new Date(),"JST", "yyyy/MM/dd"));

  // 複製シートを左に寄せる
  spreadsheet.setActiveSheet(newSheet);
  spreadsheet.moveActiveSheet(1);
}
