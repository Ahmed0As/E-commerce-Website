// Box Sliding Function (1)
let boxes = Array.from(document.querySelectorAll(".features .container .box")),
    featCont = document.querySelector(".features .container"),
    featSection = document.querySelector(".features"),
    productsSection = document.querySelector(".products");

let minHeight = featSection.offsetHeight;
let maxHeight = productsSection.offsetHeight;
let done = false;
let result = 0;

for (let i = 0; i < featCont.children.length; i++) {
    result += featCont.children[i].getBoundingClientRect().right;
};

let averageRight = result / featCont.children.length;

// const observerFeatures = new IntersectionObserver(function (entries) {
//     entries.forEach(function (entry) {
//         if (entry.isIntersecting) {
//             entry.target.classList.add("animation3");
//         } else {
//             entry.target.classList.remove("animation3");
//         }
//     });
// });

window.onload = () => {
    if (document.querySelector("body").offsetWidth > "800") {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= minHeight && window.scrollY <= maxHeight) {
                if (!done) {
                    boxes.forEach(function (box) {
                        if (box.getBoundingClientRect().right < averageRight) {
                            box.style.transform = "translateX(-10rem)";
                            box.classList.add("animation");
                        } else if (box.getBoundingClientRect().right >= averageRight) {
                            box.style.transform = "translateX(10rem)";
                            box.classList.add("animation2");
                        }
                    });
                }
            } else {
                boxes.forEach(function (box) {
                    box.classList.remove("animation");
                    box.classList.remove("animation2");
                });
            }
        });
    } 
    // else {
    //     boxes.forEach(box => {
    //         observerFeatures.observe(box);
    //     })
    // }
}

// Box Sliding Function (2)
// const observerForSliding = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.target.getBoundingClientRect().right <= averageRight) {
//             entry.target.style.transform = "translateX(-10rem)";
//             entry.target.classList.toggle("animation");
//         } else if (entry.target.getBoundingClientRect().right >= averageRight) {
//             entry.target.style.transform = "translateX(10rem)";
//             entry.target.classList.toggle("animation2");
//         }
//     });
// });

// boxes.forEach(box => {
//     observerForSliding.observe(box)
// });