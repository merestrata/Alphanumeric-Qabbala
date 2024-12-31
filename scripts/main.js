window.onload = function() {
    var scrollmenu = document.getElementById('scrollmenu');
    scrollmenu.scrollLeft = (scrollmenu.scrollWidth - scrollmenu.clientWidth) / 2;
};


const scrollmenu = document.getElementById('scrollmenu');
const scrollmenuBefore = document.createElement('div');
scrollmenuBefore.style.position = 'absolute';
scrollmenuBefore.style.top = '0';
scrollmenuBefore.style.marginLeft = '-1px';
scrollmenuBefore.style.marginTop = '70px';
scrollmenuBefore.style.width = '50px';
scrollmenuBefore.style.height = '43px';
scrollmenuBefore.style.pointerEvents = 'none';
scrollmenuBefore.style.zIndex = '1';
scrollmenuBefore.style.background = 'linear-gradient(to right, #121212, rgba(255, 255, 255, 0))';
document.body.appendChild(scrollmenuBefore);

const scrollmenuAfter = document.createElement('div');
scrollmenuAfter.style.position = 'absolute';
scrollmenuAfter.style.top = '0';
scrollmenuAfter.style.marginRight = '-1px';
scrollmenuAfter.style.marginTop = '70px';
scrollmenuAfter.style.width = '50px';
scrollmenuAfter.style.height = '43px';
scrollmenuAfter.style.pointerEvents = 'none';
scrollmenuAfter.style.zIndex = '1';
scrollmenuAfter.style.background = 'linear-gradient(to left, #121212, rgba(255, 255, 255, 0))';
document.body.appendChild(scrollmenuAfter);

function updateBeforePosition() {
    const rect = scrollmenu.getBoundingClientRect();
    scrollmenuBefore.style.left = `${rect.left}px`;
    scrollmenuAfter.style.right = `${rect.left}px`;

}

scrollmenu.addEventListener('scroll', updateBeforePosition);
window.addEventListener('resize', updateBeforePosition);
window.addEventListener('load', updateBeforePosition);
