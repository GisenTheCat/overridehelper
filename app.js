const baseUrl = "https://gisenthecat.github.io/overridehelper/";

async function start() {
    document.body.replaceChildren();

    folderAccess = await getFolderAccess();
    if (!(await checkCorrectOverrides(folderAccess))) {
        let sorryDiv = document.createElement("div");
        sorryDiv.innerText =
            "Something went wrong, please check if you did everything right and try again";
        document.body.appendChild(sorryDiv);
        setTimeout(() => {
            window.location.reload();
        }, 5000);
        return;
    }
}
