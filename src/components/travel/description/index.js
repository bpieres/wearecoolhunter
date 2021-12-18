import React from "react"
import ArrowDownIcon from "../../shared/ArrowDownIcon"

const TravelDescription = () => {
    return (
        <div className="travel__description">
            <h2 className="is-size-3 is-size-2-desktop py-3 has-text-white has-text-centered">
                We change the way of <b>traveling</b> before starting the
                journey.
            </h2>

            <ArrowDownIcon
                width="35px"
                height="35px"
                color="#cfb385"
                customClasses="travel__description--arrow"
            />
        </div>
    )
}

export default TravelDescription
