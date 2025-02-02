// Read More Function
let btnsMore = document.querySelectorAll(".blog .container .box .right button:first-of-type"),
btnsLess = document.querySelectorAll(".blog .container .box .right button:last-of-type"),
paras = document.querySelectorAll(".blog .container .box .right p");


btnsMore.forEach(btnMore => {
    btnMore.addEventListener("click", () => {
        btnMore.previousElementSibling.style.whiteSpace = "normal";
        btnMore.style.display = "none";
        btnMore.nextElementSibling.style.display = "block";
    });
});

btnsLess.forEach(btnLess => {
    btnLess.addEventListener("click", () => {
        btnLess.parentElement.children[1].style.whiteSpace = "nowrap";
        btnLess.previousElementSibling.style.display = "block";
        btnLess.style.display = "none";
    });
});

