const $ = document.querySelector.bind(document);
const menu = $("#menu");

const toggleMenu = (e) => {
    const menuOverflowHidden = "menu-overflow-hidden";
    if (menu.open) {
        menu.close();
        document.documentElement.classList.remove(menuOverflowHidden);
    }
    else {
        menu.show();
        document.documentElement.classList.add(menuOverflowHidden);
    }
}