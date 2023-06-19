function initRangeSlider() {
  var slider = document.getElementById('slider');

  noUiSlider.cssClasses.target += ' range-slider__target';
  noUiSlider.cssClasses.connects += ' range-slider__connects';
  noUiSlider.cssClasses.connect += ' range-slider__connect';
  noUiSlider.cssClasses.base += ' range-slider__base';
  noUiSlider.cssClasses.handle += ' range-slider__handle';
  noUiSlider.cssClasses.handleLower += ' range-slider__handle--lower';

  let minCostInput = document.querySelector('.cost__input--min');
  let maxCostInput = document.querySelector('.cost__input--max');

  noUiSlider.create(slider, {
      start: [getCostValue(minCostInput, 'min'), getCostValue(maxCostInput, 'max')],
      connect: true,
      margin: 300,
      range: {
          'min': parseInt(minCostInput.getAttribute('min')),
          'max': parseInt(maxCostInput.getAttribute('max'))
      },
      keyboardSupport: !slider.hasAttribute('disabled'),
  });

  minCostInput.addEventListener("change", costInputChanged);
  maxCostInput.addEventListener("change", costInputChanged);

  // Binding signature
  slider.noUiSlider.on('update', changeCostInputValues);

  let filterFormResetButton = document.querySelector('.catalog__filter-group button[type="reset"]');
  filterFormResetButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.form.reset();
    costInputChanged(event);
  });
}

function changeCostInputValues(values, handle, unencoded, tap, positions, noUiSlider) {

  let minCostInput = document.querySelector('.cost__input--min');
  let maxCostInput = document.querySelector('.cost__input--max');

  minCostInput.value = parseInt(values[0]);
  maxCostInput.value = parseInt(values[1]);
}

function getCostValue(costInput, additionalAttr) {
  return costInput.hasAttribute('value') && parseInt(costInput.getAttribute('value')) > 0
    ? parseInt(costInput.getAttribute('value'))
    : parseInt(costInput.getAttribute(additionalAttr));
}

function costInputChanged(event) {
  var slider = document.getElementById('slider');
  let minCostInput = document.querySelector('.cost__input--min');
  let maxCostInput = document.querySelector('.cost__input--max');

  slider.noUiSlider.set([minCostInput.value, maxCostInput.value]);
}

export { initRangeSlider };
