let overrideSetupPage;
let modListPage;

document.addEventListener("DOMContentLoaded", (event) => {
    let overrideSetupPage = document.getElementById("overrideSetupPage");
    let modListPage = document.getElementById("modListPage");
});

async function start() {
    folderAccess = await getFolderAccess();

    const succeededOverrideCheck = await checkCorrectOverrides(folderAccess);
    if (!succeededOverrideCheck) {
        let sorryDiv = document.createElement("div");
        sorryDiv.innerText =
            "Something went wrong, please check if you did everything right and try again";
        document.body.appendChild(sorryDiv);
        setTimeout(() => {
            window.location.reload();
        }, 5000);
        return;
    }

    overrideSetupPage.style.display = "none";
    modListPage.style.display = "block";
}
