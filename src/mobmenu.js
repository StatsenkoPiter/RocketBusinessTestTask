mm.onclick = clickMobMenu;

function clickMobMenu () {
    if (mm.classList.contains('mobm')) {
        mm.classList.remove('mobm');
        mm.classList.add('mobc');
        nav.classList.toggle ('mbhidden');
    } else {
        mm.classList.remove('mobc');
        mm.classList.add('mobm');
        nav.classList.toggle ('mbhidden');
    }
};