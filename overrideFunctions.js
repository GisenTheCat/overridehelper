let folderAccess;
async function getFolderAccess() {
    const handle = await window.showDirectoryPicker({
        mode: "readwrite",
    });
    return handle;
}

async function readFile(fileHandle) {
    const file = await fileHandle.getFile();
    const text = await file.text();
    return text;
}
async function saveFile(fileHandle, content) {
    const writable = await fileHandle.createWritable();
    await writable.write(content);
    await writable.close();
}
async function createAndSaveFile(folderHandle, fileName, content) {
    const fileHandle = await folderHandle.getFileHandle(fileName, {
        create: true,
    });
    await saveFile(fileHandle, content);
}
async function createFolder(parentFolderHandle, folderName) {
    const newFolderHandle = await parentFolderHandle.getDirectoryHandle(
        folderName,
        {
            create: true,
        }
    );
    return newFolderHandle;
}
async function deleteFile(folderHandle, fileName) {
    const fileHandle = await folderHandle.getFileHandle(fileName);
    await fileHandle.remove();
}

async function checkCorrectOverrides(folderAccess) {
    let folder = await createFolder(
        await createFolder(folderAccess, "gisenthecat.github.io"),
        "overridehelper"
    );
    await createAndSaveFile(folder, "check", "");
    let status = await fetch(
        "https://gisenthecat.github.io/overridehelper/check"
    ).then((res) => res.status);
    if (status == 404) {
        return false;
    }
    return true;
}
