let sideMenu = false;

function showMenu() {
    sideMenu = !sideMenu
    if (sideMenu) {
        document.getElementById('side-menu').classList.replace('-left-full', 'left-0')
    } else {
        document.getElementById('side-menu').classList.replace('left-0', '-left-full')
    }
}