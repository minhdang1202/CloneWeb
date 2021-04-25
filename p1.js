var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu')
var headerHeight = header.clientHeight;
mobileMenu.onclick = function() {
    var isClose = (header.clientHeight === headerHeight);
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function() {
        if (!(this.nextElementSibling && this.nextElementSibling.classList.contains('subnav'))) {
            header.style.height = null;
        } else {

        }
    }
}