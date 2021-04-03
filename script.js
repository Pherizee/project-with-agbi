const hamburger = document.querySelector("header .hamburger");
const nav = document.querySelector("header nav"); 
const close = document.querySelector("header nav .close-btn"); 

hamburger.addEventListener("click", () => {
    nav.classList.add("open");
})

close.addEventListener("click", () => {
    nav.classList.remove("open");
})