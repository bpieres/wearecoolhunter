import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import MobileHeader from "../components/home/header/MobileHeader"
import DesktopHeader from "../components/home/header/DesktopHeader"
import WorkSection from "../components/home/work"
import QuotesCarousel from "../components/home/quotes"
import GlobalNetworkSection from "../components/home/global"
import UpdatesSection from "../components/home/updates"

import useWindowSize from "../hooks/useWindowSize"

const IndexPage = () => {
    const { windowSize } = useWindowSize()

    const isMobile = windowSize <= 768

    return (
        <Layout>
            <SEO title="Home" />
            <div className="home">
                {isMobile ? <MobileHeader /> : <DesktopHeader />}
                <WorkSection />
                <QuotesCarousel />
                <GlobalNetworkSection />
                <UpdatesSection />
            </div>
        </Layout>
    )
}

export default IndexPage
