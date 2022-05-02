function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages,`,
  ).then(r => {
    console.log('then');
    if (!r.ok) {
      throw new Error();
    }
    return r.json();
  });
}
export { fetchCountries };
