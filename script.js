// Отображение форм в nav
// Search
const navSearch = document.querySelector('.nav__search');
const navSearchForm = document.querySelector('.nav__search-form');

let timeoutIdSearch;

navSearch.addEventListener('mouseenter', () => {
    clearTimeout(timeoutIdSearch);
    navSearchForm.style.display = 'flex';
})

navSearch.addEventListener('mouseleave', () => {
    timeoutIdSearch = setTimeout(() => {
        navSearchForm.style.display = 'none';
    }, 25);
})

navSearchForm.addEventListener('mouseenter', () => {
    clearTimeout(timeoutIdSearch);
})

navSearchForm.addEventListener('mouseleave', () => {
    timeoutIdSearch = setTimeout(() => {
        navSearchForm.style.display = 'none';
    }, 25);
})

// entrance
const navEntry = document.querySelector('.nav__entry');
const navEntryForm = document.querySelector('.nav__entry-form');

let timeoutIdEntry;

navEntry.addEventListener('mouseenter', () => {
    clearTimeout(timeoutIdEntry);
    navEntryForm.style.display = 'flex';
})

navEntry.addEventListener('mouseleave', () => {
    timeoutIdEntry = setTimeout(() => {
        navEntryForm.style.display = 'none';
    }, 25);
})

navEntryForm.addEventListener('mouseenter', () => {
    clearTimeout(timeoutIdEntry);
})

navEntryForm.addEventListener('mouseleave', () => {
    timeoutIdEntry = setTimeout(() => {
        navEntryForm.style.display = 'none';
    }, 25);
})

// basket
const navBasket = document.querySelector('.nav__basket');
const navBasketForm = document.querySelector('.nav__basket-container');

let timeoutIdBasket;

navBasket.addEventListener('mouseenter', () => {
    clearTimeout(timeoutIdBasket);
    navBasketForm.style.display = 'block';
})

navBasket.addEventListener('mouseleave', () => {
    timeoutIdBasket = setTimeout(() => {
        navBasketForm.style.display = 'none';
    }, 25);
})

navBasketForm.addEventListener('mouseenter', () => {
    clearTimeout(timeoutIdBasket);
})

navBasketForm.addEventListener('mouseleave', () => {
    timeoutIdBasket = setTimeout(() => {
        navBasketForm.style.display = 'none';
    }, 25);
})


// Слайдер bullets //

var bullet1 = document.querySelector(".performance__slider button:nth-child(1)");
var bullet2 = document.querySelector(".performance__slider button:nth-child(2)");
var bullet3 = document.querySelector(".performance__slider button:nth-child(3)");
var bg = document.querySelector(".site__bg-1");
var sliderTitle1 = document.querySelector(".performance div:nth-child(1)");
var sliderTitle2 = document.querySelector(".performance div:nth-child(2)");
var sliderTitle3 = document.querySelector(".performance div:nth-child(3)");


if (bullet1) {
       bullet1.addEventListener("click", function () {
              bullet1.classList.add("current");
              bullet2.classList.remove("current");
              bullet3.classList.remove("current");
              bg.classList.add("site__bg-1");
              bg.classList.remove("site__bg-2");
              bg.classList.remove("site__bg-3");
              sliderTitle1.classList.add("slide-current");
              sliderTitle2.classList.remove("slide-current");
              sliderTitle3.classList.remove("slide-current");
       });

       bullet2.addEventListener("click", function () {
              bullet1.classList.remove("current");
              bullet2.classList.add("current");
              bullet3.classList.remove("current");
              bg.classList.remove("site__bg-1");
              bg.classList.add("site__bg-2");
              bg.classList.remove("site__bg-3");
              sliderTitle1.classList.remove("slide-current");
              sliderTitle2.classList.add("slide-current");
              sliderTitle3.classList.remove("slide-current");
       });

       bullet3.addEventListener("click", function () {
              bullet1.classList.remove("current");
              bullet2.classList.remove("current");
              bullet3.classList.add("current");
              bg.classList.remove("site__bg-1");
              bg.classList.remove("site__bg-2");
              bg.classList.add("site__bg-3");
              sliderTitle1.classList.remove("slide-current");
              sliderTitle2.classList.remove("slide-current");
              sliderTitle3.classList.add("slide-current");
       });
}