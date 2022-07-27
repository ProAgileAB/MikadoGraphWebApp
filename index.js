import {parse} from "./parser.js"
import {translate} from "./translator.js"

function setInnerText(resultText) {
  document.getElementById("editor").innerText = resultText
}

let cacheSource = ""
async function setText(fileHandle, callback) {
    const fileData = await fileHandle.getFile()
    document.title = fileData.name
    const source = await fileData.text()

    if (cacheSource === source) return

    cacheSource = source
    try {
        const ast = parse(source)
        const resultText = translate(ast)
        callback(resultText)
        document.getElementById("error").innerText = ""
    } catch (e) {
        document.getElementById("error").innerText = e.message
    }
}

export async function getFile(callback) {
    try {
        let [fileHandle] = await window.showOpenFilePicker({
            types: [
                {
                    description: 'Mikado file',
                    accept: {
                        'text/x-mikado': ['.mikado']
                    }
                },
            ]
        })
        setInterval(() => {
            setText(fileHandle, callback || setInnerText)
        }, 500)
    } catch (e) { }
}