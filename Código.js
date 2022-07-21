function doGet(){
    let template = HtmlService.createTemplateFromFile('src/views/index.html').evaluate()
    return template
}

function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
  }