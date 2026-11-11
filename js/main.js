// Мобильное меню
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

function closeMenu() {
  nav.classList.remove('nav--open');
  burger.setAttribute('aria-expanded', 'false');
}

burger.addEventListener('click', function () {
  nav.classList.toggle('nav--open');
  const isOpen = nav.classList.contains('nav--open');
  burger.setAttribute('aria-expanded', isOpen);
});

// Закрытие по клавише Escape
document.addEventListener('keydown', function (event) {
  if (event.key !== 'Escape') {
    return;
  }

  // меню
  if (nav.classList.contains('nav--open')) {
    closeMenu();
    burger.focus();
  }

  // модальное окно на странице товара
  if (location.hash === '#modal') {
    location.hash = 'buy';
  }
});
