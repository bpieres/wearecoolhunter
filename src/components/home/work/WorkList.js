import React from "react"
import { Link } from "gatsby"

// * components
import XIcon from "../../shared/XIcon"

// * images
import Travel from "./images/travel"
import Experiences from "./images/experiences"
import InnovationRight from "./images/innovation-right"
import InnovationLeft from "./images/innovation-left"

const WorkList = () => {
    return (
        <div className="home__work--list has-text-light">
            <div className="golden-circle"></div>
            <div className="work-list__container container">
                <div className="travel-item">
                    <div className="item--golden-square has-background-dark">
                        <div className="item--description">
                            <h3 className="is-size-4 mb-3">Travel</h3>
                            <p>Redefining journey's patterns</p>
                        </div>
                    </div>

                    <Travel />

                    <Link to="/travel" className="item--see-more">
                        <span href="#" className="see-more">
                            See More
                        </span>
                        <span className="close">
                            <XIcon width="25px" height="25px" color="white" />
                        </span>
                    </Link>
                </div>

                <div className="experiences-item">
                    <div className="item--golden-square has-background-dark">
                        <div className="item--description">
                            <h3 className="is-size-4 mb-3">Experiences</h3>
                            <p>Setting trends to succeed</p>
                        </div>
                    </div>

                    <Experiences />

                    <Link to="/experiences" className="item--see-more">
                        <span href="#" className="see-more">
                            See More
                        </span>
                        <span href="" className="close">
                            <XIcon width="25px" height="25px" color="white" />
                        </span>
                    </Link>
                </div>

                <div className="innovation-item">
                    <div className="item--golden-square has-background-dark">
                        <div className="item--description">
                            <h3 className="is-size-4 mb-3">Innovation</h3>
                            <p>Intellectual Property Marketplace</p>
                        </div>
                    </div>

                    <InnovationLeft />
                    <InnovationRight />

                    <Link to="/innovation" className="item--see-more">
                        <span href="#" className="see-more">
                            See More
                        </span>
                        <span href="" className="close">
                            <XIcon width="25px" height="25px" color="white" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default WorkList
