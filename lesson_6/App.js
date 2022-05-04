const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
// извлекаем данные из конечной точки и присваиваем возвращаемое значение созданному  пустому массиву const cities = [];
fetch(endpoint)
  .then((Blob) => Blob.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  // вернем отфильтрованное подмножество массива cities, чтобы подтвердить, что возвращается введенное пользователем значение
  // чтобы достичь этого,используем регулярное выражение,
  // чтобы проверить, соответствует ли искомое слово какому-либо штату или городу в массиве cities:
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  //

  const matchArray = findMatches(this.value, cities);
  //выполним цикл над выводом и вернем html-элемент
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class='h1'>${this.value}</span>`
      );

      const stateName = place.state.replace(
        regex,
        `<span class='h1'>${this.value}</span>`
      );
      //отформатируем выходные данные
      return `
    <li>
    <span class='name'>${cityName}, ${stateName}</span>
    <span class='population'>${numberWithCommas(place.population)}</span>
    </li>`;
    })
    .join(""); //т.к метод map() возвращает массив, добавим метод join() чтобы преобразовать его в одну строку

  suggestions.innerHTML = html; // установим внутренний html код в строку
}
// прослушаем элемент пользовательского интерфейса, который вызовет отображение
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
