import { mount } from 'svelte'
import './app.css'
// import App from './01-hello-app/App.svelte'
import App from './02-counter/App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
