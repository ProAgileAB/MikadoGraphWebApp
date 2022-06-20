async function setText(fileHandle) {
    let fileData = await fileHandle.getFile()
    document.getElementById("editor").innerText = await fileData.text()
}
async function getFile() {
    try {
        let [fileHandle] = await window.showOpenFilePicker()
        await setText(fileHandle)
        setInterval(() => { setText(fileHandle).then(() => console.log("updated"))}, 1000)
    } catch (e) { }
}
