import React from "react"
import ArrowDownIcon from "../../shared/ArrowDownIcon"

const InnovationDescription = () => {
    return (
        <div className="innovation__description">
            <h2 className="is-size-3 is-size-2-desktop py-3 has-text-white has-text-centered">
                We challenge business <b>transformation</b> .
            </h2>

            <ArrowDownIcon
                width="35px"
                height="35px"
                color="#B18667"
                customClasses="innovation__description--arrow"
            />
        </div>
    )
}

export default InnovationDescription
