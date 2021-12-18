import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const InnovationLeft = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(
                relativePath: { eq: "innovation-left.png" }
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
            className="innovation-item-left--image"
            fluid={data.placeholderImage.childImageSharp.fluid}
        />
    )
}

export default InnovationLeft
