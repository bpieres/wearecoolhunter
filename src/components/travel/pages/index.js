import React from "react"
import ExperiencesPage from "./images/experiences"
import InnovationPage from "./images/innovation"
import ArrowRightLongIcon from "../../shared/ArrowRightLongIcon"
import { Link } from "gatsby"

const TravelPages = () => (
    <section className="travel__pages has-background-white">
        <div className="page-item page-item--left">
            <InnovationPage />

            <Link className="page-item--link" to="/innovation">
                <ArrowRightLongIcon color="black" width="30px" />
                <span>Innovation</span>
            </Link>
        </div>
        <div className="page-item page-item--right">
            <Link className="page-item--link" to="/experiences">
                <span>Experiences</span>
                <ArrowRightLongIcon color="black" width="30px" />
            </Link>
            <ExperiencesPage />
        </div>
    </section>
)

export default TravelPages
