export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true
  },

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      title: 'Save the Date | Ivanna Gisselle XV',
      meta: [
        {
          name: 'description',
          content: 'Save the Date de XV años de Ivanna Gisselle'
        }
      ]
    }
  }
})