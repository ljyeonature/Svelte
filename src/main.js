import { mount } from 'svelte'
import './app.css'
// import App from './01-hello-app/App.svelte'
// import App from './02-counter/App.svelte'
// import App from './02-counter/02-event/Input.svelte'
// import App from './02-counter/02-event/Change.svelte'
// import App from './02-counter/02-event/Submit.svelte'
// import App from './02-counter/02-event/Keydown.svelte'
import App from './02-counter/02-event/MouseEnterLeave.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
