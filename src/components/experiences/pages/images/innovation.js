import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const InnovationPage = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(
                relativePath: { eq: "pages/innovation-right.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Img
            className="page-item--img"
            fluid={data.placeholderImage.childImageSharp.fluid}
        />
    )
}

export default InnovationPage