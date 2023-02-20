var menu = document.getElementById("bar");
var nav = document.getElementById("nav");

nav.style.right= '-500px';
menu.onclick = function () {
    if (nav.style.right == '-500px') {
        nav.style.right = '0px';
    }
    else {
        nav.style.right = '-500px';
    }
}