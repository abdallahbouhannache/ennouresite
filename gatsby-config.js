module.exports = {
  siteMetadata: {
    title: `clinique médicale`,
    siteUrl: `https://www.cliniquelatreche.com`,
    author: {
      name: `abdallah bouhannache`,
      summary: `a software engineer with msc in computer science and information tech.`,
    },
    description: `a website for for private medical clinic.`,
    social: {
      twitter: `clinique latreche`,
    },
  },
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
      __key: `pages`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/src/components`,
      },
      __key: `components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
      __key: `locale`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
      __key: `blog`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/news`,
        name: `news`,
      },
      __key: `news`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`fr`, `en`, `ar`],
        defaultLanguage: `fr`,
        ns: ["app", "blog"],
        defaultNS: "app",
        // fallbackLanguage: 'ar',
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
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-translate`,
    //   options: {
    //     googleApiKey: '<your_key>', // OPTIONAL: only when Google's translation are set
    //     sourceLanguage: 'en',
    //     targetLanguages: [`en`, `fr`, `ar`],
    //     translateSlug: true, // OPTIONAL: requires Google API key
    //   }
    // }
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
              {
                site {
                  siteMetadata {
                    title
                    description
                    siteUrl
                    site_url: siteUrl
                  }
                }
              }
            `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
                  {
                    allMarkdownRemark(
                      sort: { order: DESC, fields: [frontmatter___date] },
                    ) {
                      nodes {
                        excerpt
                        html
                        fields {
                          slug
                        }
                        frontmatter {
                          title
                          date
                        }
                      }
                    }
                  }
                `,
            output: `/rss.xml`,
            title: `Gatsby Starter Blog RSS Feed`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    // ,
    // {
    //   resolve: `gatsby-plugin-purgecss`, // purges all unused/unreferenced css rules
    //   options: {
    //     develop: true, // Activates purging in npm run develop
    //     purgeOnly: [`/all.sass`], // applies purging only on the bulma css file
    //   },
    // },
    // must be after other CSS plugins
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [`/blog/*`, `/news/*`],
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`, // make sure to keep it last in the array
  ],
}
