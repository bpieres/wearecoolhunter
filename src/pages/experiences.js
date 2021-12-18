import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import ExperiencesHeader from "../components/experiences/header"
import ExperiencesDescription from "../components/experiences/description"
import ExperiencesList from "../components/experiences/list"
import ExperiencesPages from "../components/experiences/pages"

const Experiences = () => {
    return (
        <Layout>
            <SEO title="Experiences" />
            <section className="experiences" id="experiences">
                {/* <ExperiencesHeader /> */}
                <ExperiencesDescription />
                <ExperiencesList />
                <ExperiencesPages />
            </section>
        </Layout>
    )
}

export default Experiences
