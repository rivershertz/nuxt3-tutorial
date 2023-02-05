// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nahars Nuxt",
      meta: [
        {
          name: "description",
          content:
            "My first timing using Nuxt 3, This is a very good experience! It feels well thought out and intuitive",
        },
      ],
      link: [{rel: "icon", type: "ico", href: "/favicon.ico"}],
    },
  },
});
