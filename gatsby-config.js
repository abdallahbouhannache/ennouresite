module.exports = {
  siteMetadata: {
    title: `clinique médicale`,
    siteUrl: `https://www.cliniquelatreche.com`
  },
  plugins: ["gatsby-plugin-react-helmet", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages",
    options: {
      "name": "components",
      "path": "./src/components/"
    },
    __key: "components"
  }]
};