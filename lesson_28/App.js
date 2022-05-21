const speed = document.querySelector(".speed");
const bar = speed.querySelector(".speed-bar");
const video = document.querySelector(".flex");

function handeleMove(e) {
  const y = e.pageY - this.offsetTop;
  const perccent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(perccent * 100) + "%";
  const playbackRate = perccent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + "x";
  video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", handeleMove);
