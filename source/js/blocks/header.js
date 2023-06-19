function openMenu(event) {
  let headerContainer = document.querySelectorAll('.header__container');
  if (headerContainer.length === 0) {
    return;
  }
  headerContainer = headerContainer[0];

  let headerContainerMenuOpenedClass = 'header__container--menu-opened';
  if(headerContainer.classList.contains(headerContainerMenuOpenedClass)) {
    headerContainer.classList.remove(headerContainerMenuOpenedClass);
  } else {
    headerContainer.classList.add(headerContainerMenuOpenedClass);
  }
}
function initHeader() {
  let headerContainer = document.querySelectorAll('.header__container');
  headerContainer = headerContainer.length === 0 ? false : headerContainer[0];
  let headerContainerMenuOpenedClass = 'header__container--menu-opened';
  let headerContainerNoJsClass = 'header__container--no-js';

  if(headerContainer && headerContainer.classList.contains(headerContainerMenuOpenedClass)) {
    headerContainer.classList.remove(headerContainerMenuOpenedClass);
  }

  if(headerContainer && headerContainer.classList.contains(headerContainerNoJsClass)) {
    headerContainer.classList.remove(headerContainerNoJsClass);
  }

  let navToggle = document.querySelector('.header__nav-toggle');
  navToggle.addEventListener('click', openMenu)
}

export {initHeader};
