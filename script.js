// Отображение форм в nav
// Search
const navSearch = document.querySelector('.nav__search');
const navSearchForm = document.querySelector('.nav__search-form')

//entrance
const navEntry = document.querySelector('.nav__entry');
const navEntryForm = document.querySelector('.nav__entry-form');

// basket
const navBasket = document.querySelector('.nav__basket');
const navBasketForm = document.querySelector('.nav__basket-container');

const buttons = document.querySelectorAll('.js-nav-item');
const forms = document.querySelectorAll('.js-nav-dropdown');

const navMenuLinks = document.querySelectorAll('.menu__link');
const navMenuLink = document.querySelector('.menu__link');
const navMenuForm = document.querySelector('.menu__submenu');


createMenuDropdown(navMenuLink, navMenuForm)

function createMenuDropdown(activeLink, activeForm) {
    let timeoutId;

    activeLink.addEventListener('mouseenter', () => { /* 1_Наводим мышь на кнопку */
                
        buttons.forEach(removeActive);                      /* 1--Убираем подложку у ВСЕХ КНОПОК*/

        function removeActive(button) {                             /* */
            button.classList.remove('link-js-active');              /* */
        }

        clearTimeout(timeoutId);                            /*Обнуляем таймер*/
        activeLink.classList.add('link-js-active');          /* 1--Включаем подложку КНОПКИ*/
        activeForm.style.display = 'block';                  /* 1--Включаем видимость ФОРМЫ SUBMENU*/
    })

    activeLink.addEventListener('mouseleave', () => {       /* 2--Уводим мышь с кнопки*/
        timeoutId = setTimeout(() => {                      /* 2--Ставим таймер*/
            activeForm.style.display = 'none';              /* 2--Убираем видимость ФОРМЫ */  
            activeLink.classList.remove('link-js-active');  /* 2--Убираем подложку КНОПКИ*/
        }, 200);
    })

    activeForm.addEventListener('mouseenter', () => {       /* 3--Наводим мышь на форму*/
        clearTimeout(timeoutId);                            /* 3--Обнуляем таймер*/
    })

    activeForm.addEventListener('mouseleave', () => {       /* 4--Уводим мышь с формы*/
        timeoutId = setTimeout(() => {                      /* 4--Ставим таймер*/
            activeForm.style.display = 'none';              /* 4--Убираем видимость ФОРМЫ*/
            activeLink.classList.remove('link-js-active');  /* 4--Убираем подложку КНОПКИ*/
        }, 200);
    }) 
}

createButtonDropdown(navSearch, navSearchForm);
createButtonDropdown(navEntry, navEntryForm);
createButtonDropdown(navBasket, navBasketForm);

function createButtonDropdown(activeButton, activeMenu) {
    let timeoutId;

    if (activeButton.classList.contains('js-noform')) {
        activeButton.addEventListener('mouseenter', () => { /* 1_Наводим мышь на кнопку */
                    
            buttons.forEach(removeActive);                      /* 1--Убираем подложку у ВСЕХ КНОПОК*/

            function removeActive(button) {                     /* */
                button.classList.remove('active');              /* */
            }

            forms.forEach(form => form.style.display = 'none'); /* 1--Убираем видимость ВСЕХ ФОРМ*/

            clearTimeout(timeoutId);                            /*Обнуляем таймер*/
            activeButton.classList.add('active');               /* 1--Включаем подложку КНОПКИ*/
        })

        activeButton.addEventListener('mouseleave', () => { /* 2--Уводим мышь с кнопки*/
            timeoutId = setTimeout(() => {                    /* 2--Ставим таймер*/ 
                activeButton.classList.remove('active');         /* 2--Убираем подложку КНОПКИ*/
            }, 100);
        })

    } else {

        activeButton.addEventListener('mouseenter', () => { /* 1_Наводим мышь на кнопку */
                    
            buttons.forEach(removeActive);                      /* 1--Убираем подложку у ВСЕХ КНОПОК*/

            function removeActive(button) {                     /* */
                button.classList.remove('active');              /* */
            }

            forms.forEach(form => form.style.display = 'none'); /* 1--Убираем видимость ВСЕХ ФОРМ*/

            clearTimeout(timeoutId);                            /*Обнуляем таймер*/
            activeButton.classList.add('active');               /* 1--Включаем подложку КНОПКИ*/
            activeMenu.style.display = 'flex';                  /* 1--Включаем видимость ФОРМЫ*/
        })

        activeButton.addEventListener('mouseleave', () => { /* 2--Уводим мышь с кнопки*/
            timeoutId = setTimeout(() => {                    /* 2--Ставим таймер*/
                activeMenu.style.display = 'none';               /* 2--Убираем видимость ФОРМЫ*/  
                activeButton.classList.remove('active');         /* 2--Убираем подложку КНОПКИ*/
            }, 100);
        })

        activeMenu.addEventListener('mouseenter', () => {   /* 3--Наводим мышь на форму*/
            clearTimeout(timeoutId);                          /* 3--Обнуляем таймер*/
        })

        activeMenu.addEventListener('mouseleave', () => {   /* 4--Уводим мышь с формы*/
            timeoutId = setTimeout(() => {                    /* 4--Ставим таймер*/
                activeMenu.style.display = 'none';              /* 4--Убираем видимость ФОРМЫ*/
                activeButton.classList.remove('active');        /* 4--Убираем подложку КНОПКИ*/
            }, 100);
        })
    }
}

// Отображение feedback
const navEntryLink = document.querySelector('.js-nav_entry-link');
const navFeedback = document.querySelector('.feedback__form');
const feedback = document.querySelector('.feedback');
//const propagation = document.querySelector('.feedback__form .feedback');


navEntryLink.addEventListener("click", () => {
    feedback.style.display = 'flex';
    navFeedback.style.display = 'flex';
})

feedback.addEventListener("click", () => {
    feedback.style.display = 'none';
})

/*propagation.onclick = (event) => {
     event.stopPropagation();
}
*/

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



