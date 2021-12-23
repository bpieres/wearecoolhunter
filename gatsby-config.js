module.exports = {
    siteMetadata: {
        title: `Cool Hunter - Exploring new ways of doing business`,
        description: `We are pioneers in discovering and creating new ways of making outstanding business for our clients`,
        author: `Cool Hunter`,
        image: "/meta-image.jpg",
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        // {
        //   resolve: `gatsby-source-filesystem`,
        //   options: {
        //     name: `fonts`,
        //     path: `${__dirname}/src/fonts/`,
        //   },
        // },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `cool-hunter`,
                short_name: `coolhunter`,
                start_url: `/`,
                background_color: `#232323`,
                theme_color: `#B18667`,
                display: `minimal-ui`,
                icon: `static/favicon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-sass`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
