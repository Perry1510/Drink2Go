
function setCurrentPagination(paginationItem) {
  let paginationList = document.querySelector('.pagination__list');
  let currentActive = paginationList.querySelector('.pagination__item--current');
  currentActive.classList.remove('pagination__item--current');
  let currentActiveButton = currentActive.querySelector('.pagination__button');
  currentActiveButton.removeAttribute("tabindex");

  paginationItem.classList.add('pagination__item--current');
  let newPaginationButton = paginationItem.querySelector('.pagination__button');
  newPaginationButton.setAttribute('tabindex', '-1');
}

function initCatalogPagination() {
  let currentPaginationButton = document.querySelector('.pagination__item--current .pagination__button');
  currentPaginationButton.setAttribute('tabindex', '-1');

  let paginationItems = document.querySelectorAll('.pagination__item:not(:has(.pagination__button--icon))');
  paginationItems.forEach(paginationItem => {
    paginationItem.addEventListener('click', (event) => {
      setCurrentPagination(paginationItem);
    });
  });

  let nextPaginationItem = document.querySelector('.pagination__item .pagination__button--next');
  nextPaginationItem.addEventListener('click', (event) => {
    let paginationItemIndex = Array.from(paginationItems).findIndex(element => element.classList.contains('pagination__item--current')) + 1;
    setCurrentPagination(paginationItems[paginationItemIndex]);
  });

  let prevPaginationItem = document.querySelector('.pagination__item .pagination__button--prev');
  prevPaginationItem.addEventListener('click', (event) => {
    let paginationItemIndex =  Array.from(paginationItems).findIndex(element => element.classList.contains('pagination__item--current')) - 1;
    setCurrentPagination(paginationItems[paginationItemIndex]);
  });

  let productCardControl = document.querySelector('.product-cards__control');
  const DATA_ACTIVE_ATTR = 'data-active';
  productCardControl.addEventListener('click', (event) => {
      event.target.setAttribute(DATA_ACTIVE_ATTR, event.target.getAttribute(DATA_ACTIVE_ATTR) === 'true' ? 'false' : 'true');
  });
  productCardControl.addEventListener('blur', (event) => {
    event.target.setAttribute(DATA_ACTIVE_ATTR, 'false');
  });

  productCardControl.addEventListener('keydown', (event) => {
    event.target.setAttribute(DATA_ACTIVE_ATTR, event.target.getAttribute(DATA_ACTIVE_ATTR) === 'true' ? 'false' : 'true');
  })
}

export { initCatalogPagination };
