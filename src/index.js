import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
searchBox.addEventListener('input', onSearchByName);

function onSearchByName() {
  return fetch('https://restcountries.com/v2/all').then(r => console.log(r.json()));
}
onSearchByName().then(r => console.log(r));
