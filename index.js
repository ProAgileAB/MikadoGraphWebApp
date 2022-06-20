async function setText(fileHandle) {
    let fileData = await fileHandle.getFile()
    let text = await fileData.text()
    document.getElementById("editor").innerText = text
}
async function getFile() {
    try {
        let [fileHandle] = await window.showOpenFilePicker()
        await setText(fileHandle)
        setInterval(() => { setText(fileHandle).then(() => console.log("updated"))}, 1000)
    } catch (e) {
        return
    }
}
