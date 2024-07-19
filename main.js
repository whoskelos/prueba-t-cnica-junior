import './style.css'
import { menu } from './src/components/menu.js'

document.querySelector('#app').innerHTML = `
  <div>
    <header id="header"></header>
  </div>
`

menu(document.querySelector('#header'))
