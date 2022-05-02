

function playSound(e) {
  // Переменная const audio определяет HTML-элементы, которые воспроизводят звуки барабана 
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  // Переменная const key определяет HTML-элементы по их кодам клавиш, 
  // чтобы при нажатии определенной клавиши воспроизводился правильный звук
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  // На простом английском языке в нем говорится: “если срабатывающий тег <audio>
  //  не имеет атрибута data-key keyCode, выйдите из функции”. 
  if (!audio) return

  // Чтобы позволить клавише воспроизводить звук повторно,  нужно перемотать (сбросить) звук. 
  // для этого нужно audio.currentTime сделать равным 0. 
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
}

function removeTransition(e) {
  if (e.target.classList.contains('playing')) {
    e.target.classList.remove('playing');
  }
  else {
    return;
  }
}
const keys = Array.from(document.querySelectorAll('.key'))
// цикл forEach(), для того чтобы прослушиватель событий был на каждой клавише клавиатуры
keys.forEach((key) => key.addEventListener('transitionend', removeTransition))
// Чтобы воспроизвести правильный звук при нажатии клавиши, нужен прослушиватель событий, 
// который будет прослушивать событие нажатия клавиши с клавиатуры - это keydown 
window.addEventListener('keydown', playSound)