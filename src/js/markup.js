import { countryList, countryInfo } from './refs';

function markupList(arr) {
  let listStr = arr
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
  renderMarkup(countryList, listStr);
}

function markupInfo(arr) {
  let infoStr = arr
    .map(({ flags, name, capital, population, languages }) => {
      return `<div class="data">
        <img
          class="country-img"
          src="${flags.svg}"
          alt="${name.official}"
          width="25"
          height="20"
        />
        <h3>${name.official}</h3>
      </div>
      <p>Capital: <span class='bold'>${capital}</span></p>
      <p>Population: <span class='bold'>${population}</span></p>
      <p>Languages: <span class='bold'>${Object.values(languages)}</span></p>`;
    })
    .join('');
  renderMarkup(countryInfo, infoStr);
}

function renderMarkup(el, str = '') {
  el.innerHTML = str;
}

export { markupInfo, markupList, renderMarkup };
