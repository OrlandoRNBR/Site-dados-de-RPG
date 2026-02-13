document.addEventListener('DOMContentLoaded',() => { s

    const btnMobile = document.getElementById('btnMobile');
    const nav = document.getElementById('navLinks');


function toggleMenu (){
nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
});

function helloWorld(){
alert("Hello, World!");
}

