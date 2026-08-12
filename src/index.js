const $ = document.querySelector.bind(document);
const menu = $("#menu");
const header = $("#header");

const toggleMenu = (e) => {
    const overflowHidden = "overflow-hidden";
    if (menu.open) {
        menu.close();
        document.documentElement.classList.remove(overflowHidden);
    }
    else {
        menu.show();
        document.documentElement.classList.add(overflowHidden);
    }
}