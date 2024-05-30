mm.onclick = toggleMobPic;

function toggleMobPic () {
    if (mm.classList.contains('mobm')) {
        mm.classList.remove('mobm');
        mm.classList.add('mobc');
    }
    else {
        mm.classList.remove('mobc');
        mm.classList.add('mobm');
    }
};