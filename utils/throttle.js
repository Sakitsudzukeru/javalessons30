function throttle(fun, ms) {
  //fun- функция, которую мы будем вызывать, ms-задержка в миллисекунды
  let isThrottled = false; //переменная-флаг (игнорируются ли наши запросы или нет)
  let savedArgs;
  let savedThis;

  function wrapper() {
    if (isThrottled) {
      // если isThrottled = true, мы игнорируем запрос
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    //если isThrottled = false
    fun.apply(this, arguments); //передаем все аргументы, с которыми была вызвана наша функция
    //Вызов функции при помощи fun.apply  принимает массив аргументов вместо списка
    //При помощи apply можно легко взять метод одного объекта, в том числе встроенного, и вызвать в контексте другого
    isThrottled = true; //игнор запросов, которые будут после

    setTimeout(function () {
      // через заданные миллисекунды обратно isThrottled = false, для отработки следующего запроса
      isThrottled = false;
      if (savedArgs) {
        // если есть сохраненные элементы
        wrapper.apply(savedThis, savedArgs); // текущий контекст и сохраненные элементы
        savedArgs = savedThis = null; //обнуляем
      }
    }, ms);
  }
  return wrapper;
}

// playSound = throttle(playSound, 1000); вызов
