import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
const DEBOUNCE_DELAY = 300;
// console.log(debounce);

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-lis');
const countryInfo = document.querySelector('.country-info');
searchBox.addEventListener('input', onSearchByName);

function onSearchByName(e) {
  console.log(e.currentTarget.value);
}
console.log(fetchCountries('peru').then(r => console.log(r)));
