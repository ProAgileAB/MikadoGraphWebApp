import {parse} from "./parser.js";

async function setText(fileHandle) {
    let fileData = await fileHandle.getFile()
    let source = await fileData.text();
    const ast = parse(source)
    document.getElementById("editor").innerText =
      JSON.stringify(ast, null, 2)
}

export async function getFile() {
    try {
        let [fileHandle] = await window.showOpenFilePicker()
        await setText(fileHandle)
        setInterval(() => { setText(fileHandle).then(() => console.log("updated"))}, 1000)
    } catch (e) { }
}