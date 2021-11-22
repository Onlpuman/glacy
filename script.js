// Отображение форм в nav
// Search
const navSearch = document.querySelector('.nav__search');
const navSearchForm = document.querySelector('.nav__search-form');

let timeoutId;

navSearch.addEventListener("mouseenter", function() {
    clearTimeout(timeoutId);
    navSearchForm.style.display = 'flex';
})

navSearch.addEventListener("mouseleave", function() {
        console.log(1)
    timeoutId = setTimeout(() => {
        navSearchForm.style.display = 'none';
    }, 500)

    // clearTimeout(timeoutId);
})

navSearchForm.addEventListener("mouseenter", function () {
    navSearchForm.style.display = 'flex';
    clearTimeout(timeoutId);
})


// entrance
// const navEntry = document.querySelector('.nav__entry');
// const navEntryForm = document.querySelector('.nav__entry-form');

// // basket
// const navBasket = document.querySelector('.nav__basket');
// const navBasketForm = document.querySelector('.nav__basket-container');

// const buttons = document.querySelectorAll('.js-nav-item');
// const forms = document.querySelectorAll('.js-nav-dropdown');

// function createButtonDropdown(activeButton, activeMenu) {
//     let timeoutId; // undefined

//     activeButton.addEventListener('mouseenter', () => {
//         buttons[0].classList.remove('active');
//         buttons[1].classList.remove('active');
//         buttons[2].classList.remove('active');

//         function Array() {

//         }

//         Array.protype.forEach = function(callback) {
//             const array = this;

//             for (let i = 0; i < array.length; i++) {
//                 callback(array[i])
//             }
//         }
        
//         buttons.forEach(removeActive);

//         function removeActive(button) {
//             button.classList.remove('active');
//         }

//         forms.forEach(form => form.style.display = 'none');

//         clearTimeout(timeoutId);
//         activeButton.classList.add('active');
//         activeMenu.style.display = 'flex';
//     })

//     activeButton.addEventListener('mouseleave', () => {
//         timeoutId = setTimeout(() => {
//             activeMenu.style.display = 'none';
//             activeButton.classList.remove('active');
//         }, 1000);
//     })

//     activeMenu.addEventListener('mouseenter', () => {
//         clearTimeout(timeoutId);
//     })

//     activeMenu.addEventListener('mouseleave', () => {
//         timeoutId = setTimeout(() => {
//             activeMenu.style.display = 'none';
//             activeButton.classList.remove('active');
//         }, 1000);
//     })
// }

// createButtonDropdown(navSearch, navSearchForm);
// createButtonDropdown(navEntry, navEntryForm);
// createButtonDropdown(navBasket, navBasketForm);


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



