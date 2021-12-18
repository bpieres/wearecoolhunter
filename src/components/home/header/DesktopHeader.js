import React from "react"

// * components
import XIcon from "../../shared/XIcon"

// * images
import Desktop from "./images/desktop"

const DesktopHeader = () => {
    return (
        <div className="home__header has-background-dark has-text-light">
            <div className="container home__header--desktop-container is-fluid">
                <div className="columns">
                    <div className="column golden-borders__container is-8">
                        <div className="golden-borders--desktop">
                            <Desktop />
                        </div>
                    </div>
                    <div className="column  golden-borders__container is-4">
                        <h1 className="has-text-primary home__header--title--desktop">
                            Exploring new ways of doing business.
                        </h1>
                    </div>
                </div>
            </div>

            <XIcon
                width="35px"
                height="35px"
                color="white"
                customClasses="home__x-icon --desktop"
            />
        </div>
    )
}

export default DesktopHeader
