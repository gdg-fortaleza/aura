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
    registered () {
      console.log('O trabalhador de serviço foi registrado.')
    },
    cached () {
      console.log('O conteúdo foi armazenado em cache para uso off-line.')
    },
    updatefound () {
      console.log('Novo conteúdo está sendo baixado.')
    },
    updated () {
      console.log('Novo conteúdo está disponível; por favor atualize.')
    },
    offline () {
      console.log('Nenhuma conexão com a internet encontrada. App está sendo executado no modo offline.')
    },
    error (error) {
      console.error('Erro durante o registro do trabalhador de serviço:', error)
    }
  })
}
