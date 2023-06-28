const setTheme = (theme) => {
  if (theme !== 'light' && theme !== 'dark') {
    throw new Error(`Invalid theme value for setTheme: '${theme}'`)
  }

  const root = document.documentElement
  const icon = document.querySelector('#dark-mode-icon')
  if (theme === 'dark') {
    icon.dataset.feather = 'sun'
  } else if (theme === 'light') {
    icon.dataset.feather = 'moon'
  }
  root.dataset.theme = theme
  window.localStorage.setItem('theme', theme)
  feather.replace()
}

const toggle = document.querySelector('#dark-mode-toggle')
toggle.addEventListener('click', (e) => {
  e.preventDefault()
  let theme = window.localStorage.getItem('theme')
  if (theme == 'light') {
    theme = 'dark'
  } else if (theme === 'dark') {
    theme = 'light'
  } else {
    throw new Error(`Invalid theme in localStorage: '${theme}'`)
  }
  window.localStorage.setItem('theme', theme)
  setTheme(theme)
})

if (!window.localStorage.getItem('theme')) {
  if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    window.localStorage.setItem('theme', 'light')
  } else {
    window.localStorage.setItem('theme', 'dark')
  }
}
setTheme(window.localStorage.getItem('theme'))
