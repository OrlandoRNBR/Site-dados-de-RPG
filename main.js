document.addEventListener('DOMContentLoaded',() => {

    const btnMobile = document.getElementById('btnMobile');
    const nav = document.getElementById('navLinks');


function toggleMenu (){
console.log("O botão foi clicado!");
nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
});

function helloWorld(){
alert("Hello, World!");
}

