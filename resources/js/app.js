import '../css/app.scss'

import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/inertia-vue3';
import DefaultLayout from './Layouts/Default.vue';
import '../css/app.scss';


//PrimeVue

import PrimeVue from 'primevue/config';

createInertiaApp({
  resolve: name => {
    const page = require(`./Pages/${name}`).default
    if(!page.layout) {
      page.layout = DefaultLayout
    }

    return page
  },
  setup({el, App, props, plugin}) {
    createApp({ render: () => h(App, props)})
      .use(plugin)
      .use(PrimeVue, {
        ripple: true,
        styleClass: true,
        badge: true,
        tooltip: true
      })
      .mount(el)
  }
})
