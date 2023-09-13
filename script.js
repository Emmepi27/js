const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const btnNavEl = document.querySelector(".btn--mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle("nav--open");
});

("nav--open")


const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        const href = link.getAttribute("href");

        if (link.classList.contains("nav--link"))
        headerEl.classList.toggle("nav--open");

    });
});
// Close mobile navigation



