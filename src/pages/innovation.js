import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import InnovationHeader from "../components/innovation/header"
import InnovationDescription from "../components/innovation/description"
import InnovationList from "../components/innovation/list"
import InnovationPages from "../components/innovation/pages"

const Innovation = () => {
    return (
        <Layout>
            <SEO title="Innovation" />
            <section className="innovation" id="innovation">
                {/* <InnovationHeader /> */}
                <InnovationDescription />
                <InnovationList />
                <InnovationPages />
            </section>
        </Layout>
    )
}

export default Innovation
