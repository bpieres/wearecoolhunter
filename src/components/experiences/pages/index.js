import React from "react"
import InnovationPage from "./images/innovation"
import TravelPage from "./images/travel"
import ArrowRightLongIcon from "../../shared/ArrowRightLongIcon"
import { Link } from "gatsby"

const ExperiencesPages = () => (
    <section className="experiences__pages has-background-white">
        <div className="page-item page-item--left">
            <TravelPage />

            <Link className="page-item--link" to="/travel">
                <ArrowRightLongIcon color="black" width="30px" />
                <span>Travel</span>
            </Link>
        </div>
        <div className="page-item page-item--right">
            <Link className="page-item--link" to="/innovation">
                <span>Innovation</span>
                <ArrowRightLongIcon color="black" width="30px" />
            </Link>

            <InnovationPage />
        </div>
    </section>
)

export default ExperiencesPages
