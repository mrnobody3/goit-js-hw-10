import './css/styles.css';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
searchBox.addEventListener('input', debounce(onSearchByName), 1000);

function onSearchByName(e) {
  console.log(e);
  return fetch('https://restcountries.com/v2/all').then(r => console.log(r.json()));
}
onSearchByName().then(r => console.log(r));
