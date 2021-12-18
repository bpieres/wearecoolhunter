import React from "react"
import ArrowRightLongIcon from "../../shared/ArrowRightLongIcon"
import { Link } from "gatsby"
import ExperiencesPage from "./images/experiences"
import TravelPage from "./images/travel"

const InnovationPages = () => (
    <section className="innovation__pages has-background-white">
        <div className="page-item page-item--left">
            <ExperiencesPage />

            <Link className="page-item--link" to="/experiences">
                <ArrowRightLongIcon color="black" width="30px" />
                <span>Experiences</span>
            </Link>
        </div>
        <div className="page-item page-item--right">
            <Link className="page-item--link" to="/travel">
                <span>Travel</span>
                <ArrowRightLongIcon color="black" width="30px" />
            </Link>

            <TravelPage />
        </div>
    </section>
)

export default InnovationPages
