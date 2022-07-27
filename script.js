
let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
var typed= new Typed('.typing-text', {
    strings: ["Web Developer", "Web Designer", "Web Designer & Developer"],
    loop: true,
    typespeed: 0,
})