// MAPEAMENTO
const millisecondsElement = document.querySelector("#milliseconds")
const secondsElement = document.querySelector("#seconds")
const minutesElement = document.querySelector("#minutes")
const hoursElement = document.querySelector("#hours")
const startButton = document.querySelector("#start")
const pauseButton = document.querySelector("#pause")
const resumeButton = document.querySelector("#resume")
const resetButton = document.querySelector("#reset")

// VARIÁVEIS
let milliseconds = 0
let seconds = 0
let minutes = 0
let hours = 0
let paused = false
let interval

// INICIA A CONTAGEM
function startTimer() {
  paused = false
  interval = setInterval(() => {
    if (!paused) {
      milliseconds += 10
      if (milliseconds === 1000) {
        seconds++
        milliseconds = 0
      }
      if (seconds === 60) {
        minutes++
        seconds = 0
      }
      if (minutes === 60) {
        hours++
        minutes = 0
      }
    }
    millisecondsElement.innerHTML = formatMilliseconds(milliseconds)
    secondsElement.innerHTML = formatTime(seconds)
    minutesElement.innerHTML = formatTime(minutes)
    hoursElement.innerHTML = formatTime(hours)
  }, 10);
  startButton.style.display = "none"
  pauseButton.style.display = "block"
}


// PAUSA A CONTAGEM
function pauseTimer() {
  paused = true
  pauseButton.style.display = "none"
  resumeButton.style.display = "block"
}

// CONTINUA A CONTAGEM
function resumeTimer() {
  paused = false
  pauseButton.style.display = "block"
  resumeButton.style.display = "none"
}

// RESETA A CONTAGEM
function resetTimer() {
  clearInterval(interval)
  milliseconds = 0
  seconds = 0
  minutes = 0
  hours  = 0
  millisecondsElement.innerHTML = formatMilliseconds(milliseconds)
  secondsElement.innerHTML = formatTime(seconds)
  minutesElement.innerHTML = formatTime(minutes)
  hoursElement.innerHTML = formatTime(hours)
  startButton.style.display = "block"
  pauseButton.style.display = "none"
  resumeButton.style.display = "none"
}

// FORMATAÇÃO
function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

function formatMilliseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time
}

// EVENTOS
startButton.addEventListener("click", startTimer)
pauseButton.addEventListener("click", pauseTimer)
resumeButton.addEventListener("click", resumeTimer)
resetButton.addEventListener("click", resetTimer)