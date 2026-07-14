// ===============================
// Best Products - Script.js
// Created for Shahzaib Abbasi
// ===============================

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ===== Navbar Shadow =====
window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (!nav) return;

    if (window.scrollY > 20) {

        nav.classList.add("nav-scroll");

    } else {

        nav.classList.remove("nav-scroll");

    }

});


// ===== Back To Top =====

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// ===== Reveal Animation =====

const reveal = () => {

    const elements = document.querySelectorAll(".card,.about,.hero,.products");

    elements.forEach(el => {

        const windowHeight = window.innerHeight;

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            el.classList.add("active");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();


// ===== Live Search =====

const search = document.querySelector("input");

if (search) {

    search.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            let text = card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// ===== Loading Animation =====

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ===== Console Message =====

console.log("====================================");
console.log(" Best Products");
console.log(" Developed for Shahzaib Abbasi");
console.log(" Amazon Product Research Specialist");
console.log("====================================");
