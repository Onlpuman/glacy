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

const navMenuLink = document.querySelector('.menu__link');
const navSubmenu = document.querySelector('.menu__submenu');


createMenuDropdown = (activeLink, activeSubmenu) => {
	let timeoutId;

	activeLink.addEventListener('mouseenter', () => {

		removeActive = button => button.classList.remove('link-js-active');
		
		buttons.forEach(removeActive);

		clearTimeout(timeoutId);
		activeLink.classList.add('link-js-active');
		activeSubmenu.style.display = 'block';
	})

	activeLink.addEventListener('mouseleave', () => {
		timeoutId = setTimeout(() => {
			activeSubmenu.style.display = 'none';
			activeLink.classList.remove('link-js-active');
		}, 200);
	})

	activeSubmenu.addEventListener('mouseenter', () => {
		clearTimeout(timeoutId);
	})

	activeSubmenu.addEventListener('mouseleave', () => {
		timeoutId = setTimeout(() => {
			activeSubmenu.style.display = 'none';
			activeLink.classList.remove('link-js-active');
		}, 200);
	})
}

createMenuDropdown(navMenuLink, navSubmenu);

createButtonDropdown = (activeButton, activeMenu) => {
	let timeoutId;

	if (activeButton.classList.contains('js-noform')) {
		activeButton.addEventListener('mouseenter', () => {

			buttons.forEach(removeActive);

			removeActive = button => button.classList.remove('active');

			forms.forEach(form => form.style.display = 'none');

			clearTimeout(timeoutId);
			activeButton.classList.add('active');
		})

		activeButton.addEventListener('mouseleave', () => {
			timeoutId = setTimeout(() => {
				activeButton.classList.remove('active');
			}, 100);
		})

	} else {

		activeButton.addEventListener('mouseenter', () => {

			buttons.forEach(removeActive);

			removeActive = button => button.classList.remove('active');

			forms.forEach(form => form.style.display = 'none');

			clearTimeout(timeoutId);
			activeButton.classList.add('active');
			activeMenu.style.display = 'flex';
		})

		activeButton.addEventListener('mouseleave', () => {
			timeoutId = setTimeout(() => {
				activeMenu.style.display = 'none';
				activeButton.classList.remove('active');
			}, 100);
		})

		activeMenu.addEventListener('mouseenter', () => {
			clearTimeout(timeoutId);
		})

		activeMenu.addEventListener('mouseleave', () => {
			timeoutId = setTimeout(() => {
				activeMenu.style.display = 'none';
				activeButton.classList.remove('active');
			}, 100);
		})
	}
}

createButtonDropdown(navSearch, navSearchForm);
createButtonDropdown(navEntry, navEntryForm);
createButtonDropdown(navBasket, navBasketForm);

// Отображение feedback

const navEntryLink = document.querySelector('.js-nav_entry-link');
const navFeedbackFormContainer = document.querySelector('.feedback');
const navFeedbackForm = document.querySelector('.feedback__form');
const navFeedbackClose = document.querySelector('.feedback__form-close')

navEntryLink.addEventListener('click', () => {
	navFeedbackFormContainer.style.display = 'flex';
	navFeedbackForm.style.display = 'flex';
})

navFeedbackClose.addEventListener('click', () => {
	navFeedbackFormContainer.style.display = 'none';
	navFeedbackForm.style.display = 'none';
})

navFeedbackFormContainer.addEventListener('click', () => {
	navFeedbackFormContainer.style.display = 'none';
	navFeedbackForm.style.display = 'none';
})

navFeedbackForm.addEventListener('click', (event) => {
	event.stopPropagation();
});


// Слайдер bullets //

const bullet1 = document.querySelector('.performance__slider button:nth-child(1)');
const bullet2 = document.querySelector('.performance__slider button:nth-child(2)');
const bullet3 = document.querySelector('.performance__slider button:nth-child(3)');
const bg = document.querySelector('.site__bg-1');
const sliderTitle1 = document.querySelector('.performance div:nth-child(1)');
const sliderTitle2 = document.querySelector('.performance div:nth-child(2)');
const sliderTitle3 = document.querySelector('.performance div:nth-child(3)');


if (bullet1) {
	bullet1.addEventListener('click', () => {
		bullet1.classList.add('current');
		bullet2.classList.remove('current');
		bullet3.classList.remove('current');
		bg.classList.add('site__bg-1');
		bg.classList.remove('site__bg-2');
		bg.classList.remove('site__bg-3');
		sliderTitle1.classList.add('slide-current');
		sliderTitle2.classList.remove('slide-current');
		sliderTitle3.classList.remove('slide-current');
	});

	bullet2.addEventListener('click',() => {
		bullet1.classList.remove('current');
		bullet2.classList.add('current');
		bullet3.classList.remove('current');
		bg.classList.remove('site__bg-1');
		bg.classList.add('site__bg-2');
		bg.classList.remove('site__bg-3');
		sliderTitle1.classList.remove('slide-current');
		sliderTitle2.classList.add('slide-current');
		sliderTitle3.classList.remove('slide-current');
	});

	bullet3.addEventListener('click',() => {
		bullet1.classList.remove('current');
		bullet2.classList.remove('current');
		bullet3.classList.add('current');
		bg.classList.remove('site__bg-1');
		bg.classList.remove('site__bg-2');
		bg.classList.add('site__bg-3');
		sliderTitle1.classList.remove('slide-current');
		sliderTitle2.classList.remove('slide-current');
		sliderTitle3.classList.add('slide-current');
	});
}