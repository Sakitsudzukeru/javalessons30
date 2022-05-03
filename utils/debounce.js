const debounce = (fn, ms) => {
  //fn- функция, которую мы будем вызывать, ms-задержка в миллисекунды
  let timeout;
  return function () {
    //возвращаем новую функцию
    const fnCall = () => {
      //функция по вызову
      fn.apply(this, arguments); //передаем все аргументы, с которыми была вызвана наша функция
      //Вызов функции при помощи fn.apply  принимает массив аргументов вместо списка
      //При помощи apply можно легко взять метод одного объекта, в том числе встроенного, и вызвать в контексте другого
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};

// playSound = debounce(playSound, 200); вызов
