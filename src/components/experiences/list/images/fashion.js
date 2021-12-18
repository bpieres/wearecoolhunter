import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Fashion = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(
                relativePath: { eq: "experiences/fashion.png" }
            ) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Img
            className="item--img item--img-fashion"
            fluid={data.placeholderImage.childImageSharp.fluid}
        />
    )
}

export default Fashion
