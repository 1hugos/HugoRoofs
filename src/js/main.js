const mobileNav = document.querySelector(".nav__mobile");
const mobileBars = document.querySelector(".nav__menu-bars");
const footerYear = document.querySelector(".footer__year");

function showMobileNavigation() {
	mobileNav.classList.toggle("show");
}

mobileBars.addEventListener("click", showMobileNavigation);

const menuLinks = document.querySelectorAll(".nav__item");

for (const menuLink of menuLinks) {
	mobileNav.classList.remove("show");
	menuLink.addEventListener("click", showMobileNavigation);
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();

    footerYear.innerText = year;
}
handleCurrentYear();