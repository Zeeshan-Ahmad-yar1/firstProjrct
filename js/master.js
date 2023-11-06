// HEADER SCROLL
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}


// NAV HIDE
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collaose.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})