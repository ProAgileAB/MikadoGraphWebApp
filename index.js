import {parse} from "./parser.js";

function setInnerText(resultText) {
  document.getElementById("editor").innerText = resultText
}

async function setText(fileHandle, callback) {
    let fileData = await fileHandle.getFile()
    let source = await fileData.text();
    const ast = parse(source)
    let resultText = JSON.stringify(ast, null, 2)
    callback(resultText)
}

export async function getFile() {
    try {
        let [fileHandle] = await window.showOpenFilePicker()
        setInterval(() => {
            setText(fileHandle, setInnerText)
               .then(() => console.log("updated"))
        }, 500)
    } catch (e) { }
}