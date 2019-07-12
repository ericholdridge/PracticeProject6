let items = document.querySelector('.items-right');
let menu = document.getElementById('menu').addEventListener('click', function(e) {
    e.preventDefault();
    items.classList.toggle('hide');
});