const progress = document.querySelector('.active-progress')
const hideBtn = document.getElementById('hide')
const animateBtn = document.getElementById('animate')
const modeBtn = document.getElementById('mode')
const valueInput = document.getElementById('value')
let isHiden = false
let isAnimated = false
let darkMode = false
valueInput.addEventListener('change', () => {
  if (valueInput.value < 0) valueInput.value = 0
  if (valueInput.value > 100) valueInput.value = 100

  if (valueInput.value >= 50) {
    progress.style.backgroundImage = `linear-gradient(-90deg, var(--blue-clr) 50%, transparent 50%),linear-gradient(${
      270 + 180 * (((valueInput.value - 50) * 2) / 100)
    }deg, var(--blue-clr) 50%, transparent 50%)`
  } else {
    progress.style.backgroundImage = `linear-gradient(90deg, var(--gray-clr) 50%, transparent 50%), linear-gradient(${
      90 + (180 * valueInput.value * 2) / 100
    }deg, var(--blue-clr) 50%, transparent 50%)`
  }
})

animateBtn.addEventListener('click', () => {
  if (isAnimated) {
    progress.classList.remove('rotated')
    animateBtn.classList.remove('turn-on')
  } else {
    progress.classList.add('rotated')
    animateBtn.classList.add('turn-on')
  }
  isAnimated = !isAnimated
})

hideBtn.addEventListener('click', () => {
  if (isHiden) {
    progress.classList.remove('hidden')
    hideBtn.classList.remove('turn-on')
  } else {
    progress.classList.add('hidden')
    hideBtn.classList.add('turn-on')
  }
  isHiden = !isHiden
})

modeBtn.addEventListener('click', () => {
  if (darkMode) {
    document.documentElement.style.setProperty('--bg-clr', '#fff')
    document.documentElement.style.setProperty('--font-clr', '#070707')
    document.getElementById('sun').style.display = 'block'
    document.getElementById('moon').style.display = 'none'
    modeBtn.classList.remove('turn-on')
  } else {
    document.documentElement.style.setProperty('--bg-clr', '#001A34')
    document.documentElement.style.setProperty('--font-clr', '#fff')
    document.getElementById('sun').style.display = 'none'
    document.getElementById('moon').style.display = 'block'
    modeBtn.classList.add('turn-on')
  }
  darkMode = !darkMode
})
