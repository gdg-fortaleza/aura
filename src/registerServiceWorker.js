/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered (registration) {
      console.log('O Service worker foi registrado.')

      setInterval(() => {
        registration.update();
      }, 1000 * 60 * 60); // hourly checks
    },
    cached () {
      console.log('O conteúdo foi armazenado em cache para uso off-line.')
    },
    updatefound () {
      console.log('Novo conteúdo está sendo baixado.')
    },
    updated (registration) {
      console.log('Novo conteúdo está disponível; por favor atualize.')
      document.dispatchEvent(
        new CustomEvent('swUpdated', { detail: registration })
      );
    },
    offline () {
      console.log('Nenhuma conexão com a internet encontrada. App está sendo executado no modo offline.')
    },
    error (error) {
      console.error('Erro durante o registro do trabalhador de serviço:', error)
    }
  })
}
