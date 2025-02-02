let burgerIcon = document.querySelector(".nav .container > i"),
links = document.querySelector(".nav .container .links");

burgerIcon.addEventListener("click" , openBurgerIcon);

function openBurgerIcon () {
    burgerIcon.classList.toggle("fa-close")
    links.classList.toggle("link-toggle");
    window.onscroll = () => {
        burgerIcon.classList.remove("fa-close");
        links.classList.remove("link-toggle");
    }
};

// Products Animation

let productBoxes = document.querySelectorAll(".products .container .box"),
    arrivalsBoxes = document.querySelectorAll(".arrivals .container .box"),
    bannerBoxes = document.querySelectorAll(".banner .container .box"),
    saleSection = document.querySelector(".sale");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("animation3");
        } else {
            entry.target.classList.remove("animation3");
        }
    });
}, {
    threshold: .1,
});

productBoxes.forEach(proBox => {
    observer.observe(proBox);
});

// Arrivals Animation
arrivalsBoxes.forEach(box => {
    observer.observe(box);
});

// Open Product And Arrivals Box 
function openBox (boxes) {
    boxes.forEach(box => {
        box.onclick = () => {
            window.location.href = "sproduct.html";
        }
    });
};
openBox(productBoxes);
openBox(arrivalsBoxes);

// Sale Animation
// observer.observe(saleSection);
