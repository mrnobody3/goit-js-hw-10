import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-lis');
const countryInfo = document.querySelector('.country-info');
searchBox.addEventListener('input', onSearchByName);

function markupList(arr) {
  return arr
    .map(({ flags, name }) => {
      return `<li class="country-item">
        <img
          class="country-img"
          src="${flags.svg}"
          alt="${name.official}"
          width="25"
          height="20"
        />
        <span>${name.official}</span>
      </li>`;
    })
    .join('');
}
function onSearchByName(e) {
  let value = e.currentTarget.value.trim();
  fetchCountries(value)
    .then(r => {
      return markupList(r);
    })
    .then(r => {
      console.log(typeof r);
      return renderMarkup(r);
    })
    .catch(error => console.error(error));
}

function renderMarkup(str = '') {
  countryList.innerHTML = str;
}
