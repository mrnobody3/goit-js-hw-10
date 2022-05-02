import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { countryList, countryInfo, searchBox } from './js/refs';
import { fetchCountries } from './js/fetchCountries';
import { markupInfo, markupList, renderMarkup } from './js/markup';
const DEBOUNCE_DELAY = 300;

searchBox.addEventListener('input', debounce(onSearchByName, DEBOUNCE_DELAY));

function onSearchByName(e) {
  let valueEl = e.target.value.trim();
  if (!valueEl) return; 
  renderMarkup(countryList);
  renderMarkup(countryInfo);
  fetchCountries(valueEl)
    .then(r => {
      if (r.length >= 10) {
        return Notiflix.Notify.warning(
          'Too many matches found. Please enter a more specific name.',
        );
      }
      if (r.length === 1) {
        return markupInfo(r);
      }
      return markupList(r);
    })
    .catch(() => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
