import './style.css'
import viteLogo from '/vite.svg'
import javascriptLogo from '/javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"">
      <img src="${javascriptLogo}" class="logo vanilla" alt="Javascript logo" />
    </a>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <h1>Hello VanillaJS!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the VanillaJS logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
