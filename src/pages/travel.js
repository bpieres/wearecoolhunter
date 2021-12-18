import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import TravelHeader from "../components/travel/header"
import TravelDescription from "../components/travel/description"
import TravelList from "../components/travel/list"
import TravelPages from "../components/travel/pages"

const Travel = () => {
    return (
        <Layout>
            <SEO title="Travel" />
            <section className="travel" id="travel">
                {/* <TravelHeader /> */}
                <TravelDescription />
                <TravelList />
                <TravelPages />
            </section>
        </Layout>
    )
}

export default Travel
