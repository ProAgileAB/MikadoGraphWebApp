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
async function getDirectory() {
    let dirHandle = await window.showDirectoryPicker()
    console.log(dirHandle)
    for await (const [key, value] of dirHandle.entries()) {
        console.log({ key, value })
        let fileData = await value.getFile()
        let text = await fileData.text()
        console.log(text)
    }
}
function dragOverHandler(ev) {
    ev.dataTransfer.dropEffect = "copy"
    console.log('File(s) in drop zone');
    ev.preventDefault();
}
function dropHandler(ev) {
    console.dir(ev)
    console.dir(ev.dataTransfer.items[0].getAsFile())
    console.log('File(s) dropped');
    ev.preventDefault();
}