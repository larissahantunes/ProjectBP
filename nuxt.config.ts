// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css:[
    '~/public/css/master.css'
  ], 
  app:{
    head:{
      title:'Blackpink',
      htmlAttrs:{
        lang:'pt-BR'
      }
    }
  }
})
