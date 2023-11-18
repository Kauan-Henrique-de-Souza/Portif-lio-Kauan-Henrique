function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
  }

let abrir_Menu = document.getElementById('abrir_menu')
let menu = document.getElementById('menu_mobile')
let overlay = document.getElementById('overlay_menu')

abrir_Menu.addEventListener('click', ()=>{
  menu.classList.add('menu-Abrir')
})

menu.addEventListener('click', ()=>{
  menu.classList.remove('menu-Abrir')
})

overlay.addEventListener('click', ()=>{
  menu.classList.remove('menu-Abrir')
})

