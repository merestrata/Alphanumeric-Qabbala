window.onload = function() {
    var scrollmenu = document.getElementById('scrollmenu');
    scrollmenu.scrollLeft = (scrollmenu.scrollWidth - scrollmenu.clientWidth) / 2;
};

const scrollmenu = document.getElementById('scrollmenu');

const scrollmenuLeft = document.createElement('div');
scrollmenuLeft.classList.add('fadeLeft');
document.body.appendChild(scrollmenuLeft);

const scrollmenuRight = document.createElement('div');
scrollmenuRight.classList.add('fadeRight');
document.body.appendChild(scrollmenuRight);

function updateBeforePosition() {
    const rect = scrollmenu.getBoundingClientRect();
    scrollmenuLeft.style.left = `${rect.left}px`;
    scrollmenuRight.style.right = `${rect.left}px`;

}

scrollmenu.addEventListener('scroll', updateBeforePosition);
window.addEventListener('resize', updateBeforePosition);
window.addEventListener('load', updateBeforePosition);








document.getElementById('changeMenu').addEventListener('click', function() {
    document.querySelector('.settings-popup').style.display = 'flex';
    // document.querySelector('.fadeLeft').style.display = 'none';
    // document.querySelector('.fadeRight').style.display = 'none';
    document.getElementById('navbar').style.filter = "brightness(0.4)";
    document.getElementById('navbar').style.pointerEvents = "none";
    document.getElementById('content').style.filter = "brightness(0.4)";
    document.getElementById('content').style.pointerEvents = "none";
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.querySelector('.settings-popup').style.display = 'none';
    // document.querySelector('.fadeLeft').style.display = 'block';
    // document.querySelector('.fadeRight').style.display = 'block';
    document.getElementById('navbar').style.filter = "brightness(1)";
    document.getElementById('navbar').style.pointerEvents = "visible";
    document.getElementById('content').style.filter = "brightness(1)";
    document.getElementById('content').style.pointerEvents = "visible";

});







