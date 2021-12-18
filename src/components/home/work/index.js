import React from "react"
import WorkTitle from "./WorkTitle"
import WorkList from "./WorkList"
import XIcon from "../../shared/XIcon"

const WorkSection = () => (
    <section className="home__work" id="work">
        <WorkTitle />
        <WorkList />

        <div className="home__work--x-icon">
            <XIcon color="white" width="25px" />
        </div>
    </section>
)

export default WorkSection
