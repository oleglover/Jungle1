let stars = document.getElementById('stars');
let dird1 = document.getElementById('dird1');
let dird2 = document.getElementById('dird2');
let btn = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let water = document.getElementById('water');
let header = document.getElementById('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    text.style.top = 50+ value * -0.5 + '%';
    dird1.style.top = value * -1.5 + 'px';
    dird1.style.left = value * 2 + 'px';
    dird2.style.top = value * -1.5 + 'px';
    dird2.style.left = value * -5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px';
    forest.style.top = value * 0.25 + 'px';
    header.style.top = value * -0.5 + 'px';  
})
