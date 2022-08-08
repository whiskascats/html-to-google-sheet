function doGet() {
  let html = HtmlService.createTemplateFromFile('index')
  let check = html.evaluate()
  let show = check.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
  return show
}

function postData(rowData) {
  let str_date = new Date()
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('sheet1')

  sheet.appendRow([str_date, rowData.name, rowData.gender, rowData.age, rowData.comment])
}