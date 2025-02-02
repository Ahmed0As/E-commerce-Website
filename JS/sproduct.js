// Function To Redirect To Sproduct Page

let images = document.querySelectorAll(".sproduct .container .secondry-image img"),
mainContainerEl = document.querySelector(".sproduct .container .main-image .main");

images.forEach(image => {
    image.onclick = () => {
        let attr = image.getAttribute("src");
        mainContainerEl.setAttribute("src" , attr);
    };
});