module.exports = {
  siteMetadata: {
    title: `clinique médicale`,
    siteUrl: `https://www.cliniquelatreche.com`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
      options: {
        name: "components",
        path: `${__dirname}/src/components/`,
      },
      __key: "components",
      options: {
        path: `${__dirname}/locales/`,
        name: `locale`,
      },
      __key: "locale",
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `fr`, `ar`],
        defaultLanguage: `en`,
        siteUrl: `http://localhost:8000/`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
      // pages: [
      //   {
      //     matchPath: '/:lang?/home',
      //     getLanguageFromPath: true,
      //   },
      //   {
      //     matchPath: '/:lang?/404',
      //     getLanguageFromPath: true,
      //   },
      // ]
    },
    // {
    //   resolve: `gatsby-plugin-translate`,
    //   options: {
    //     googleApiKey: '<your_key>', // OPTIONAL: only when Google's translation are set
    //     sourceLanguage: 'en',
    //     targetLanguages: [`en`, `fr`, `ar`],
    //     translateSlug: true, // OPTIONAL: requires Google API key
    //   }
    // }
  ],
};
