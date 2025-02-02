let closeIcons = document.querySelectorAll(".cart table tbody i");

closeIcons.forEach(icon => {
    icon.onclick = () => {
        icon.parentElement.parentElement.remove();
    }
})

let numbers = document.querySelectorAll(".cart table tbody input"),
totals = document.querySelectorAll(".cart table tbody td:last-child");

function update () {
    numbers.forEach(number => {
        number.addEventListener("change" , () => {
            if (number.value >= 0) {
                const total = +((+number.
                    value * 199.9).toFixed(2));
                number.parentElement.nextElementSibling.innerText = `$${total}`;
            } else {
                number.parentElement.nextElementSibling.innerText = "$0";
            }

        });
    });

};

update()